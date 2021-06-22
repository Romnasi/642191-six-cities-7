import React from 'react';
import Header from '../../header/header';
import Card from '../../card/card';
import offerProp from '../../screens/main/offers.prop';


function Favorites (props) {
  const {offers} = props;

  const sortByCitiesData = Object.entries(offers.reduce((total, cityData) => {
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
                .map(([city, cityData]) =>(
                  <li className="favorites__locations-items" key={city}>
                    <div className="favorites__locations locations locations--current">
                      <div className="locations__item">
                        <a className="locations__item-link" href="#">
                          <span>{city}</span>
                        </a>
                      </div>
                    </div>
                    <div className="favorites__places">
                      {cityData
                        .map((
                          {
                            id,
                            ...other
                          },
                        ) => <Card key={id.toString()} cardType={Screen.FAVORITES} {...other} id={id} />)}
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
  offers: offerProp,
};


export default Favorites;
