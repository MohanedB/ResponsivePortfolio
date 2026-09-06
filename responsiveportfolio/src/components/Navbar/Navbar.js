import React from 'react';
import styled from 'styled-components';
import { Bio } from '../../data/const';
import { DiBlackberry } from 'react-icons/di';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const Nav = styled.nav`
  background-color: ${({ theme }) => theme.card_light};
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;
  z-index: 10;
`;

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  width: 100%;
  padding: 0 24px;
  max-width: 1240px;
  @media (max-width: 480px) { padding: 0 16px; }
`;

const NavLogo = styled.a`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  gap: 4px;
  color: ${({ theme }) => theme.text_primary};
  text-decoration: none;
  font-size: 18px;
  font-weight: 700;
`;

const NavItems = styled.ul`
  display: flex;
  align-items: center;
  gap: 20px;
  list-style: none;
  white-space: nowrap;
  @media (max-width: 1100px) { display: none; }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  text-decoration: none;
  transition: color 0.2s ease;
  &:hover { color: ${({ theme }) => theme.primary}; }
`;

const GitHubButton = styled.a`
  border: 1.8px solid ${({ theme }) => theme.primary};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  border-radius: 22px;
  color: ${({ theme }) => theme.text_primary};
  padding: 8px 16px;
  font-weight: 500;
  text-decoration: none;
  transition: background 0.2s ease;
  &:hover { background: ${({ theme }) => theme.primary}; }
`;

const NavButton = styled.button`
  border: 1.8px solid ${({ theme }) => theme.primary};
  min-height: 44px;
  border-radius: 22px;
  color: ${({ theme }) => theme.text_primary};
  cursor: pointer;
  padding: 8px 16px;
  font-weight: 500;
  background: transparent;
  font-size: 16px;
  transition: background 0.2s ease;
  &:hover { background: ${({ theme }) => theme.primary}; }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  gap: 10px;
  @media (max-width: 1100px) { display: none; }
`;

const MobileIcon = styled.button`
  display: none;
  @media (max-width: 1100px) {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    border: 1px solid ${({ theme }) => theme.primary};
    border-radius: 10px;
    background: transparent;
    font-size: 22px;
    cursor: pointer;
    color: ${({ theme }) => theme.text_primary};
  }
`;

const MobileMenu = styled.div`
  position: absolute;
  top: 80px;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 16px 24px 24px;
  max-height: calc(100dvh - 80px);
  overflow-y: auto;
  background: ${({ theme }) => theme.card_light};
  border-bottom: 1px solid ${({ theme }) => theme.primary};
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3);
  &[hidden] { display: none; }
  @media (min-width: 1101px) { display: none; }
  ul { list-style: none; }
  li a { display: block; padding: 10px 0; }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const menuButton = React.useRef(null);
  const { i18n, t } = useTranslation();
  const isFrench = (i18n.resolvedLanguage || i18n.language || 'en').startsWith('fr');
  const languageLabel = isFrench ? 'English' : 'Français';
  const links = [
    ['about', 'About'], ['projects', 'Projects'], ['skills', 'Skill'],
    ['education', 'Education'], ['experience', 'exper5'], ['contact', 'Contact'],
  ];

  React.useEffect(() => {
    if (!isOpen) return undefined;
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
        menuButton.current?.focus();
      }
    };
    const closeOnDesktop = () => {
      if (window.innerWidth > 1100) setIsOpen(false);
    };
    document.addEventListener('keydown', closeOnEscape);
    window.addEventListener('resize', closeOnDesktop);
    return () => {
      document.removeEventListener('keydown', closeOnEscape);
      window.removeEventListener('resize', closeOnDesktop);
    };
  }, [isOpen]);

  const changeLanguage = () => {
    i18n.changeLanguage(isFrench ? 'en' : 'fr');
    if (isOpen) menuButton.current?.focus();
    setIsOpen(false);
  };

  const renderLinks = () => links.map(([id, label]) => (
    <li key={id}>
      <NavLink href={`#${id}`} onClick={() => setIsOpen(false)}>{t(label)}</NavLink>
    </li>
  ));

  return (
    <Nav aria-label={t('MainNavigation', { defaultValue: isFrench ? 'Navigation principale' : 'Main navigation' })}>
      <NavbarContainer>
        <NavLogo href="#about" onClick={() => setIsOpen(false)}>
          <DiBlackberry size="36" aria-hidden="true" />
          <span>Mohaned.</span>
        </NavLogo>
        <NavItems>{renderLinks()}</NavItems>
        <ButtonContainer>
          <GitHubButton href={Bio.github} target="_blank" rel="noopener noreferrer">{t('Github')}</GitHubButton>
          <NavButton type="button" onClick={changeLanguage} lang={isFrench ? 'en' : 'fr'}>{languageLabel}</NavButton>
        </ButtonContainer>
        <MobileIcon
          ref={menuButton}
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          aria-label={t(isOpen ? 'CloseMenu' : 'OpenMenu', {
            defaultValue: isFrench ? (isOpen ? 'Fermer le menu' : 'Ouvrir le menu') : (isOpen ? 'Close menu' : 'Open menu'),
          })}
        >
          {isOpen ? <FaTimes aria-hidden="true" /> : <FaBars aria-hidden="true" />}
        </MobileIcon>
        <MobileMenu id="mobile-navigation" hidden={!isOpen}>
          <ul>{renderLinks()}</ul>
          <GitHubButton href={Bio.github} target="_blank" rel="noopener noreferrer">{t('Github')}</GitHubButton>
          <NavButton type="button" onClick={changeLanguage} lang={isFrench ? 'en' : 'fr'}>{languageLabel}</NavButton>
        </MobileMenu>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
