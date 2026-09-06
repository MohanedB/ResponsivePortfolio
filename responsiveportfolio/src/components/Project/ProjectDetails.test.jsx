import React from 'react';
import { fireEvent, render, screen, within } from '@testing-library/react';
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

test('returns to the same project search and combined filters', () => {
  renderPage('/?type=gamedev&context=University&q=grouillere');
  fireEvent.click(screen.getByRole('link', { name: 'More information about Grouillère' }));
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Grouillère');
  const back = screen.getAllByRole('link', { name: 'Back to projects' })[0];
  expect(back).toHaveAttribute('href', '/?type=gamedev&context=University&q=grouillere#projects');
  fireEvent.click(back);
  expect(screen.getByRole('searchbox')).toHaveValue('grouillere');
  expect(screen.getByRole('combobox')).toHaveValue('University');
  expect(screen.getByRole('button', { name: 'Games' })).toHaveAttribute('aria-pressed', 'true');
  expect(screen.queryByRole('link', { name: 'More information about ARCHIVERIF' })).not.toBeInTheDocument();
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
