import {ActionType} from '../action';

const initialState = {
  offers: [],
  nearbyOffers: [],
  comments: [],
  currentOffer: null,
  isDataLoaded: false,
  isOfferLoading: true,
};


const data = (state = initialState, action) => {
  switch (action.type) {
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
    default:
      return state;
  }
};

export {data};
