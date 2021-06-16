import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../header/header';
import PlaceCard from '../../place-card/place-card';


function Favorites (props) {
  const {cardData} = props;

  const sortByCitiesData = Object.entries(cardData.reduce((total, cityData) => {
    const {city: {name}} = cityData;

    if (!total[name]) {
      total[name] = [cityData];
    } else {
      total[name].push(cityData);
    }

    return total;
  }, {}));

  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {sortByCitiesData
                .map(([city, cityData], i) =>(
                  <li className="favorites__locations-items" key={i.toString()}>
                    <div className="favorites__locations locations locations--current">
                      <div className="locations__item">
                        <a className="locations__item-link" href="#">
                          <span>{city}</span>
                        </a>
                      </div>
                    </div>
                    <div className="favorites__places">

                    </div>
                    <div className="favorites__places">
                      {cityData
                        .map((
                          {
                            id,
                            ...other
                          },
                        ) => <PlaceCard key={id.toString()} cardType={'FAVORITES'} {...other} />)}
                    </div>
                  </li>
                ))}
            </ul>
          </section>
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


Favorites.propTypes = {
  cardData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      previewImage: PropTypes.string.isRequired,
      isPremium: PropTypes.bool.isRequired,
      isFavorite: PropTypes.bool.isRequired,
      rating: PropTypes.number.isRequired,
    })),
};


export default Favorites;
