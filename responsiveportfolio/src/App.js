import './App.css';
import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { darkTheme } from './utils/Theme';
import NavBar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Skills from './components/Skills/Skills';
import Education from './components/Education/Education';
import Contact from './components/Contact/Contact';
import Footer from './components/footer/footer';
import Projects from './components/Project/Project';
import Experience from './components/Experience/experience';
import { I18nextProvider, useTranslation } from 'react-i18next';
import i18n from './components/Internationalization/I18n';
import { BrowserRouter, Routes, Route, useLocation, useNavigationType } from 'react-router-dom';
import ProjectDetails from './components/Project/ProjectDetails';

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  height: 100%;
  overflow-x: hidden;
`;

const Wrapper = styled.div`
  background: linear-gradient(
      38.73deg,
      rgba(204, 0, 187, 0.15) 0%,
      rgba(201, 32, 184, 0) 50%
    ),
    linear-gradient(
      141.27deg,
      rgba(0, 70, 209, 0) 50%,
      rgba(0, 70, 209, 0.15) 100%
    );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
  padding-bottom: 20px;
`;

const ScrollBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 3px;
  background: linear-gradient(90deg, hsla(271, 100%, 50%, 1), hsla(294, 100%, 50%, 1));
  z-index: 9999;
  transition: width 0.1s linear;
  pointer-events: none;
`;

const BackToTopBtn = styled.button`
  position: fixed;
  bottom: 36px;
  right: 36px;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: linear-gradient(225deg, hsla(271, 100%, 50%, 1), hsla(294, 100%, 50%, 1));
  border: none;
  color: white;
  font-size: 22px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  box-shadow: 0 4px 20px rgba(133, 76, 230, 0.5);
  transition: opacity 0.35s ease, transform 0.35s ease, box-shadow 0.35s ease;
  opacity: ${({ $show }) => ($show ? 1 : 0)};
  pointer-events: ${({ $show }) => ($show ? 'auto' : 'none')};
  transform: ${({ $show }) => ($show ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.8)')};
  &:hover {
    transform: translateY(-5px) scale(1.1);
    box-shadow: 0 8px 32px rgba(133, 76, 230, 0.75);
  }
`;

function PortfolioApp() {
  const location = useLocation();
  const navigationType = useNavigationType();
  const previousPath = React.useRef(null);
  const scrollPositions = React.useRef(new Map());
  const lastScrollY = React.useRef(window.scrollY);
  const { t, i18n } = useTranslation();
  const isFrench = (i18n.resolvedLanguage || i18n.language || 'en').startsWith('fr');
  const [scrollProgress, setScrollProgress] = React.useState(0);
  const [showBack, setShowBack] = React.useState(false);

  React.useEffect(() => {
    const previous = window.history.scrollRestoration;
    window.history.scrollRestoration = 'manual';
    return () => { window.history.scrollRestoration = previous; };
  }, []);

  React.useEffect(() => {
    const changedPage = previousPath.current !== location.pathname;
    const hadPreviousPage = previousPath.current !== null;
    const positions = scrollPositions.current;
    const scrollKey = `${location.key}:${location.pathname}${location.search}${location.hash}`;
    const restorePosition = navigationType === 'POP' && positions.has(scrollKey);
    const frame = (changedPage || location.hash || restorePosition) && requestAnimationFrame(() => {
      const target = location.hash ? document.getElementById(location.hash.slice(1)) : null;
      if (restorePosition) window.scrollTo({ top: positions.get(scrollKey), behavior: 'instant' });
      else if (target) target.scrollIntoView();
      else if (changedPage) window.scrollTo({ top: 0, behavior: 'instant' });
      if (changedPage && location.pathname !== '/') document.querySelector('main h1')?.focus({ preventScroll: true });
      else if (changedPage && (location.hash === '#projects' || (hadPreviousPage && navigationType === 'POP'))) document.getElementById('projects-title')?.focus({ preventScroll: true });
      previousPath.current = location.pathname;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
      setShowBack(window.scrollY > 500);
    });
    return () => {
      if (frame) cancelAnimationFrame(frame);
      if (previousPath.current === location.pathname) positions.set(scrollKey, lastScrollY.current);
    };
  }, [location.pathname, location.search, location.hash, location.key, navigationType]);

  React.useEffect(() => {
    const onScroll = () => {
      lastScrollY.current = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
      setShowBack(window.scrollY > 500);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  React.useEffect(() => {
    document.documentElement.lang = isFrench ? 'fr' : 'en';
  }, [isFrench]);

  const backToTop = () => {
    const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
    document.getElementById('main-content')?.focus({ preventScroll: true });
  };

  return (
    <>
      <a className="skip-link" href="#main-content">
        {t('SkipToContent', { defaultValue: isFrench ? 'Aller au contenu' : 'Skip to content' })}
      </a>
      <ScrollBar aria-hidden="true" style={{ width: `${scrollProgress}%` }} />
      <NavBar />
      <Body>
        <main id="main-content" tabIndex={-1}>
          <Routes>
            <Route path="/" element={<>
              <Hero />
              <Projects />
              <Wrapper><Skills /></Wrapper>
              <Education />
              <Experience />
              <Contact />
            </>} />
            <Route path="/projects/:slug" element={<ProjectDetails />} />
            <Route path="*" element={<ProjectDetails />} />
          </Routes>
        </main>
        <Footer />
      </Body>
      <BackToTopBtn
        $show={showBack}
        onClick={backToTop}
        tabIndex={showBack ? 0 : -1}
        aria-hidden={!showBack}
        aria-label={t('BackToTop', { defaultValue: isFrench ? 'Retour en haut' : 'Back to top' })}
      >
        ↑
      </BackToTopBtn>
    </>
  );
}

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <ThemeProvider theme={darkTheme}>
        <BrowserRouter><PortfolioApp /></BrowserRouter>
      </ThemeProvider>
    </I18nextProvider>
  );
}

export default App;
