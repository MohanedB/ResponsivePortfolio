import React from 'react';
import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ThemeProvider } from 'styled-components';
import { I18nextProvider } from 'react-i18next';
import emailjs from '@emailjs/browser';
import i18n from '../Internationalization/I18n';
import { darkTheme } from '../../utils/Theme';
import Contact from './Contact';

// Delivery is external: exercise the real form without sending an email.
jest.mock('@emailjs/browser', () => ({ sendForm: jest.fn() }));
jest.mock('../../hooks/useScrollReveal', () => () => [null, true]);

beforeEach(async () => {
  jest.clearAllMocks();
  await i18n.changeLanguage('en');
});

const renderContact = () => render(
  <I18nextProvider i18n={i18n}>
    <ThemeProvider theme={darkTheme}><Contact /></ThemeProvider>
  </I18nextProvider>
);

const fillMessage = (email = 'visitor+portfolio@example.technology') => {
  fireEvent.change(screen.getByPlaceholderText('Your Email'), { target: { value: email } });
  fireEvent.change(screen.getByPlaceholderText('Your Name'), { target: { value: 'A visitor' } });
  fireEvent.change(screen.getByPlaceholderText('Subject'), { target: { value: 'Project collaboration' } });
  fireEvent.change(screen.getByPlaceholderText('Message'), { target: { value: 'I would like to discuss your work.' } });
};

test('gives each contact field a persistent accessible label', () => {
  renderContact();
  expect(screen.getByRole('textbox', { name: 'Your Email' })).toHaveAttribute('type', 'email');
  expect(screen.getByRole('textbox', { name: 'Your Name' })).toHaveAttribute('autocomplete', 'name');
  expect(screen.getByRole('textbox', { name: 'Subject' })).toBeInTheDocument();
  expect(screen.getByRole('textbox', { name: 'Message' })).toBeInTheDocument();
});

test('accepts a plus address with a long top-level domain and clears only after success', async () => {
  emailjs.sendForm.mockResolvedValue({ status: 200, text: 'OK' });
  renderContact();
  fillMessage();
  fireEvent.submit(screen.getByPlaceholderText('Your Email').closest('form'));
  expect(await screen.findByText('Email sent successfully!')).toBeVisible();
  expect(screen.getByPlaceholderText('Message')).toHaveValue('');
});

test('invalid email stays in the form and receives an associated error', async () => {
  renderContact();
  fillMessage('not-an-email');
  fireEvent.submit(screen.getByPlaceholderText('Your Email').closest('form'));
  expect(await screen.findByText('Please enter a valid Email')).toBeVisible();
  expect(screen.getByPlaceholderText('Your Email')).toHaveAttribute('aria-invalid', 'true');
  expect(screen.getByPlaceholderText('Message')).toHaveValue('I would like to discuss your work.');
  expect(emailjs.sendForm).not.toHaveBeenCalled();
});

test('keeps a failed message available for retry and prevents duplicate submissions while sending', async () => {
  let rejectDelivery;
  emailjs.sendForm.mockImplementation(() => new Promise((resolve, reject) => { rejectDelivery = reject; }));
  renderContact();
  fillMessage('visitor@example.com');
  const form = screen.getByPlaceholderText('Your Email').closest('form');
  fireEvent.submit(form);
  fireEvent.submit(form);
  expect(screen.getByRole('button', { name: /sending/i })).toBeDisabled();
  expect(emailjs.sendForm).toHaveBeenCalledTimes(1);
  await act(async () => { rejectDelivery({ status: 500, text: 'Delivery unavailable' }); });
  expect(await screen.findByText("Couldn't send your message. Please try again later.")).toBeVisible();
  expect(screen.getByPlaceholderText('Message')).toHaveValue('I would like to discuss your work.');
  await waitFor(() => expect(screen.getByRole('button', { name: 'Send' })).toBeEnabled());
  expect(screen.queryByText('Email sent successfully!')).not.toBeInTheDocument();
});
