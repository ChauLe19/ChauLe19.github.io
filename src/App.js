import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  Navigate
} from "react-router-dom";
import {
  Fragment
} from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import Projects from "./pages/projects"

function Intro() {
  return (
    <div className='page' id="intro">
      <div>Hi, I'm Chau Le<div>A programmer who enjoys making stuff.</div>
      </div>
    </div>
  )
}

function App() {
  return (
    <Router>
      <Fragment>
        <header className="app-header">
          <div className="header-title">
            Chau Le
          </div>
          <Link to="/" className="sidebar-item">
            Home
          </Link>
          <Link to="/projects" className="sidebar-item">
            Projects
          </Link>
          <div className="sidebar-item contact">
            <div className='icon'>
              <a href="https://github.com/ChauLe19">
                <FontAwesomeIcon icon={faGithub} size="xl" />
              </a>
            </div>
            <div className='icon'>
              <a href="https://www.linkedin.com/in/chau-le-80b713192/">
                <FontAwesomeIcon icon={faLinkedin} size="xl" />
              </a>
            </div>
          </div>
        </header>
        <Routes>
          <Route exact path="/" element={<Intro />} />
          <Route path="/projects" element={<Projects />} />
          <Route path='/404' element={<div />} />
          <Route path='*' element={<Navigate replace to='/404' />} />
        </Routes>
      </Fragment>
    </Router>
  );
}

export default App;
