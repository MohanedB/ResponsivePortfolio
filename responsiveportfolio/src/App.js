import './App.css';
import styled, {ThemeProvider} from "styled-components";
import { darkTheme } from './utils/Theme';
import NavBar from "./components/Navbar/Navbar";
import Hero from './components/Hero/Hero';
import Skills from './components/Skills/Skills';
import Education from './components/Education/Education';
import Contact from './components/Contact/Contact';
import { BrowserRouter as Router} from "react-router-dom";
import Projects from './components/Project/Project';

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  height: 100%,
  overflow-x: hidden;
`

const Wrapper = styled.div`
  background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%,30% 98%, 0 100%);
  padding-bottom: 20px;



 
`

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
    <Router>
      <NavBar/>
      <Body>
        <Hero/>
        <Wrapper>
        <Skills/>
        </Wrapper>
        <Education/>
        <Projects/>
        <Contact/>
     </Body>
   </Router>
    </ThemeProvider>

   
  );
} 


export default App;
