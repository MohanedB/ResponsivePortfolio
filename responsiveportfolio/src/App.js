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
import { BrowserRouter as Router } from 'react-router-dom';
import Projects from './components/Project/Project';
import Experience from './components/Experience/experience';
import { I18nextProvider } from 'react-i18next';
import i18n from './components/Internationalization/I18n';
import { PortfolioProvider, usePortfolio } from './context/PortfolioContext';
import SplashScreen from './components/SplashScreen/SplashScreen';

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

// Inner component so it can access context
function PortfolioApp() {
  const { mode } = usePortfolio();
  const [scrollProgress, setScrollProgress] = React.useState(0);
  const [showBack, setShowBack] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
      setShowBack(window.scrollY > 500);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <ScrollBar style={{ width: `${scrollProgress}%` }} />
      {!mode && <SplashScreen />}
      <NavBar />
      <Body>
        <Hero />
        <Wrapper>
          <Skills />
        </Wrapper>
        <Education />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </Body>
      <BackToTopBtn
        $show={showBack}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
      >
        ↑
      </BackToTopBtn>
    </>
  );
}

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <PortfolioProvider>
        <ThemeProvider theme={darkTheme}>
          <Router>
            <PortfolioApp />
          </Router>
        </ThemeProvider>
      </PortfolioProvider>
    </I18nextProvider>
  );
}

export default App;