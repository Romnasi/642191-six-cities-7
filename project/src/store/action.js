import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  CHANGE_CITY: 'main/changeCity',
  LOAD_OFFERS: 'data/loadOffers',
  LOAD_OFFER: 'data/loadOffer',
  LOAD_NEARBY: 'data/loadNearby',
  LOAD_COMMENTS: 'data/loadComments',
  REQUIRED_AUTHORIZATION: 'user/requiredAuthorization',
  LOGOUT: 'user/logout',
  REDIRECT_TO_ROUTE: 'user/redirectToRoute',
  START_LOADING_STATUS: 'data/startLoadingStatus',
};


export const changeCity = createAction(ActionType.CHANGE_CITY, (city) => ({
  payload: city,
}));


export const loadOffers = createAction(ActionType.LOAD_OFFERS, (offers) => ({
  payload: offers,
}));


export const loadOffer = createAction(ActionType.LOAD_OFFER, (offer) => ({
  payload: offer,
}));


export const loadNearby = createAction(ActionType.LOAD_NEARBY, (nearbyOffers) => ({
  payload: nearbyOffers,
}));


export const loadComments = createAction(ActionType.LOAD_COMMENTS, (comments) => ({
  payload: comments,
}));


export const requireAuthorization = createAction(ActionType.REQUIRED_AUTHORIZATION, (status) => ({
  payload: status,
}));


export const closeSession = createAction(ActionType.LOGOUT);


export const redirectToRoute = createAction(ActionType.REDIRECT_TO_ROUTE, (url) => ({
  payload: url,
}));

export const startLoadingStatus = createAction(ActionType.START_LOADING_STATUS, (dataTypeStatus) => ({
  payload: dataTypeStatus,
}));
