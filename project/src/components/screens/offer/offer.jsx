import React from 'react';
import {useParams} from 'react-router-dom';
import offerProp from '../../screens/main/offers.prop';
import reviewProp from '../../reviews/review.prop';
import PropTypes from 'prop-types';
import Header from '../../header/header';
import Gallery from '../../gallery/gallery';
import Amenities from '../../amenities/amenities';
import Reviews from '../../reviews/reviews';
import PlaceFeatures from '../../place-features/place-features';
import Host from '../../host/host';
import NearPlaces from '../../near-places/near-places';
import {Screen} from '../../../const';
import Map from '../../map/map';


function Offer({offers, nearPlaces, reviews}) {
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
    location,
  } = currentPlace;

  const currentOffers = [ currentPlace, ...nearPlaces];


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

              <Host
                host={host}
                description={description}
              />

              <Reviews reviews={reviews} />

            </div>
          </div>

          <Map
            currentOffers={currentOffers}
            selectedPoint={location}
            cardType={Screen.OFFER}
          />

        </section>

        <div className="container">
          <NearPlaces nearPlaces={nearPlaces} />
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
