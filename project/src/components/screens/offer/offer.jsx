import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import offerProps from '../../screens/main/offers.prop';
import offerPropItem from '../../screens/main/offer.prop';
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
import {connect} from 'react-redux';
import {fetchComments, fetchNearby, fetchOfferData} from '../../../store/api-actions';
import LoadingScreen from '../../loading-screen/loading-screen';


function Offer({
  offers, nearbyOffers,
  currentOffer, comments, authorizationStatus,
  fetchNearbyOffers, fetchOffer, fetchOfferComments,
}) {
  const currentID = useParams().id;


  useEffect(() => {
    if (!offers.length) {
      fetchOffer(currentID);
    }
  }, [currentID, fetchOffer, offers]);


  useEffect(() => {
    fetchNearbyOffers(currentID);
  }, [currentID, fetchNearbyOffers]);

  useEffect(() => {
    fetchOfferComments(currentID);
  }, [currentID, fetchOfferComments]);

  if (!offers.length && !currentOffer) {
    return <LoadingScreen />;
  }

  let currentPlace = {};
  if (offers.length) {
    currentPlace = offers.find((offer) => offer.id.toString() === currentID);
  } else {
    currentPlace = currentOffer;
  }

  const {
    images, type, isPremium, title, rating,
    isFavorite, bedrooms, maxAdults,
    price, goods, host, description, location,
  } = currentPlace;

  const currentOffers = [ currentPlace, ...nearbyOffers];


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

              <Reviews
                reviews={comments}
                authorizationStatus={authorizationStatus}
              />

            </div>
          </div>

          <Map
            currentOffers={currentOffers}
            selectedPoint={location}
            cardType={Screen.OFFER}
          />

        </section>

        <div className="container">
          <NearPlaces nearPlaces={nearbyOffers} />
        </div>

      </main>
    </div>
  );
}

Offer.propTypes = {
  comments: reviewProp,
  fetchOfferComments: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  currentOffer: offerPropItem,
  fetchOffer: PropTypes.func.isRequired,
  fetchNearbyOffers: PropTypes.func.isRequired,
  offers: offerProps,
  nearbyOffers: offerProps,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }),
};


const mapDispatchToProps = (dispatch) => ({
  fetchOffer(id) {
    return dispatch(fetchOfferData(id));
  },
  fetchNearbyOffers(id) {
    return dispatch(fetchNearby(id));
  },
  fetchOfferComments(id) {
    return dispatch(fetchComments(id));
  },
});


const mapStateToProps = (state) => ({
  offers: state.offers,
  currentOffer: state.currentOffer,
  comments: state.comments,
  nearbyOffers: state.nearbyOffers,
  authorizationStatus: state.authorizationStatus,
  isDataLoaded: state.isDataLoaded,
});

export {Offer};
export default connect(mapStateToProps, mapDispatchToProps)(Offer);
