import React from 'react';
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
import useOfferData from '../../../hooks/use-offer-data';
import {
  getComments,
  getCurrentOffer,
  getNearbyOffers,
  getOfferLoadingStatus,
  getOffers
} from '../../../store/data/selectors';
import {getAuthorizationStatus} from '../../../store/user/selectors';


function Offer({
  offers, nearbyOffers, isOfferLoading,
  currentOffer, comments, authorizationStatus,
  fetchNearbyOffers, fetchOffer, fetchOfferComments,
}) {
  const currentID = useParams().id;
  useOfferData(offers, currentID, fetchNearbyOffers, fetchOffer, fetchOfferComments);

  if (!offers.length && isOfferLoading) {
    return <LoadingScreen />;
  }

  let currentPlace;
  if (offers.length) {
    currentPlace = offers.find((offer) => offer.id.toString() === currentID);
  } else {
    currentPlace = currentOffer;
  }

  const {
    isFavorite, isPremium,
    rating, bedrooms, maxAdults, images, type, title,
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
  isOfferLoading: PropTypes.bool.isRequired,
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
  offers: getOffers(state),
  isOfferLoading: getOfferLoadingStatus(state),
  currentOffer: getCurrentOffer(state),
  comments: getComments(state),
  nearbyOffers: getNearbyOffers(state),
  authorizationStatus: getAuthorizationStatus(state),
});

export {Offer};
export default connect(mapStateToProps, mapDispatchToProps)(Offer);
