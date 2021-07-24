import {
  loadOffers,
  loadOffer,
  redirectToRoute,
  loadNearby,
  loadComments,
  requireAuthorization,
  closeSession
} from './action';
import {AuthorizationStatus, APIRoute, AppRoute} from '../const';
import {adaptCommentToClient, adaptOfferToClient} from '../utils/adapter';


export const fetchOffersList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.HOTELS)
    .then(({data}) => data.map(adaptOfferToClient))
    .then((data) => dispatch(loadOffers(data)))
);


export const fetchOfferData = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.HOTELS}/${id}`)
    .then(({data}) => adaptOfferToClient(data))
    .then((data) => dispatch(loadOffer(data)))
    .catch(() => dispatch(redirectToRoute(AppRoute.NOT_FOUND)))
);


export const fetchNearby = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.HOTELS}/${id}/nearby`)
    .then(({data}) => data.map(adaptOfferToClient))
    .then((data) => dispatch(loadNearby(data)))
    .catch(() => dispatch(redirectToRoute(AppRoute.NOT_FOUND)))
);


export const fetchComments = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.COMMENTS}/${id}`)
    .then(({data}) => data.map(adaptCommentToClient))
    .then((data) => dispatch(loadComments(data)))
    .catch(() => dispatch(redirectToRoute(AppRoute.NOT_FOUND)))
);


export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);


export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(({data}) => localStorage.setItem('token', data.token))
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(redirectToRoute(AppRoute.ROOT)))
);


export const postComment = (id, {comment, rating}) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.COMMENTS}/${id}`, {comment, rating})
    .then(({data}) => data.map(adaptCommentToClient))
    .then((data) => dispatch(loadComments(data)))
);


export const logout = () => (dispatch, _getState, api) => (
  api.delete(APIRoute.LOGOUT)
    .then(() => localStorage.removeItem('token'))
    .then(() => dispatch(closeSession()))
);


