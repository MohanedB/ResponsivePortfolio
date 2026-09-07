import React from 'react';
import { act, fireEvent, render, screen, within } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ThemeProvider } from 'styled-components';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import i18n from '../Internationalization/I18n';
import { darkTheme } from '../../utils/Theme';
import Projects from './Project';
import ProjectDetails from './ProjectDetails';

const renderPage = (entry) => render(
  <I18nextProvider i18n={i18n}><ThemeProvider theme={darkTheme}>
    <MemoryRouter initialEntries={[entry]}><Routes>
      <Route path="/" element={<Projects />} />
      <Route path="/projects/:slug" element={<ProjectDetails />} />
    </Routes></MemoryRouter>
  </ThemeProvider></I18nextProvider>
);

beforeEach(async () => { localStorage.clear(); await i18n.changeLanguage('en'); });

test('opens a direct TPS URL with explained real code and no unavailable download', () => {
  renderPage('/projects/letumloop-tps');
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('LetumLoop');
  expect(document.title).toBe('LetumLoop — TPS Prototype | Mohaned Bouzaidi');
  expect(screen.getByRole('heading', { name: 'What I built' })).toBeVisible();
  expect(screen.getByText(/pitch did not advance after the first selection round/)).toBeVisible();
  expect(screen.queryByRole('link', { name: /Play \/ download/ })).not.toBeInTheDocument();
  expect(screen.queryByRole('link', { name: 'GitHub' })).not.toBeInTheDocument();
  const summary = screen.getAllByText('View code excerpt')[0];
  const details = summary.closest('details');
  fireEvent.click(summary);
  expect(details).toHaveAttribute('open');
  expect(within(details).getByRole('region')).toHaveTextContent('CanJump_Implementation');
});

test('preserves the search and all combined filters when returning after a language switch', async () => {
  renderPage('/?type=gamedev&context=University&engine=unity&year=2025&language=csharp&q=robot');
  fireEvent.click(screen.getByRole('link', { name: 'More information about Robot Control in Unity' }));
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Robot Control in Unity');
  await act(async () => { await i18n.changeLanguage('fr'); });
  const back = screen.getAllByRole('link', { name: 'Retour aux projets' })[0];
  expect(back).toHaveAttribute('href', '/?type=gamedev&context=University&engine=unity&year=2025&language=csharp&q=robot#projects');
  fireEvent.click(back);
  expect(screen.getByRole('searchbox')).toHaveValue('robot');
  expect(screen.getByRole('combobox', { name: 'Contexte du projet' })).toHaveValue('University');
  expect(screen.getByRole('combobox', { name: 'Moteur de jeu' })).toHaveValue('unity');
  expect(screen.getByRole('combobox', { name: 'Année' })).toHaveValue('2025');
  expect(screen.getByRole('combobox', { name: 'Langage de programmation' })).toHaveValue('csharp');
  expect(screen.getByRole('button', { name: 'Jeux' })).toHaveAttribute('aria-pressed', 'true');
  expect(screen.getByRole('link', { name: /En savoir plus sur Contrôle d'un Robot en Unity/ })).toBeVisible();
  expect(screen.queryByRole('link', { name: 'En savoir plus sur ARCHIVERIF' })).not.toBeInTheDocument();
});

test('localizes the case study and public product destination', async () => {
  await i18n.changeLanguage('fr');
  renderPage('/projects/archiverif');
  expect(screen.getByRole('heading', { name: 'Ma contribution' })).toBeVisible();
  expect(screen.getByRole('heading', { name: 'Dans le code' })).toBeVisible();
  expect(screen.getByText('Développeur unique · Produit, interface et backend')).toBeVisible();
  expect(screen.getByRole('link', { name: 'Visiter le site' })).toHaveAttribute('href', 'https://archiverif.ca/fr');
  expect(screen.getAllByRole('button', { name: /Agrandir l’image/ })).toHaveLength(2);
});

test('handles an unknown project address with a useful return link', () => {
  renderPage('/projects/no-such-project');
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Project not found');
  expect(screen.getByRole('link', { name: 'Back to projects' })).toHaveAttribute('href', '/#projects');
});
