import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';

const Header = ({ isAuthenticated, logout }) => {
  return (
    <header>
      <nav
        className='navbar navbar-expand-lg navbar-custom'
        data-bs-theme='dark'
      >
        <div className='container-fluid'>
          <Link className='navbar-brand' to='/'>
            <span className='logo'>Hotel Primus</span>
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarNav'>
            <ul className='navbar-nav'>
              <li className='nav-item'>
                <Link className='nav-link active' to='/'>
                  Início
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/rooms'>
                  Quartos
                </Link>
              </li>
              {!isAuthenticated ? (
                <li className='nav-item'>
                  <Link className='nav-link' to='/login'>
                    Login
                  </Link>
                </li>
              ) : (
                <li className='nav-item'>
                  <button className='nav-link btn' onClick={logout}>
                    Logout
                  </button>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
