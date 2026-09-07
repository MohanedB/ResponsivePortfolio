import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ThemeProvider } from 'styled-components';
import { I18nextProvider } from 'react-i18next';
import i18n from '../Internationalization/I18n';
import { darkTheme } from '../../utils/Theme';
import Projects from './Project';
import { MemoryRouter, useLocation } from 'react-router-dom';

const QueryLocation = () => <div data-testid="query-location">{useLocation().search}</div>;

const renderProjects = (entry = '/') => render(
  <I18nextProvider i18n={i18n}><ThemeProvider theme={darkTheme}>
    <MemoryRouter initialEntries={[entry]}><Projects /><QueryLocation /></MemoryRouter>
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

test('combines engine, calendar year and language to find the two 2025 Unity games', () => {
  renderProjects();
  fireEvent.click(screen.getByRole('button', { name: 'Games' }));
  fireEvent.change(screen.getByRole('combobox', { name: 'Project context' }), { target: { value: 'University' } });
  fireEvent.change(screen.getByRole('combobox', { name: 'Game engine' }), { target: { value: 'unity' } });
  fireEvent.change(screen.getByRole('combobox', { name: 'Year' }), { target: { value: '2025' } });
  fireEvent.change(screen.getByRole('combobox', { name: 'Programming language' }), { target: { value: 'csharp' } });

  expect(screen.getByRole('link', { name: 'More information about Robot Control in Unity' })).toBeVisible();
  expect(screen.getByRole('link', { name: 'More information about The Great Game of War' })).toBeVisible();
  expect(screen.getAllByRole('link')).toHaveLength(2);
  const query = new URLSearchParams(screen.getByTestId('query-location').textContent);
  expect(Object.fromEntries(query)).toEqual({ type: 'gamedev', context: 'University', engine: 'unity', year: '2025', language: 'csharp' });
});

test('keeps C# distinct from C++ and finds backend Python work without a Python card tag', () => {
  renderProjects();
  const language = screen.getByRole('combobox', { name: 'Programming language' });
  fireEvent.change(language, { target: { value: 'csharp' } });
  expect(screen.getByRole('link', { name: 'More information about QuickReload' })).toBeVisible();
  expect(screen.queryByRole('link', { name: 'More information about LetumLoop — TPS Prototype' })).not.toBeInTheDocument();
  expect(screen.queryByRole('link', { name: 'More information about Grouillère' })).not.toBeInTheDocument();

  fireEvent.change(language, { target: { value: 'cpp' } });
  expect(screen.getByRole('link', { name: 'More information about LetumLoop — TPS Prototype' })).toBeVisible();
  expect(screen.queryByRole('link', { name: 'More information about QuickReload' })).not.toBeInTheDocument();

  fireEvent.change(language, { target: { value: 'python' } });
  expect(screen.getByRole('link', { name: 'More information about ARCHIVERIF' })).toBeVisible();
  expect(screen.queryByRole('link', { name: 'More information about LetumLoop — TPS Prototype' })).not.toBeInTheDocument();
});

test('applies a calendar year from a shared URL before the visitor touches a filter', () => {
  renderProjects('/?year=2025');
  expect(screen.getByRole('combobox', { name: 'Year' })).toHaveValue('2025');
  expect(screen.getByRole('link', { name: 'More information about Robot Control in Unity' })).toBeVisible();
  expect(screen.getByRole('link', { name: 'More information about The Great Game of War' })).toBeVisible();
  expect(screen.queryByRole('link', { name: 'More information about QuickReload' })).not.toBeInTheDocument();
  expect(screen.queryByRole('link', { name: 'More information about Straw and Feathers' })).not.toBeInTheDocument();
});

test('lets visitors find projects whose calendar year has not been specified', () => {
  renderProjects('/?year=unspecified');
  expect(screen.getByRole('combobox', { name: 'Year' })).toHaveValue('unspecified');
  expect(screen.getByRole('link', { name: 'More information about Straw and Feathers' })).toBeVisible();
  expect(screen.getByRole('link', { name: 'More information about ARCHIVERIF' })).toBeVisible();
  expect(screen.queryByRole('link', { name: 'More information about Robot Control in Unity' })).not.toBeInTheDocument();
});

test('searches engine and programming-language labels and calendar years', () => {
  renderProjects();
  const search = screen.getByRole('searchbox');
  fireEvent.change(search, { target: { value: 'Unreal Engine' } });
  expect(screen.getByRole('link', { name: 'More information about LetumLoop — TPS Prototype' })).toBeVisible();
  expect(screen.queryByRole('link', { name: 'More information about QuickReload' })).not.toBeInTheDocument();

  fireEvent.change(search, { target: { value: 'Python' } });
  expect(screen.getByRole('link', { name: 'More information about ARCHIVERIF' })).toBeVisible();
  expect(screen.queryByRole('link', { name: 'More information about QuickReload' })).not.toBeInTheDocument();

  fireEvent.change(search, { target: { value: '2025' } });
  expect(screen.getByRole('link', { name: 'More information about Robot Control in Unity' })).toBeVisible();
  expect(screen.getByRole('link', { name: 'More information about The Great Game of War' })).toBeVisible();
  expect(screen.queryByRole('link', { name: 'More information about QuickReload' })).not.toBeInTheDocument();
});

test('recovers from an empty combined result by clearing every filter while retaining unrelated query parameters', () => {
  renderProjects('/?type=gamedev&context=University&engine=unity&year=2025&language=python&q=robot&utm_campaign=portfolio');
  expect(screen.queryByRole('link', { name: 'More information about Robot Control in Unity' })).not.toBeInTheDocument();
  fireEvent.click(screen.getByRole('button', { name: 'Show all projects' }));

  expect(screen.getByRole('searchbox')).toHaveValue('');
  expect(screen.getByRole('button', { name: 'All projects' })).toHaveAttribute('aria-pressed', 'true');
  screen.getAllByRole('combobox').forEach(filter => expect(filter).toHaveValue('all'));
  expect(screen.getByTestId('query-location').textContent).toBe('?utm_campaign=portfolio');
  expect(screen.getByRole('link', { name: 'More information about Robot Control in Unity' })).toBeVisible();
  expect(screen.getByRole('link', { name: 'More information about ARCHIVERIF' })).toBeVisible();
});

test('treats invalid shared filter values as all and still allows the visitor to clear them', () => {
  renderProjects('/?type=unknown&context=unknown&engine=unknown&year=9999&language=unknown&utm_campaign=portfolio');
  expect(screen.getByRole('button', { name: 'All projects' })).toHaveAttribute('aria-pressed', 'true');
  screen.getAllByRole('combobox').forEach(filter => expect(filter).toHaveValue('all'));
  expect(screen.getByRole('link', { name: 'More information about ARCHIVERIF' })).toBeVisible();
  expect(screen.getByRole('link', { name: 'More information about Robot Control in Unity' })).toBeVisible();
  fireEvent.click(screen.getByRole('button', { name: 'Clear filters' }));
  expect(screen.getByTestId('query-location').textContent).toBe('?utm_campaign=portfolio');
});
