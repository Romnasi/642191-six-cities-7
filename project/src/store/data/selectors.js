import {NameSpace} from '../root-reducer';

export const getOffers = (state) => state[NameSpace.DATA].offers;
export const getComments = (state) => state[NameSpace.DATA].comments;
export const getNearbyOffers = (state) => state[NameSpace.DATA].nearbyOffers;
export const getCurrentOffer = (state) => state[NameSpace.DATA].currentOffer;
export const getOfferLoadingStatus = (state) => state[NameSpace.DATA].isOfferLoading;
export const getDataLoadedStatus = (state) => state[NameSpace.DATA].isDataLoaded;
