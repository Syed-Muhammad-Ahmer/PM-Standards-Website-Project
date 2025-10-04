import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          Project Standards
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link 
              to="/" 
              className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/explorer" 
              className={`nav-link ${location.pathname.startsWith('/explorer') ? 'active' : ''}`}
            >
              Explorer
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/comparison" 
              className={`nav-link ${location.pathname === '/comparison' ? 'active' : ''}`}
            >
              Comparison
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/insights" 
              className={`nav-link ${location.pathname === '/insights' ? 'active' : ''}`}
            >
              Insights
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;