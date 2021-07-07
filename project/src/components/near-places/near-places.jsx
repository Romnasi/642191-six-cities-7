import React from 'react';
import Card from '../card/card';
import {Screen} from '../../const';
import offerProp from '../screens/main/offers.prop';

function NearPlaces({nearPlaces}) {
  const nearPlaceItems = nearPlaces
    .map(({id, ...other}) => <Card key={id.toString()} cardType={Screen.OFFER} {...other} id={id} />);

  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {nearPlaceItems}
      </div>
    </section>
  );
}

NearPlaces.propTypes = {
  nearPlaces: offerProp,
};

export default NearPlaces;
