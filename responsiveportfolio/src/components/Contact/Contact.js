import React from 'react';
import styled from 'styled-components';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Snackbar, Alert } from '@mui/material';
import { useTranslation } from 'react-i18next';
import useScrollReveal from '../../hooks/useScrollReveal';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  @media (max-width: 960px) {
    padding: 0px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 0px 0px 80px 0px;
  gap: 12px;
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.8s ease, transform 0.8s ease;
  &.visible { opacity: 1; transform: translateY(0); }
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.h2`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 16px;
  }
`;

const ContactForm = styled.form`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.card};
  padding: 32px;
  border-radius: 16px;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  margin-top: 28px;
  gap: 12px;
`;

const Label = styled.label`
  color: ${({ theme }) => theme.text_primary};
  font-size: 14px;
  font-weight: 500;
`;

const FieldError = styled.p`
  color: #ffadad;
  font-size: 14px;
`;

const ContactInput = styled.input`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;

const ContactInputMessage = styled.textarea`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  min-height: 140px;
  resize: vertical;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;

// Update the button to change background based on its disabled state.
const ContactButton = styled.input`
  width: 100%;
  text-decoration: none;
  text-align: center;
  background: ${({ disabled }) =>
    disabled
      ? 'gray'
      : 'linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%)'};
  padding: 13px 16px;
  margin-top: 2px;
  border-radius: 12px;
  border: none;
  color: ${({ theme }) => theme.text_primary};
  font-size: 18px;
  font-weight: 600;
  transition: background 0.3s ease;
  &:disabled {
    cursor: not-allowed;
  }
`;

const Contact = () => {
  const [open, setOpen] = React.useState(false);
  const [openError, setOpenError] = React.useState(false);
  const form = useRef();
  const sending = useRef(false);
  const { t } = useTranslation();
  const [wrapperRef, wrapperVisible] = useScrollReveal();

  const sendemail = () => {
    return emailjs.sendForm(
      'service_x5oinbn',
      'template_6y1ugbd',
      form.current,
      '6YknmoR5NVPH3K1pT'
    );
  };

  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [errors, setErrors] = React.useState({
    email: '',
    name: '',
    subject: '',
    message: '',
  });

  const validateForm = () => {
    const fields = form.current.elements;
    const newErrors = { email: '', name: '', subject: '', message: '' };
    const requiredMessages = {
      email: 'emaileror', name: 'nameeror', subject: 'subjecteror', message: 'messageeror',
    };
    Object.keys(newErrors).forEach((name) => {
      const field = fields.namedItem(name);
      if (!field.value.trim()) newErrors[name] = requiredMessages[name];
    });
    const email = fields.namedItem('email');
    if (!newErrors.email && !email.validity.valid) newErrors.email = 'invalidemailerror';
    setErrors(newErrors);
    const firstInvalid = Object.keys(newErrors).find((name) => newErrors[name]);
    if (firstInvalid) fields.namedItem(firstInvalid).focus();
    return !firstInvalid;
  };

  const handleButtonClick = async (e) => {
    e.preventDefault();
    if (sending.current || !validateForm()) return;
    sending.current = true;
    setButtonDisabled(true);
    setOpen(false);
    setOpenError(false);
    try {
      await sendemail();
      setOpen(true);
      form.current.reset();
    } catch {
      setOpenError(true);
    } finally {
      sending.current = false;
      setButtonDisabled(false);
    }
  };

  return (
    <Container id="contact">
      <Wrapper ref={wrapperRef} className={wrapperVisible ? 'visible' : ''}>
        <Title>{t('Contact')}</Title>
        <Desc>{t('ContactDesc')}</Desc>
        <ContactForm ref={form} onSubmit={handleButtonClick} noValidate aria-busy={buttonDisabled}>
          <Label htmlFor="contact-email">{t('Email')}</Label>
          <ContactInput
            id="contact-email"
            type="email"
            autoComplete="email"
            required
            readOnly={buttonDisabled}
            placeholder={t('Email')}
            name="email"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'contact-email-error' : undefined}
          />
          {errors.email && <FieldError id="contact-email-error" role="alert">{t(errors.email)}</FieldError>}
          <Label htmlFor="contact-name">{t('Name')}</Label>
          <ContactInput
            id="contact-name"
            autoComplete="name"
            required
            readOnly={buttonDisabled}
            placeholder={t('Name')}
            name="name"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? 'contact-name-error' : undefined}
          />
          {errors.name && <FieldError id="contact-name-error" role="alert">{t(errors.name)}</FieldError>}
          <Label htmlFor="contact-subject">{t('Subject')}</Label>
          <ContactInput
            id="contact-subject"
            required
            readOnly={buttonDisabled}
            placeholder={t('Subject')}
            name="subject"
            aria-invalid={Boolean(errors.subject)}
            aria-describedby={errors.subject ? 'contact-subject-error' : undefined}
          />
          {errors.subject && <FieldError id="contact-subject-error" role="alert">{t(errors.subject)}</FieldError>}
          <Label htmlFor="contact-message">{t('Message')}</Label>
          <ContactInputMessage
            id="contact-message"
            required
            readOnly={buttonDisabled}
            placeholder={t('Message')}
            rows="4"
            name="message"
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? 'contact-message-error' : undefined}
          />
          {errors.message && <FieldError id="contact-message-error" role="alert">{t(errors.message)}</FieldError>}
          <ContactButton
            type="submit"
            value={buttonDisabled ? t('Sending') : t('Send')}
            disabled={buttonDisabled}
          />
        </ContactForm>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={() => setOpen(false)}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
          <Alert onClose={() => setOpen(false)} severity="success" variant="filled" sx={{ width: '100%' }}>
            {t('Success')}
          </Alert>
        </Snackbar>

        <Snackbar
          open={openError}
          autoHideDuration={6000}
          onClose={() => setOpenError(false)}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
          <Alert onClose={() => setOpenError(false)} severity="error" variant="filled" sx={{ width: '100%' }}>
            {t('emailSendError')}
          </Alert>
        </Snackbar>
      </Wrapper>
    </Container>
  );
};

export default Contact;
