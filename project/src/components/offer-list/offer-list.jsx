import React from 'react';
import Card from '../card/card';
import {cardDataPropTypes} from '../../const';


// Позже заменим состоянием
const currentCity = 'Amsterdam';

function OfferList(props) {
  const {cardData} = props;

  return (
    <div className="cities__places-list places__list tabs__content">
      {cardData
        .filter(({city: { name }}) => name === currentCity)
        .map(({id, ...other}) => <Card key={id.toString()} cardType={'MAIN'} {...other} />)}
    </div>
  );
}

OfferList.propTypes = cardDataPropTypes;

export default OfferList;
