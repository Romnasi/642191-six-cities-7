import {ActionType} from './action';
import {AuthorizationStatus} from '../const';

const initialState = {
  currentCity: 'Paris',
  offers: [],
  nearbyOffers: [],
  currentOffer: null,
  comments: [],
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  isDataLoaded: false,
  isOfferLoading: true,
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        currentCity: action.payload,
      };
    case ActionType.LOAD_OFFERS:
      return {
        ...state,
        offers: action.payload,
        isDataLoaded: true,
      };
    case ActionType.LOAD_OFFER:
      return {
        ...state,
        currentOffer: action.payload,
        isOfferLoading: false,
      };
    case ActionType.LOAD_NEARBY:
      return {
        ...state,
        nearbyOffers: action.payload,
      };
    case ActionType.LOAD_COMMENTS:
      return {
        ...state,
        comments: action.payload,
      };
    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload,
      };
    case ActionType.LOGOUT:
      return {
        ...state,
        authorizationStatus: AuthorizationStatus.NO_AUTH,
      };
    default:
      return state;
  }
};

export {reducer};
