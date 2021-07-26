import React from 'react';
import {Link} from 'react-router-dom';
import Header from '../../header/header';
import Footer from '../../footer/footer';


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
            to="/"
          >
            Go back to the main page
          </Link>
        </div>

      </main>

      <Footer />

    </div>
  );
}

export default NotFoundScreen;
