import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  Navigate,
  NavLink
} from "react-router-dom";
import {
  Fragment
} from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import Projects from "./pages/projects"
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import TextTransformer from './pages/TextTransformer';
import Blog from './pages/blog';
import Blogs from './pages/blogs';

function Intro() {
  return (
    <div className='page' id="intro">
      <div>Hi, I'm Chau Le<div>A developer who enjoys building things other than software too.</div>
      </div>
    </div>
  )
}

function App() {
  return (
    <Router basename='/'>
      <Fragment>
        <header className="app-header">
          <div className="header-title">
            Chau Le
          </div>

          <div className="flex-spacing"></div>
          <input type="checkbox" id="checkbox_toggle" />
          <label htmlFor="checkbox_toggle" className="hamburger">&#9776;</label>
          <div id="menu" className='menu'>
            <NavLink to="/" className="sidebar-item" activeClassName="active">
              Home
            </NavLink>
            <NavLink to="/projects" className="sidebar-item" activeClassName="active">
              Projects
            </NavLink>
            <NavLink to="/blogs" className="sidebar-item" activeClassName="active">
              Blogs
            </NavLink>
          </div>
          <div id="contacts" className="sidebar-item contact">
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
          <Route path="/TextTransformer" element={<TextTransformer />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog/:id" element={<Blog />} />
          <Route path='/404' element={<div className='page' id='intro'><FontAwesomeIcon icon={faTriangleExclamation} size="5x"/>Oops, page not found!</div>} />
          <Route path='*' element={<Navigate replace to='/404' />} />
        </Routes>
      </Fragment>
    </Router>
  );
}

export default App;
