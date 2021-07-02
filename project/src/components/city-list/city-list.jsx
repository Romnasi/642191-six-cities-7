import React from 'react';
import PropTypes from 'prop-types';

const cities = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

function CityList({currentCity, changeCity}) {

  const cityElements = cities.map((city) => (
    <li key={city} className="locations__item">
      <button
        onClick={(evt) => {
          evt.preventDefault();
          changeCity(city);
        }}
        className={
          `locations__item-link tabs__item ${city === currentCity && 'tabs__item--active'}`
        }
      >
        <span>{city}</span>
      </button>
    </li>
  ));

  return (
    <>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            {cityElements}
          </ul>
        </section>
      </div>
    </>
  );
}

CityList.propTypes = {
  currentCity: PropTypes.string.isRequired,
  changeCity: PropTypes.func.isRequired,
};

export default CityList;
