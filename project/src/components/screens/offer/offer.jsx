import React from 'react';
import {useParams} from 'react-router-dom';
import offerProp from '../../screens/main/offers.prop';
import reviewProp from '../../reviews/review.prop';
import PropTypes from 'prop-types';
import {Screen} from '../../../const';
import Header from '../../header/header';
import Card from '../../card/card';
import Gallery from '../../gallery/gallery';
import Amenities from '../../amenities/amenities';
import Reviews from '../../reviews/reviews';
import PlaceFeatures from '../../place-features/place-features';
import Host from '../../host/host';


function Offer(props) {
  const {offers, nearPlaces, reviews} = props;
  const currentID = useParams().id;

  const currentPlace = offers.find((offer) => offer.id.toString() === currentID);
  const {
    images,
    type,
    isPremium,
    title,
    rating,
    isFavorite,
    bedrooms,
    maxAdults,
    price,
    goods,
    host,
    description,
  } = currentPlace;


  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--property">
        <section className="property">

          <Gallery images={images} type={type} />

          <div className="property__container container">
            <div className="property__wrapper">

              <PlaceFeatures
                isPremium={isPremium}
                title={title}
                rating={rating}
                isFavorite={isFavorite}
                type={type}
                bedrooms={bedrooms}
                maxAdults={maxAdults}
                price={price}
              />

              <Amenities goods={goods} />

              <Host host={host} description={description} />

              <Reviews reviews={reviews} />

            </div>
          </div>

          <section className="property__map map" />

        </section>

        <div className="container">

          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              {nearPlaces
                .map((
                  {
                    id,
                    ...other
                  },
                ) => <Card key={id.toString()} cardType={Screen.OFFER} {...other} id={id} />)}
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}

Offer.propTypes = {
  offers: offerProp,
  nearPlaces: offerProp,
  reviews: reviewProp,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }),
};


export default Offer;
