import {
  loadOffers,
  loadOffer,
  redirectToRoute,
  loadNearby,
  loadComments,
  requireAuthorization,
  closeSession,
  loadFavorites, updateOffers, addUserEmail
} from './action';
import {AuthorizationStatus, APIRoute, AppRoute} from '../const';
import {adaptCommentToClient, adaptOfferToClient} from '../utils/adapter';
import {toast} from '../utils/toast';
import {HttpCode} from '../const';

const ERROR_TEXT = 'Something went wrong';


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


export const fetchFavorites = () => (dispatch, _getState, api) => (
  api.get(`${APIRoute.FAVORITE}`)
    .then(({data}) => {
      if (data.length !== 0) {
        return data.map(adaptOfferToClient);
      }
      return data;
    })
    .then((data) => dispatch(loadFavorites(data)))
    .catch(() => toast(ERROR_TEXT))
);


export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(({data: {email}}) => {
      dispatch(requireAuthorization(AuthorizationStatus.AUTH));
      dispatch(addUserEmail(email));
    })
    .catch(() => {})
);


export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(({data}) => {
      localStorage.setItem('token', data.token);
      api.defaults.headers['x-token'] = data.token;
      dispatch(addUserEmail(email));
    })
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(redirectToRoute(AppRoute.ROOT)))
    .catch((err) => {
      if (err.response.status === HttpCode.BAD_REQUEST) {
        throw err;
      } else {
        toast(ERROR_TEXT);
      }
    })
);


export const postComment = (id, {comment, rating}) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.COMMENTS}/${id}`, {comment, rating})
    .then(({data}) => data.map(adaptCommentToClient))
    .then((data) => dispatch(loadComments(data)))
    .catch((err) => {
      if (err.response.status === HttpCode.BAD_REQUEST) {
        throw err;
      } else {
        toast(ERROR_TEXT);
      }
    })
);


export const postFavorite = (id, FavoriteStatus, screen) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.FAVORITE}/${id}/${FavoriteStatus}`)
    .then(({data}) => adaptOfferToClient(data))
    .then((offer) => dispatch(updateOffers({offer, screen})))
    .catch(() => toast(ERROR_TEXT))
);


export const logout = () => (dispatch, _getState, api) => (
  api.delete(APIRoute.LOGOUT)
    .then(() => localStorage.removeItem('token'))
    .then(() => dispatch(closeSession()))
    .then(() => dispatch(addUserEmail('')))
);
