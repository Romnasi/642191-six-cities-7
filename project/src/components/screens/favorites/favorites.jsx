import React from 'react';
import Header from '../../header/header';
import Card from '../../card/card';
import offerProp from '../../screens/main/offers.prop';
import {AppRoute, Screen} from '../../../const';
import Footer from '../../footer/footer';
import {Link} from 'react-router-dom';


function Favorites ({offers}) {
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
                        <Link className="locations__item-link" to={AppRoute.ROOT}>
                          <span>{city}</span>
                        </Link>
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

      <Footer />

    </div>
  );
}


Favorites.propTypes = {
  offers: offerProp,
};


export default Favorites;
