import React, {useCallback} from 'react';
import {useParams} from 'react-router-dom';
import Header from '../../header/header';
import Gallery from '../../gallery/gallery';
import Amenities from '../../amenities/amenities';
import Reviews from '../../reviews/reviews';
import PlaceFeatures from '../../place-features/place-features';
import Host from '../../host/host';
import NearPlaces from '../../near-places/near-places';
import {Screen} from '../../../const';
import Map from '../../map/map';
import {useSelector, useDispatch} from 'react-redux';
import {fetchComments, fetchNearby, fetchOfferData} from '../../../store/api-actions';
import LoadingScreen from '../../loading-screen/loading-screen';
import useOfferData from '../../../hooks/use-offer-data';
import {
  getComments, getCommentsLoadingStatus,
  getCurrentOffer, getDataLoadedStatus, getNearbyLoadingStatus,
  getNearbyOffers,
  getOfferLoadingStatus,
  getOffers
} from '../../../store/data/selectors';
import {getAuthorizationStatus} from '../../../store/user/selectors';
import {startLoadingStatus} from '../../../store/action';
import {LOADING_STATE} from '../../../const';


function Offer(props) {
  const isOfferLoading = useSelector(getOfferLoadingStatus);
  const isCommentsLoading = useSelector(getCommentsLoadingStatus);
  const isNearbyLoading = useSelector(getNearbyLoadingStatus);
  const isDataLoaded = useSelector(getDataLoadedStatus);

  const offers = useSelector(getOffers);
  const nearbyOffers = useSelector(getNearbyOffers);
  const currentOffer = useSelector(getCurrentOffer);
  const comments = useSelector(getComments);
  const authorizationStatus = useSelector(getAuthorizationStatus);

  const dispatch = useDispatch();

  const fetchOffer = useCallback((id) => {
    dispatch(startLoadingStatus(LOADING_STATE.OFFER));
    return dispatch(fetchOfferData(id));
  },
  [dispatch],
  );

  const fetchNearbyOffers = useCallback(
    (id) => {
      dispatch(startLoadingStatus(LOADING_STATE.NEARBY));
      return dispatch(fetchNearby(id));
    },
    [dispatch],
  );

  const fetchOfferComments = useCallback(
    (id) => {
      dispatch(startLoadingStatus(LOADING_STATE.COMMENTS));
      return dispatch(fetchComments(id));
    },
    [dispatch],
  );


  const currentID = parseInt(useParams().id, 10);
  useOfferData(offers, currentID, fetchNearbyOffers, fetchOffer, fetchOfferComments);

  if ((!isDataLoaded && isOfferLoading) || isCommentsLoading || isNearbyLoading) {
    return <LoadingScreen />;
  }

  let currentPlace;
  if (isDataLoaded) {
    currentPlace = offers.find((offer) => offer.id === currentID);
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
                id={currentID}
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


export default Offer;
