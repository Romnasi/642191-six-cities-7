import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const cardData = [
  {
    id: 1,
    name: 'Beautiful &amp; luxurious apartment at great location',
    type: 'Apartment',
    price: 120,
    photo: 'apartment-01',
    isPremium: true,
    isBookmark: false,
    rating: 80,
  },
  {
    id: 2,
    name: 'Wood and stone place',
    type: 'Private room',
    price: 80,
    photo: 'room',
    isPremium: false,
    isBookmark: true,
    rating: 80,
  },
  {
    id: 3,
    name: 'Canal View Prinsengracht',
    type: 'Apartment',
    price: 132,
    photo: 'apartment-02',
    isPremium: false,
    isBookmark: false,
    rating: 80,
  },
  {
    id: 4,
    name: 'Nice, cozy, warm big bed apartment',
    type: 'Apartment',
    price: 180,
    photo: 'apartment-03',
    isPremium: true,
    isBookmark: false,
    rating: 100,
  },
  {
    id: 5,
    name: 'Wood and stone place',
    type: 'Private room',
    price: 80,
    photo: 'room',
    isPremium: false,
    isBookmark: true,
    rating: 80,
  },
];

ReactDOM.render(
  <React.StrictMode>
    <App
      cardData={cardData}
    />
  </React.StrictMode>,
  document.getElementById('root'));
