import React from 'react';
import { fireEvent, render, screen, within } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ThemeProvider } from 'styled-components';
import { I18nextProvider } from 'react-i18next';
import i18n from '../Internationalization/I18n';
import { darkTheme } from '../../utils/Theme';
import Projects from './Project';

const renderProjects = () => render(
  <I18nextProvider i18n={i18n}><ThemeProvider theme={darkTheme}>
    <Projects />
  </ThemeProvider></I18nextProvider>
);

beforeEach(async () => { localStorage.clear(); await i18n.changeLanguage('en'); });

test('shows work immediately without a category choice', () => {
  renderProjects();
  expect(screen.getByRole('button', { name: /Paysage-Meloche/i })).toBeVisible();
});

test('finds a project by its displayed name, ignoring surrounding whitespace', () => {
  renderProjects();
  fireEvent.change(screen.getByPlaceholderText('Search by technology or project name'), { target: { value: '  QuickReload  ' } });
  expect(screen.getByRole('button', { name: /QuickReload/i })).toBeVisible();
  expect(screen.queryByRole('button', { name: /Paysage-Meloche/i })).not.toBeInTheDocument();
});

test('opens a labelled keyboard-accessible dialog and closes it with Escape', () => {
  renderProjects();
  const trigger = screen.getByRole('button', { name: /Paysage-Meloche/i });
  trigger.focus();
  fireEvent.click(trigger);
  const dialog = screen.getByRole('dialog', { name: 'Paysage-Meloche' });
  expect(within(dialog).getByRole('button', { name: 'Close project' })).toBeVisible();
  fireEvent.keyDown(dialog, { key: 'Escape' });
  expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  expect(trigger).toHaveFocus();
});

test('combines game and university filters without losing the three new games', () => {
  renderProjects();
  fireEvent.click(screen.getByRole('button', { name: 'Games' }));
  fireEvent.change(screen.getByRole('combobox', { name: 'Project context' }), { target: { value: 'University' } });
  ['View Straw and Feathers', 'View Grouillère', 'View LetumLoop — TPS Prototype'].forEach(name => {
    expect(screen.getByRole('button', { name })).toBeVisible();
  });
  expect(screen.queryByRole('button', { name: 'View ARCHIVERIF' })).not.toBeInTheDocument();
  expect(screen.queryByRole('button', { name: 'View QuickReload' })).not.toBeInTheDocument();
});

test('searches French titles without accents and recovers from an empty result', async () => {
  await i18n.changeLanguage('fr');
  renderProjects();
  const search = screen.getByRole('searchbox');
  fireEvent.change(search, { target: { value: 'grouillere' } });
  expect(screen.getByRole('button', { name: 'Voir Grouillère' })).toBeVisible();
  fireEvent.change(search, { target: { value: 'nonexistentzzzz' } });
  expect(screen.queryByRole('button', { name: 'Voir Grouillère' })).not.toBeInTheDocument();
  fireEvent.click(screen.getByRole('button', { name: 'Voir tous les projets' }));
  expect(search).toHaveValue('');
  expect(screen.getByRole('button', { name: 'Voir ARCHIVERIF' })).toBeVisible();
});
