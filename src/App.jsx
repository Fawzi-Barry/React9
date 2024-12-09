import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './styles.css';
import Home from './Home';
import Features from './Features';
import Resources from './Resources';
import About from './About';

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar">
          <Link className="navbar-brand" to="/">Company Name</Link>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/features">Features</Link></li>
            <li><Link to="/resources">Resources</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/about" element={<About />} />
        </Routes>

        <footer className="footer">
          <div>
            <h6>Features</h6>
            <ul>
              <li><Link to="/features">Cool stuff</Link></li>
              <li><Link to="/features">Random feature</Link></li>
              <li><Link to="/features">Team feature</Link></li>
            </ul>
          </div>
          <div>
            <h6>Resources</h6>
            <ul>
              <li><Link to="/resources">Resource</Link></li>
              <li><Link to="/resources">Resource name</Link></li>
            </ul>
          </div>
          <div>
            <h6>About</h6>
            <ul>
              <li><Link to="/about">Team</Link></li>
              <li><Link to="/about">Locations</Link></li>
            </ul>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
