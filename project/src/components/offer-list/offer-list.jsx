import React from 'react';
import Card from '../card/card';
import offerProp from '../screens/main/offers.prop';
import {Screen} from '../../const';
import PropTypes from 'prop-types';


function OfferList(props) {
  const {currentOffers, onListItemHover} = props;

  return (
    <div className="cities__places-list places__list tabs__content" >
      {currentOffers
        .map(({id, ...other}) => (
          <Card
            key={id.toString()}
            cardType={Screen.MAIN}
            {...other}
            id={id}
            onListItemHover={onListItemHover}
          />
        ))}
    </div>
  );
}

OfferList.propTypes = {
  currentOffers: offerProp,
  onListItemHover: PropTypes.func.isRequired,
};

export default OfferList;
