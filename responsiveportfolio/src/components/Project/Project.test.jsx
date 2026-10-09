import React from 'react';
import { fireEvent, render, screen, within } from '@testing-library/react';
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

const catalog = () => within(screen.getByRole('region', { name: i18n.t('AllProjects') }));

beforeEach(async () => { localStorage.clear(); await i18n.changeLanguage('en'); });

test('shows work immediately without a category choice', () => {
  renderProjects();
  expect(catalog().getByRole('link', { name: /Paysage-Meloche/i })).toBeVisible();
});

test('finds a project by its displayed name, ignoring surrounding whitespace', () => {
  renderProjects();
  fireEvent.change(screen.getByPlaceholderText('Search by technology or project name'), { target: { value: '  QuickReload  ' } });
  expect(catalog().getByRole('link', { name: /QuickReload/i })).toBeVisible();
  expect(catalog().queryByRole('link', { name: /Paysage-Meloche/i })).not.toBeInTheDocument();
});

test('provides a shareable project page link', () => {
  renderProjects();
  expect(catalog().getByRole('link', { name: /Paysage-Meloche/i })).toHaveAttribute('href', '/projects/paysage-meloche');
});

test('combines game and university filters without losing the three new games', () => {
  renderProjects();
  fireEvent.click(screen.getByRole('button', { name: 'Games' }));
  fireEvent.change(screen.getByRole('combobox', { name: 'Project context' }), { target: { value: 'University' } });
  ['More information about Straw and Feathers', 'More information about Grouillère', 'More information about LetumLoop — TPS Prototype'].forEach(name => {
    expect(catalog().getByRole('link', { name })).toBeVisible();
  });
  expect(catalog().queryByRole('link', { name: 'More information about ARCHIVERIF' })).not.toBeInTheDocument();
  expect(catalog().queryByRole('link', { name: 'More information about QuickReload' })).not.toBeInTheDocument();
});

test('searches French titles without accents and recovers from an empty result', async () => {
  await i18n.changeLanguage('fr');
  renderProjects();
  const search = screen.getByRole('searchbox');
  fireEvent.change(search, { target: { value: 'grouillere' } });
  expect(catalog().getByRole('link', { name: 'En savoir plus sur Grouillère' })).toBeVisible();
  fireEvent.change(search, { target: { value: 'nonexistentzzzz' } });
  expect(catalog().queryByRole('link', { name: 'En savoir plus sur Grouillère' })).not.toBeInTheDocument();
  fireEvent.click(screen.getByRole('button', { name: 'Voir tous les projets' }));
  expect(search).toHaveValue('');
  expect(catalog().getByRole('link', { name: 'En savoir plus sur ARCHIVERIF' })).toBeVisible();
});

test('combines engine, calendar year and language to find the two 2025 Unity games', () => {
  renderProjects();
  fireEvent.click(screen.getByRole('button', { name: 'Games' }));
  fireEvent.change(screen.getByRole('combobox', { name: 'Project context' }), { target: { value: 'University' } });
  fireEvent.change(screen.getByRole('combobox', { name: 'Game engine' }), { target: { value: 'unity' } });
  fireEvent.change(screen.getByRole('combobox', { name: 'Year' }), { target: { value: '2025' } });
  fireEvent.change(screen.getByRole('combobox', { name: 'Programming language' }), { target: { value: 'csharp' } });

  expect(catalog().getByRole('link', { name: 'More information about Robot Control in Unity' })).toBeVisible();
  expect(catalog().getByRole('link', { name: 'More information about The Great Game of War' })).toBeVisible();
  expect(catalog().getAllByRole('link')).toHaveLength(2);
  const query = new URLSearchParams(screen.getByTestId('query-location').textContent);
  expect(Object.fromEntries(query)).toEqual({ type: 'gamedev', context: 'University', engine: 'unity', year: '2025', language: 'csharp' });
});

test('keeps C# distinct from C++ and finds backend Python work without a Python card tag', () => {
  renderProjects();
  const language = screen.getByRole('combobox', { name: 'Programming language' });
  fireEvent.change(language, { target: { value: 'csharp' } });
  expect(catalog().getByRole('link', { name: 'More information about QuickReload' })).toBeVisible();
  expect(catalog().queryByRole('link', { name: 'More information about LetumLoop — TPS Prototype' })).not.toBeInTheDocument();
  expect(catalog().queryByRole('link', { name: 'More information about Grouillère' })).not.toBeInTheDocument();

  fireEvent.change(language, { target: { value: 'cpp' } });
  expect(catalog().getByRole('link', { name: 'More information about LetumLoop — TPS Prototype' })).toBeVisible();
  expect(catalog().getByRole('link', { name: 'More information about Straw and Feathers' })).toBeVisible();
  expect(catalog().queryByRole('link', { name: 'More information about QuickReload' })).not.toBeInTheDocument();

  fireEvent.change(language, { target: { value: 'python' } });
  expect(catalog().getByRole('link', { name: 'More information about ARCHIVERIF' })).toBeVisible();
  expect(catalog().queryByRole('link', { name: 'More information about LetumLoop — TPS Prototype' })).not.toBeInTheDocument();
});

test('applies a calendar year from a shared URL before the visitor touches a filter', () => {
  renderProjects('/?year=2025');
  expect(screen.getByRole('combobox', { name: 'Year' })).toHaveValue('2025');
  expect(catalog().getByRole('link', { name: 'More information about Robot Control in Unity' })).toBeVisible();
  expect(catalog().getByRole('link', { name: 'More information about The Great Game of War' })).toBeVisible();
  expect(catalog().queryByRole('link', { name: 'More information about QuickReload' })).not.toBeInTheDocument();
  expect(catalog().queryByRole('link', { name: 'More information about Straw and Feathers' })).not.toBeInTheDocument();
});

test('finds all five recent projects in 2026 and shows their year on the cards', () => {
  renderProjects('/?year=2026');
  expect(screen.getByRole('combobox', { name: 'Year' })).toHaveValue('2026');
  ['Straw and Feathers', 'BouStreaming', 'ARCHIVERIF', 'Grouillère', 'LetumLoop — TPS Prototype'].forEach(title => {
    expect(catalog().getByRole('link', { name: `More information about ${title}` })).toHaveTextContent('2026');
  });
  expect(catalog().getAllByRole('link')).toHaveLength(5);
  expect(screen.queryByRole('option', { name: 'Not specified' })).not.toBeInTheDocument();
  expect(catalog().queryByRole('link', { name: 'More information about Robot Control in Unity' })).not.toBeInTheDocument();
});

test('searches engine and programming-language labels and calendar years', () => {
  renderProjects();
  const search = screen.getByRole('searchbox');
  fireEvent.change(search, { target: { value: 'Unreal Engine' } });
  expect(catalog().getByRole('link', { name: 'More information about LetumLoop — TPS Prototype' })).toBeVisible();
  expect(catalog().queryByRole('link', { name: 'More information about QuickReload' })).not.toBeInTheDocument();

  fireEvent.change(search, { target: { value: 'Python' } });
  expect(catalog().getByRole('link', { name: 'More information about ARCHIVERIF' })).toBeVisible();
  expect(catalog().queryByRole('link', { name: 'More information about QuickReload' })).not.toBeInTheDocument();

  fireEvent.change(search, { target: { value: '2025' } });
  expect(catalog().getByRole('link', { name: 'More information about Robot Control in Unity' })).toBeVisible();
  expect(catalog().getByRole('link', { name: 'More information about The Great Game of War' })).toBeVisible();
  expect(catalog().queryByRole('link', { name: 'More information about QuickReload' })).not.toBeInTheDocument();
});

test('recovers from an empty combined result by clearing every filter while retaining unrelated query parameters', () => {
  renderProjects('/?type=gamedev&context=University&engine=unity&year=2025&language=python&q=robot&utm_campaign=portfolio');
  expect(catalog().queryByRole('link', { name: 'More information about Robot Control in Unity' })).not.toBeInTheDocument();
  fireEvent.click(screen.getByRole('button', { name: 'Show all projects' }));

  expect(screen.getByRole('searchbox')).toHaveValue('');
  expect(screen.getByRole('button', { name: 'All projects' })).toHaveAttribute('aria-pressed', 'true');
  screen.getAllByRole('combobox').forEach(filter => expect(filter).toHaveValue('all'));
  expect(screen.getByTestId('query-location').textContent).toBe('?utm_campaign=portfolio');
  expect(catalog().getByRole('link', { name: 'More information about Robot Control in Unity' })).toBeVisible();
  expect(catalog().getByRole('link', { name: 'More information about ARCHIVERIF' })).toBeVisible();
});

test('treats invalid shared filter values as all and still allows the visitor to clear them', () => {
  renderProjects('/?type=unknown&context=unknown&engine=unknown&year=9999&language=unknown&utm_campaign=portfolio');
  expect(screen.getByRole('button', { name: 'All projects' })).toHaveAttribute('aria-pressed', 'true');
  screen.getAllByRole('combobox').forEach(filter => expect(filter).toHaveValue('all'));
  expect(catalog().getByRole('link', { name: 'More information about ARCHIVERIF' })).toBeVisible();
  expect(catalog().getByRole('link', { name: 'More information about Robot Control in Unity' })).toBeVisible();
  fireEvent.click(screen.getByRole('button', { name: 'Clear filters' }));
  expect(screen.getByTestId('query-location').textContent).toBe('?utm_campaign=portfolio');
});


test('features three contribution-focused projects above the complete catalog without duplicate IDs', () => {
  const { container } = renderProjects();
  const selected = screen.getByRole('region', { name: 'Selected work' });
  const links = within(selected).getAllByRole('link');
  expect(links.map(link => link.getAttribute('href'))).toEqual([
    '/projects/straw-and-feathers', '/projects/grouillere', '/projects/archiverif',
  ]);
  expect(links[0]).toHaveTextContent(/character controllers/);
  expect(links[1]).toHaveTextContent(/mouse controller/);
  expect(links[2]).toHaveTextContent(/entire product/);
  expect(catalog().getAllByRole('link')).toHaveLength(15);
  expect(selected.compareDocumentPosition(screen.getByRole('region', { name: 'All projects' })) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
  const ids = [...container.querySelectorAll('[id]')].map(element => element.id);
  expect(new Set(ids).size).toBe(ids.length);
});

test('keeps the selected introduction separate from the filtered catalog and translates both', async () => {
  await i18n.changeLanguage('fr');
  renderProjects('/?engine=unreal&year=2026&language=cpp');
  const selected = within(screen.getByRole('region', { name: 'Projets à la une' }));
  expect(selected.getAllByRole('link')).toHaveLength(3);
  expect(selected.getByRole('link', { name: 'En savoir plus sur ARCHIVERIF' })).toHaveTextContent('produit');
  expect(catalog().getAllByRole('link')).toHaveLength(3);
  expect(catalog().queryByRole('link', { name: 'En savoir plus sur ARCHIVERIF' })).not.toBeInTheDocument();
  fireEvent.change(screen.getByRole('searchbox'), { target: { value: 'nonexistentzzzz' } });
  expect(catalog().queryByRole('link')).not.toBeInTheDocument();
  expect(selected.getAllByRole('link')).toHaveLength(3);
});
