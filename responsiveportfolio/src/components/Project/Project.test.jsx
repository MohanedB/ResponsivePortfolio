import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ThemeProvider } from 'styled-components';
import { I18nextProvider } from 'react-i18next';
import i18n from '../Internationalization/I18n';
import { darkTheme } from '../../utils/Theme';
import Projects from './Project';
import { MemoryRouter } from 'react-router-dom';

const renderProjects = () => render(
  <I18nextProvider i18n={i18n}><ThemeProvider theme={darkTheme}>
    <MemoryRouter><Projects /></MemoryRouter>
  </ThemeProvider></I18nextProvider>
);

beforeEach(async () => { localStorage.clear(); await i18n.changeLanguage('en'); });

test('shows work immediately without a category choice', () => {
  renderProjects();
  expect(screen.getByRole('link', { name: /Paysage-Meloche/i })).toBeVisible();
});

test('finds a project by its displayed name, ignoring surrounding whitespace', () => {
  renderProjects();
  fireEvent.change(screen.getByPlaceholderText('Search by technology or project name'), { target: { value: '  QuickReload  ' } });
  expect(screen.getByRole('link', { name: /QuickReload/i })).toBeVisible();
  expect(screen.queryByRole('link', { name: /Paysage-Meloche/i })).not.toBeInTheDocument();
});

test('provides a shareable project page link', () => {
  renderProjects();
  expect(screen.getByRole('link', { name: /Paysage-Meloche/i })).toHaveAttribute('href', '/projects/paysage-meloche');
});

test('combines game and university filters without losing the three new games', () => {
  renderProjects();
  fireEvent.click(screen.getByRole('button', { name: 'Games' }));
  fireEvent.change(screen.getByRole('combobox', { name: 'Project context' }), { target: { value: 'University' } });
  ['More information about Straw and Feathers', 'More information about Grouillère', 'More information about LetumLoop — TPS Prototype'].forEach(name => {
    expect(screen.getByRole('link', { name })).toBeVisible();
  });
  expect(screen.queryByRole('link', { name: 'More information about ARCHIVERIF' })).not.toBeInTheDocument();
  expect(screen.queryByRole('link', { name: 'More information about QuickReload' })).not.toBeInTheDocument();
});

test('searches French titles without accents and recovers from an empty result', async () => {
  await i18n.changeLanguage('fr');
  renderProjects();
  const search = screen.getByRole('searchbox');
  fireEvent.change(search, { target: { value: 'grouillere' } });
  expect(screen.getByRole('link', { name: 'En savoir plus sur Grouillère' })).toBeVisible();
  fireEvent.change(search, { target: { value: 'nonexistentzzzz' } });
  expect(screen.queryByRole('link', { name: 'En savoir plus sur Grouillère' })).not.toBeInTheDocument();
  fireEvent.click(screen.getByRole('button', { name: 'Voir tous les projets' }));
  expect(search).toHaveValue('');
  expect(screen.getByRole('link', { name: 'En savoir plus sur ARCHIVERIF' })).toBeVisible();
});
