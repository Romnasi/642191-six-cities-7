import React from 'react';
import {Link} from 'react-router-dom';
import Header from '../../header/header';


function NotFoundScreen() {
  return (
    <div className="page">
      <Header />

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
