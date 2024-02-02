import React from 'react'
import styled from 'styled-components'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Snackbar } from '@mui/material';
import { useTranslation } from 'react-i18next';

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
`

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
@media (max-width: 960px) {
    flex-direction: column;
}
`

const Title = styled.div`
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
`

const ContactTitle = styled.div`
  font-size: 24px;
  margin-bottom: 6px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`

const ContactInput = styled.input`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`

const ContactInputMessage = styled.textarea`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`

const ContactButton = styled.input`
  width: 100%;
  text-decoration: none;
  text-align: center;
  background: hsla(271, 100%, 50%, 1);
  background: linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
  background: -moz-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
  background: -webkit-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
  padding: 13px 16px;
  margin-top: 2px;
  border-radius: 12px;
  border: none;
  color: ${({ theme }) => theme.text_primary};
  font-size: 18px;
  font-weight: 600;
`




const Contact = () => {
  //hooks
  const [open, setOpen] = React.useState(false);
  const form = useRef();
  const { i18n } = useTranslation();
  const { t } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  const sendemail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_x5oinbn', 'template_6y1ugbd', form.current, '6YknmoR5NVPH3K1pT')
      .then((result) => {
        setOpen(true);
        form.current.reset();
      }, (error) => {
        console.log(error.text);
      });
  }

  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [errors, setErrors] = React.useState({ email: '', name: '', subject: '', message: '' });

  const validateForm = () => {
    let isValid = true;
    let newErrors = { email: '', name: '', subject: '', message: '' };

    if (form.current.email.value.trim() === '') {
      isValid = false;
      newErrors.email = t('emaileror');
    }

    if (form.current.name.value.trim() === '') {
      isValid = false;
      newErrors.name = t('nameeror');
    }

    if (form.current.subject.value.trim() === '') {
      isValid = false;
      newErrors.subject = t('subjecteror');
    }

    if (form.current.message.value.trim() === '') {
      isValid = false;
      newErrors.message = t('messageeror');
    }

    setErrors(newErrors);
    return isValid;
  }

  const handleButtonClick = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
  
    setButtonDisabled(true);
    setTimeout(() => {
      setButtonDisabled(false);
    }, 10000);
    sendemail(e);
  };

  return (
    <Container id="contact">
      <Wrapper>
        <Title>{t('Contact')}</Title>
        <Desc>{t('ContactDesc')}</Desc>
        <ContactForm ref={form} onSubmit={handleButtonClick}>
          <ContactInput placeholder={t('Email')} name="email" error={errors.email} />
          {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
          <ContactInput placeholder={t('Name')} name="name" error={errors.name} />
          {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
          <ContactInput placeholder={t('Subject')} name="subject" error={errors.subject} />
          {errors.subject && <p style={{ color: 'red' }}>{errors.subject}</p>}
          <ContactInputMessage placeholder={t('Message')} rows="4" name="message" error={errors.message} />
          {errors.message && <p style={{ color: 'red' }}>{errors.message}</p>}
          <ContactButton type="submit" value={t('Send')} disabled={buttonDisabled} />
        </ContactForm>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={()=>setOpen(false)}
          message={t('Success')}
          severity="success"
        />
      </Wrapper>
    </Container>
  )
}

export default Contact