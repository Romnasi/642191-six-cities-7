import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {offers} from './mocks/offer';

ReactDOM.render(
  <React.StrictMode>
    <App
      cardData={offers}
    />
  </React.StrictMode>,
  document.getElementById('root'));
