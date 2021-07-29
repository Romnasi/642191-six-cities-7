import React from 'react';
import {Link} from 'react-router-dom';
import {AppRoute, Screen} from '../../const';
import Card from '../card/card';
import offerProps from '../screens/main/offers.prop';
import PropTypes from 'prop-types';


function FavoritesList({sortByCitiesData}) {
  return (
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
  );
}

FavoritesList.propTypes = {
  sortByCitiesData: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.string, offerProps]),
    ),
  ),
};

export default FavoritesList;
