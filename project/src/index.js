import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import App from './components/app/app';
import {offers} from './mocks/offer';
import {reviews} from './mocks/reviews';
import {reducer} from './store/reducer';
import {ActionCreator} from './store/action';


const store = createStore(
  reducer,
  composeWithDevTools(),
);

store.dispatch(ActionCreator.setOffers(offers));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        reviews={reviews}
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
