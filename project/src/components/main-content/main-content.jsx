import React from 'react';
import OfferList from '../offer-list/offer-list';
import Map from '../map/map';
import {Screen} from '../../const';
import PropTypes from 'prop-types';
import offerProp from '../screens/main/offers.prop';
import pointProp from '../map/point.prop';
import currentCityProp from '../city-list/current-city.prop';

function MainContent(props) {
  const {offersCount, currentCity, currentOffers, selectedPoint, onListItemHover} = props;

  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{`${offersCount} places to stay in ${currentCity}`}</b>
        <form className="places__sorting" action="#" method="get">
          <span className="places__sorting-caption">Sort by</span>
          <span className="places__sorting-type" tabIndex="0">
                  Popular
            <svg className="places__sorting-arrow" width="7" height="4">
              <use xlinkHref="#icon-arrow-select"/>
            </svg>
          </span>
          <ul className="places__options places__options--custom places__options--opened">
            <li className="places__option places__option--active" tabIndex="0">Popular</li>
            <li className="places__option" tabIndex="0">Price: low to high</li>
            <li className="places__option" tabIndex="0">Price: high to low</li>
            <li className="places__option" tabIndex="0">Top rated first</li>
          </ul>
        </form>

        <OfferList
          currentOffers={currentOffers}
          onListItemHover={onListItemHover}
        />

      </section>
      <div className="cities__right-section">
        <Map
          currentOffers={currentOffers}
          selectedPoint={selectedPoint}
          cardType={Screen.MAIN}
        />
      </div>
    </div>
  );
}

MainContent.propTypes = {
  offersCount: PropTypes.number.isRequired,
  currentCity: currentCityProp,
  currentOffers: offerProp,
  selectedPoint: pointProp,
  onListItemHover: PropTypes.func.isRequired,
};

export default MainContent;
