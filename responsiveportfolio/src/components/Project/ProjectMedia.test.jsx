import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ThemeProvider } from 'styled-components';
import { darkTheme } from '../../utils/Theme';
import ProjectGallery from './ProjectGallery';
import CodeHighlights from './CodeHighlights';

const view = node => render(<ThemeProvider theme={darkTheme}>{node}</ThemeProvider>);
const image = { kind: 'image', src: '/character.png', alt: { en: 'Character in motion', fr: 'Personnage en mouvement' }, caption: { en: 'Movement prototype', fr: 'Prototype de mouvement' } };

test('an image opens a named dialog and closes back to its trigger', () => {
  view(<ProjectGallery items={[image]} />);
  const trigger = screen.getByRole('button', { name: /Enlarge image/ });
  trigger.focus();
  fireEvent.click(trigger);
  expect(screen.getByRole('dialog', { name: 'Character in motion' })).toBeInTheDocument();
  fireEvent.click(screen.getByRole('button', { name: 'Close image' }));
  expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  expect(trigger).toHaveFocus();
});

test('a broken preview is replaced by readable context and loses its unusable enlarge button', () => {
  view(<ProjectGallery items={[image]} language="fr" />);
  fireEvent.error(screen.getByAltText('Personnage en mouvement'));
  expect(screen.getByText(/Image indisponible/)).toBeVisible();
  expect(screen.getByText('Prototype de mouvement')).toBeVisible();
  expect(screen.queryByRole('button', { name: /Agrandir/ })).not.toBeInTheDocument();
});

test('an embedded player only loads after a visitor asks to play it', () => {
  const { container } = view(<ProjectGallery items={[{ ...image, kind: 'embed', src: 'https://www.youtube-nocookie.com/embed/example' }]} />);
  expect(container.querySelector('iframe')).not.toBeInTheDocument();
  fireEvent.click(screen.getByRole('button', { name: /Play video/ }));
  expect(screen.getByTitle('Character in motion')).toHaveAttribute('src', 'https://www.youtube-nocookie.com/embed/example');
});

test('code provenance stays attached to an explained expandable excerpt', () => {
  view(<CodeHighlights language="fr" items={[{ title: { en: 'Switch character', fr: 'Changer de personnage' }, description: { en: 'Keeps input ownership explicit.', fr: 'Le personnage actif reçoit les entrées.' }, language: 'cpp', code: 'Controller->Possess(Crow);', source: { file: 'Source/Character.cpp', revision: 'abc123456789', url: 'https://github.com/example/project/blob/abc123456789/Source/Character.cpp' } }]} />);
  expect(screen.getByText('Le personnage actif reçoit les entrées.')).toBeVisible();
  const source = screen.getByRole('link', { name: /Source\/Character.cpp/ });
  expect(source).toHaveAttribute('href', 'https://github.com/example/project/blob/abc123456789/Source/Character.cpp');
  expect(screen.getByText(/abc1234/)).toBeInTheDocument();
  const code = screen.getByText('Controller->Possess(Crow);');
  const details = code.closest('details');
  expect(details).not.toHaveAttribute('open');
  expect(details.querySelector('summary')).toHaveTextContent('Voir le code');
});
