import {NameSpace} from '../root-reducer';
import {createSelector} from 'reselect';
import {getCurrentCity} from '../ui/selectors';

export const getOffers = (state) => state[NameSpace.DATA].offers;
export const getComments = (state) => state[NameSpace.DATA].comments;
export const getNearbyOffers = (state) => state[NameSpace.DATA].nearbyOffers;
export const getCurrentOffer = (state) => state[NameSpace.DATA].currentOffer;
export const getOfferLoadingStatus = (state) => state[NameSpace.DATA].isOfferLoading;
export const getDataLoadedStatus = (state) => state[NameSpace.DATA].isDataLoaded;
export const getCommentsLoadingStatus = (state) => state[NameSpace.DATA].isCommentsLoading;
export const getNearbyLoadingStatus = (state) => state[NameSpace.DATA].isNearbyLoading;
export const getFavoriteLoadingStatus = (state) => state[NameSpace.DATA].isFavoriteLoading;
export const getFavorites = (state) => state[NameSpace.DATA].favorites;

export const getCurrentOffers = createSelector(
  [getOffers, getCurrentCity],
  (offers, currentCity) => offers.filter(({city: { name }}) => name === currentCity),
);
