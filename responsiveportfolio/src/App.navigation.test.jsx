import React from 'react';
import { act, fireEvent, render, screen, within } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';
import i18n from './components/Internationalization/I18n';

jest.mock('./components/Navbar/Navbar', () => () => null);
jest.mock('./components/Hero/Hero', () => () => null);
jest.mock('./components/Skills/Skills', () => () => null);
jest.mock('./components/Education/Education', () => () => null);
jest.mock('./components/Experience/experience', () => () => null);
jest.mock('./components/Contact/Contact', () => () => null);
jest.mock('./components/footer/footer', () => () => null);

let previousScrollIntoView;
beforeEach(async () => {
  jest.useFakeTimers();
  localStorage.clear();
  await i18n.changeLanguage('en');
  window.history.replaceState({}, '', '/#projects');
  jest.spyOn(window, 'scrollTo').mockImplementation(() => {});
  previousScrollIntoView = Element.prototype.scrollIntoView;
  Element.prototype.scrollIntoView = jest.fn();
});

afterEach(() => {
  Element.prototype.scrollIntoView = previousScrollIntoView;
  jest.restoreAllMocks();
  jest.useRealTimers();
});

test('keeps search in place below selected work while retaining project-page anchor navigation', () => {
  render(<App />);
  act(() => { jest.runOnlyPendingTimers(); });
  expect(Element.prototype.scrollIntoView).toHaveBeenCalledTimes(1);
  Element.prototype.scrollIntoView.mockClear();
  window.scrollTo.mockClear();

  const search = screen.getByRole('searchbox');
  search.focus();
  fireEvent.change(search, { target: { value: 'grouillere' } });
  act(() => { jest.runOnlyPendingTimers(); });
  expect(new URLSearchParams(window.location.search).get('q')).toBe('grouillere');
  expect(search).toHaveFocus();
  expect(Element.prototype.scrollIntoView).not.toHaveBeenCalled();
  expect(window.scrollTo).not.toHaveBeenCalled();

  const catalog = within(screen.getByRole('region', { name: 'All projects' }));
  fireEvent.click(catalog.getByRole('link', { name: 'More information about Grouillère' }));
  act(() => { jest.runOnlyPendingTimers(); });
  expect(screen.getByRole('heading', { level: 1, name: 'Grouillère' })).toHaveFocus();
  fireEvent.click(screen.getAllByRole('link', { name: 'Back to projects' })[0]);
  act(() => { jest.runOnlyPendingTimers(); });
  expect(screen.getByRole('searchbox')).toHaveValue('grouillere');
  expect(screen.getByRole('heading', { level: 2, name: 'Projects' })).toHaveFocus();
  expect(Element.prototype.scrollIntoView).toHaveBeenCalledTimes(1);
});
