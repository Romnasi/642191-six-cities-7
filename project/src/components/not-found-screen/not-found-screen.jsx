import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../logo/logo';


function NotFoundScreen() {
  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--not-found-screen">
        <div
          style={{
            height: '70VH',
            textAlign: 'center',
            verticalAlign: 'middle',
          }}
          className="container"
        >
          <h1
            style={{
              paddingTop: '25VH',
            }}
          >
            404. Page not found
          </h1>
          <Link
            style={{
              display: 'inline-block',
              marginTop: '15px',
              textDecoration: 'underline',
            }}
            href="/"
          >
            Go back to the main page
          </Link>
        </div>

      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </a>
      </footer>
    </div>
  );
}

export default NotFoundScreen;
