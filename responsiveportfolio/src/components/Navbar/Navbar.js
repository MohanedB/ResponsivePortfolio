import React from 'react';
import styled from 'styled-components';
import { Bio } from '../../data/const';
import {Link as LinkR} from "react-router-dom";
import { DiBlackberry } from 'react-icons/di';
import { FaBars } from 'react-icons/fa';
import { useTheme } from 'styled-components';
import { useTranslation } from 'react-i18next';





 
const Nav = styled.div`
background-color: ${({theme}) => theme.card_light};
height: 80px;
display: flex;
align-items: center;
justify-content: center;
font-size: 1rem;
position: sticky;
top: 0;
z-index: 10;
@media (max-width: 960px) {
    trastion: 0.8s all ease;
}
`;

 const NavbarContainer = styled.div`
 //make all the text in one line
  white-space: nowrap;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1200px;
`;

 const NavLogo = styled(LinkR)`
    width: 80%;    
    padding: 0 6px;
    display: flex;
    justify-content: start;
    align-items: center;
    text-decoration: none;
    @media (max-width: 640px) {
      padding: 0 0px;
  }
`;
 const Span = styled.div`
    padding: 0 4px;
    font-weight: bold;
    font-size: 18px;
`;
 const NavItems = styled.ul`
    width: 100%;
    display: flex;
   
    align-items: center;
    justify-content:center;
    gap: 32px;
    padding: 0 6px;
    list-style: none;

    @media screen and (max-width: 768px) {
      display: none;
    }
`;

 const NavLink = styled.a`
    color: ${({ theme }) => theme.text_primary};
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    :hover {
      color: ${({ theme }) => theme.primary};
    }

    &.active {
      border-bottom: 2px solid ${({ theme }) => theme.primary};
    }
`;


 const GitHubButton = styled.a`
  border: 1.8px solid ${({ theme }) => theme.primary};
  justify-content: center;
  display: flex;
  align-items: center;
  height: 70%;
  
  border-radius: 20px;
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  padding: 0 20px;
  font-weight: 500;
  text-decoration: none;
  font-size: 16px;
  transition: all 0.6s ease-in-out;
    :hover {
      background: ${({ theme }) => theme.primary};
      color: ${({ theme }) => theme.white};     
    }
    @media screen and (max-width: 768px) { 
    font-size: 14px;
    }
`;

const LinkedInButton = styled.a`
border: 1.8px solid ${({ theme }) => theme.primary};
justify-content: center;
display: flex;
align-items: center;
margin:10px;
height: 70%;
border-radius: 30px;
color: ${({ theme }) => theme.primary};
cursor: pointer;
padding: 0 20px;
font-weight: 500;
text-decoration: none;
font-size: 16px;
transition: all 0.6s ease-in-out;
  :hover {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.white};     
  }
  @media screen and (max-width: 768px) { 
  font-size: 14px;
  }
`;

 const ButtonContainer = styled.div`
  width: 80%;  
  height: 100%;
  float:right;
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 0 6px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.5rem;
    cursor: pointer;
    color: ${({ theme }) => theme.text_primary};
  }
`

export const MobileMenu = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 16px;
    position: absolute;
    top: 80px;
    right: 0;
    width: 100%;
    padding: 12px 40px 24px 40px;
    background: ${({ theme }) => theme.card_light+99};
    transition: all 0.6s ease-in-out;
    transform: ${({ isOpen }) => (isOpen ? 'translateY(0)' : 'translateY(-100%)')};
    border-radius: 0 0 20px 20px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    z-index: ${({ isOpen }) => (isOpen ? '1000' : '-1000')};

`

export const MobileMenuItems = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
  list-style: none;
  width: 100%;
  height: 100%;
`

export const MobileMenuLink = styled(LinkR)`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  :hover {
    color: ${({ theme }) => theme.primary};
  }

  &.active {
    border-bottom: 2px solid ${({ theme }) => theme.primary};
  }
`;

export const MobileMenuButton = styled.a`
  border: 1.8px solid ${({ theme }) => theme.primary};
  justify-content: center;
  display: flex;
  align-items: center;
  height: 70%;
  border-radius: 20px;
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  padding: 0 20px;
  font-weight: 500;
  text-decoration: none;
  font-size: 16px;
  transition: all 0.6s ease-in-out;

  :hover {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.white};
  }
`;

export  const MobileLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  :hover {
    color: ${({ theme }) => theme.primary};
  }

  &.active {
    border-bottom: 2px solid ${({ theme }) => theme.primary};
  }
`;

export const MobileNavLogo = styled(LinkR)`
  width: 80%;
  padding: 0 6px;
  display: flex;
  justify-content: start;
  align-items: center;
  text-decoration: none;
  @media (max-width: 640px) {
    padding: 0 0px;
  }
`;

function MyComponent() {
  const { t } = useTranslation();

  return <p>{t('myTranslationKey')}</p>;
}

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
} 

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { i18n } = useTranslation();
  const { t } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  const handleLanguageClick = (language) => {
    changeLanguage(language);
    setIsOpen(false);
  };

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to='/'>
          <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: '20;', cursor: 'pointer' }}>
            <DiBlackberry size="3rem" /> <Span>Portfolio</Span>
          </a>
        </NavLogo>
        <MobileIcon>
          <FaBars onClick={() => {
            setIsOpen(!isOpen)
          }} />
        </MobileIcon>
        <NavItems>
          <NavLink href="#about">{t('About')}</NavLink>
          <NavLink href='#skills'>{t('Skill')}</NavLink>
          <NavLink href='#education'>{t('Education')}</NavLink>
          <NavLink href='#projects'>{t('Projects')}</NavLink>
          <NavLink href='#contact'>{t('Contact')}</NavLink>
        </NavItems>
        <ButtonContainer>
          <GitHubButton href={Bio.github} target="_blank">{t('Github')}</GitHubButton>
          {i18n.language === 'en' ? (
            <LinkedInButton onClick={() => handleLanguageClick('fr')}>{t('Language_fr')}</LinkedInButton>
          ) : (
            <LinkedInButton onClick={() => handleLanguageClick('en')}>{t('Language_en')}</LinkedInButton>
          )}
        </ButtonContainer>
        {isOpen && (
          <MobileMenu isOpen={isOpen}>
            <MobileLink href="#about" onClick={() => setIsOpen(false)}>{t('About')}</MobileLink>
            <MobileLink href='#skills' onClick={() => setIsOpen(false)}>{t('Skill')}</MobileLink>
            <MobileLink href='#education' onClick={() => setIsOpen(false)}>{t('Education')}</MobileLink>
            <MobileLink href='#projects' onClick={() => setIsOpen(false)}>{t('Projects')}</MobileLink>
            <MobileLink href='#contact' onClick={() => setIsOpen(false)}>{t('Contact')}</MobileLink>
            <GitHubButton style={{padding: '10px 16px', background: `${({ theme }) => theme.primary}`, color: 'white',width: 'max-content'}} href={Bio.github} target="_blank">{t('Github')}</GitHubButton>
            {i18n.language === 'en' ? (
            <LinkedInButton onClick={() => handleLanguageClick('fr')}>{t('Language_fr')}</LinkedInButton>
          ) : (
            <LinkedInButton onClick={() => handleLanguageClick('en')}>{t('Language_en')}</LinkedInButton>
          )}
          </MobileMenu>
        )}
      </NavbarContainer>
    </Nav>
  )
}

export default Navbar