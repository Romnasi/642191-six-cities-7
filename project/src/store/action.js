export const ActionType = {
  CHANGE_CITY: 'main/changeCity',
  LOAD_OFFERS: 'data/loadOffers',
  LOAD_OFFER: 'data/loadOffer',
  LOAD_NEARBY: 'data/loadNearby',
  LOAD_COMMENTS: 'data/loadComments',
  REQUIRED_AUTHORIZATION: 'user/requiredAuthorization',
  LOGOUT: 'user/logout',
  REDIRECT_TO_ROUTE: 'user/redirectToRoute',
};


// export const ActionCreator = {
//   changeCity: (city) => ({
//     type: ActionType.CHANGE_CITY,
//     payload: city,
//   }),
//   loadOffers: (offers) => ({
//     type: ActionType.LOAD_OFFERS,
//     payload: offers,
//   })
//   ,loadOffer: (offer) => ({
//     type: ActionType.LOAD_OFFER,
//     payload: offer,
//   }),
//   loadNearby: (nearbyOffers) => ({
//     type: ActionType.LOAD_NEARBY,
//     payload: nearbyOffers,
//   }),
//   loadComments: (comments) => ({
//     type: ActionType.LOAD_COMMENTS,
//     payload: comments,
//   }),
//   requireAuthorization: (status) => ({
//     type: ActionType.REQUIRED_AUTHORIZATION,
//     payload: status,
//   }),
//   logout: () => ({
//     type: ActionType.LOGOUT,
//   }),
//   redirectToRoute: (url) => ({
//     type: ActionType.REDIRECT_TO_ROUTE,
//     payload: url,
//   }),
// };


export const changeCity = (city) => ({
  type: ActionType.CHANGE_CITY,
  payload: city,
});


export const loadOffers = (offers) => ({
  type: ActionType.LOAD_OFFERS,
  payload: offers,
});


export const loadOffer = (offer) => ({
  type: ActionType.LOAD_OFFER,
  payload: offer,
});


export const loadNearby = (nearbyOffers) => ({
  type: ActionType.LOAD_NEARBY,
  payload: nearbyOffers,
});


export const loadComments = (comments) => ({
  type: ActionType.LOAD_COMMENTS,
  payload: comments,
});


export const requireAuthorization = (status) => ({
  type: ActionType.REQUIRED_AUTHORIZATION,
  payload: status,
});


export const closeSession = () => ({
  type: ActionType.LOGOUT,
});


export const redirectToRoute = (url) => ({
  type: ActionType.REDIRECT_TO_ROUTE,
  payload: url,
});
