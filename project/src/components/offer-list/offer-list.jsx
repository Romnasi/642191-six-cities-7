import React, {useState} from 'react';
import Card from '../card/card';
import offerProp from '../screens/main/offers.prop';
import PropTypes from 'prop-types';
import {Screen} from '../../const';


function OfferList(props) {
  const [, setActiveCardId] = useState(0);
  const {offers, currentCity} = props;

  return (
    <div className="cities__places-list places__list tabs__content" >
      {offers
        .filter(({city: { name }}) => name === currentCity)
        .map(({id, ...other}) => (
          <Card
            key={id.toString()}
            cardType={Screen.MAIN}
            {...other}
            id={id}
            onHover={setActiveCardId}
          />
        ))}
    </div>
  );
}

OfferList.propTypes = {
  offers: offerProp,
  currentCity: PropTypes.string.isRequired,
};

export default OfferList;
