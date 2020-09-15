import React from 'react'
import { BrowserRouter as Router} from "react-router-dom";
import AboutMe from './components/aboutme';
import Navbar from "./components/Navagation"
import Projects from './components/projects';
import Projects2 from './components/projects2';
import Wrapper from './components/Wrapper';
// import Resume from './components/Resume';

function App() {
  return (
    <div className="container-fluid">
    <Router>
      <Navbar />
      <Wrapper />
      <AboutMe />
      <Projects />
      <Projects2 />
    </Router>
    </div>
  );
}

export default App;