import React, {useState} from 'react';
import OfferList from '../offer-list/offer-list';
import Map from '../map/map';
import {Screen} from '../../const';
import PropTypes from 'prop-types';
import offerProp from '../screens/main/offers.prop';
import pointProp from '../map/point.prop';
import currentCityProp from '../city-list/current-city.prop';
import SortList from '../sort-list/sort-list';
import {getSortedOffers} from '../../utils/sort';


function MainContent({offersCount, currentCity, currentOffers, selectedPoint, onListItemHover}) {

  const [activeFilter, setActiveFilter] = useState('popular');

  const onFilterClick = (id) => {
    setActiveFilter(id);
  };

  const sortedOffers = getSortedOffers(currentOffers.slice(), activeFilter);

  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{`${offersCount} places to stay in ${currentCity}`}</b>

        <SortList
          activeFilter={activeFilter}
          onFilterClick={onFilterClick}
        />

        <OfferList
          currentOffers={sortedOffers}
          onListItemHover={onListItemHover}
        />
      </section>

      <div className="cities__right-section">
        <Map
          currentOffers={sortedOffers}
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
