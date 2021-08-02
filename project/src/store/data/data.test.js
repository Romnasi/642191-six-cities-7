import {data} from './data';
import {ActionType, startLoadingStatus} from '../action';
import {LOADING_STATE} from '../../const';
import {Screen} from '../../const';
import Offer from '../../components/screens/offer/offer';

const initialState = {
  offers: [],
  nearbyOffers: [],
  comments: [],
  favorites: [],
  currentOffer: null,
  isDataLoaded: false,
  isOfferLoading: true,
  isCommentsLoading: true,
  isNearbyLoading: true,
  isFavoriteLoading: true,
};

const offer = {
  bedrooms: 3,
  city: {
    location: {
      latitude: 52.370216,
      longitude: 4.895168,
      zoom: 10
    },
    name: "Amsterdam"
  },
  description: "A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.",
  goods: ["Heating", "Kitchen", "Cable TV", "Washing machine", "Coffee machine", "Dishwasher"],
  host: {
    avatarUrl: "img/1.png",
    id: 3,
    isPro: true,
    name: "Angelina"
  },
  id: 1,
  images: ["img/1.png", "img/2.png"],
  isFavorite: false,
  isPremium: false,
  location: {
    latitude: 52.35514938496378,
    longitude: 4.673877537499948,
    zoom: 8
  },
  maxAdults: 4,
  preview_image: "img/1.png",
  price: 120,
  rating: 4.8,
  title: "Beautiful & luxurious studio at great location",
  type: "apartment"
};

const offer2 = {
  bedrooms: 3,
  city: {
    location: {
      latitude: 52.370216,
      longitude: 4.895168,
      zoom: 10
    },
    name: "Amsterdam"
  },
  description: "A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.",
  goods: ["Heating", "Kitchen", "Cable TV", "Washing machine", "Coffee machine", "Dishwasher"],
  host: {
    avatarUrl: "img/1.png",
    id: 3,
    isPro: true,
    name: "Angelina"
  },
  id: 2,
  images: ["img/1.png", "img/2.png"],
  isFavorite: false,
  isPremium: false,
  location: {
    latitude: 52.35514938496378,
    longitude: 4.673877537499948,
    zoom: 8
  },
  maxAdults: 4,
  preview_image: "img/1.png",
  price: 120,
  rating: 4.8,
  title: "Beautiful & luxurious studio at great location",
  type: "apartment"
};

const offer3 = {
  bedrooms: 3,
  city: {
    location: {
      latitude: 52.370216,
      longitude: 4.895168,
      zoom: 10
    },
    name: "Amsterdam"
  },
  description: "A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.",
  goods: ["Heating", "Kitchen", "Cable TV", "Washing machine", "Coffee machine", "Dishwasher"],
  host: {
    avatarUrl: "img/1.png",
    id: 3,
    isPro: true,
    name: "Angelina"
  },
  id: 3,
  images: ["img/1.png", "img/2.png"],
  isFavorite: false,
  isPremium: false,
  location: {
    latitude: 52.35514938496378,
    longitude: 4.673877537499948,
    zoom: 8
  },
  maxAdults: 4,
  preview_image: "img/1.png",
  price: 120,
  rating: 4.8,
  title: "Beautiful & luxurious studio at great location",
  type: "apartment"
};

const offers = [offer, offer2, offer3];

const offer2Updated = {
  bedrooms: 3,
  city: {
    location: {
      latitude: 52.370216,
      longitude: 4.895168,
      zoom: 10
    },
    name: "Amsterdam"
  },
  description: "A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.",
  goods: ["Heating", "Kitchen", "Cable TV", "Washing machine", "Coffee machine", "Dishwasher"],
  host: {
    avatarUrl: "img/1.png",
    id: 3,
    isPro: true,
    name: "Angelina"
  },
  id: 2,
  images: ["img/1.png", "img/2.png"],
  isFavorite: true,
  isPremium: false,
  location: {
    latitude: 52.35514938496378,
    longitude: 4.673877537499948,
    zoom: 8
  },
  maxAdults: 4,
  preview_image: "img/1.png",
  price: 120,
  rating: 4.8,
  title: "Beautiful & luxurious studio at great location",
  type: "apartment"
};


describe('Reducer: data', () => {
  it('without additional parameters should return initial state', () => {
    expect(data(undefined, {}))
      .toEqual(initialState);
  });

  it('should update offers by load offers and change isDataLoaded value to true', () => {
    const state = initialState;
    const loadOffersAction = {
      type: ActionType.LOAD_OFFERS,
      payload: offers,
    };

    expect(data(state, loadOffersAction))
      .toEqual({
        offers,
        nearbyOffers: [],
        comments: [],
        favorites: [],
        currentOffer: null,
        isDataLoaded: true,
        isOfferLoading: true,
        isCommentsLoading: true,
        isNearbyLoading: true,
        isFavoriteLoading: true,
      });
  });

  it('should update favorites by load favorites offers change isFavoriteLoading value to false', () => {
    const state = initialState;
    const loadFavoritesAction = {
      type: ActionType.LOAD_FAVORITES,
      payload: offers,
    };

    expect(data(state, loadFavoritesAction))
      .toEqual({
        offers: [],
        nearbyOffers: [],
        comments: [],
        favorites: offers,
        currentOffer: null,
        isDataLoaded: false,
        isOfferLoading: true,
        isCommentsLoading: true,
        isNearbyLoading: true,
        isFavoriteLoading: false,
      });
  });

  it('should update currentOffer by load offer and change isOfferLoading value to false', () => {
    const state = initialState;
    const loadOfferAction = {
      type: ActionType.LOAD_OFFER,
      payload: offer,
    };

    expect(data(state, loadOfferAction))
      .toEqual({
        offers: [],
        nearbyOffers: [],
        comments: [],
        favorites: [],
        currentOffer: offer,
        isDataLoaded: false,
        isOfferLoading: false,
        isCommentsLoading: true,
        isNearbyLoading: true,
        isFavoriteLoading: true,
      });
  });

  it('should update nearbyOffers by load nearby offers and change isNearbyLoading value to false', () => {
    const state = initialState;
    const loadNearbyAction = {
      type: ActionType.LOAD_NEARBY,
      payload: offers,
    };

    expect(data(state, loadNearbyAction))
      .toEqual({
        offers: [],
        nearbyOffers: offers,
        comments: [],
        favorites: [],
        currentOffer: null,
        isDataLoaded: false,
        isOfferLoading: true,
        isCommentsLoading: true,
        isNearbyLoading: false,
        isFavoriteLoading: true,
      });
  });

  it('should update comments by load comments and change isCommentsLoading value to false', () => {
    const comment = {
      comment: "A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.",
      date: "2019-05-08T14:13:56.569Z",
      id: 1,
      rating: 4,
      user: {
        avatarUrl: "img/1.png",
        id: 4,
        isPro: false,
        name: "Max"
      }
    };
    const comments = [comment, comment, comment];

    const state = initialState;
    const loadCommentsAction = {
      type: ActionType.LOAD_COMMENTS,
      payload: comments,
    };

    expect(data(state, loadCommentsAction))
      .toEqual({
        offers: [],
        nearbyOffers: [],
        comments: comments,
        favorites: [],
        currentOffer: null,
        isDataLoaded: false,
        isOfferLoading: true,
        isCommentsLoading: false,
        isNearbyLoading: true,
        isFavoriteLoading: true,
      });
  });

  it('should update loading state by given key state to true', () => {
    expect(data(
      {
        offers: [],
        nearbyOffers: [],
        comments: [],
        favorites: [],
        currentOffer: null,
        isDataLoaded: false,
        isOfferLoading: true,
        isCommentsLoading: false,
        isNearbyLoading: true,
        isFavoriteLoading: true,
      },
      startLoadingStatus(LOADING_STATE.COMMENTS)))
      .toEqual({
        offers: [],
        nearbyOffers: [],
        comments: [],
        favorites: [],
        currentOffer: null,
        isDataLoaded: false,
        isOfferLoading: true,
        isCommentsLoading: true,
        isNearbyLoading: true,
        isFavoriteLoading: true,
      });

      expect(data(
      {
        offers: [],
        nearbyOffers: [],
        comments: [],
        favorites: [],
        currentOffer: null,
        isDataLoaded: false,
        isOfferLoading: false,
        isCommentsLoading: true,
        isNearbyLoading: true,
        isFavoriteLoading: true,
      },
      startLoadingStatus(LOADING_STATE.OFFER)))
      .toEqual({
        offers: [],
        nearbyOffers: [],
        comments: [],
        favorites: [],
        currentOffer: null,
        isDataLoaded: false,
        isOfferLoading: true,
        isCommentsLoading: true,
        isNearbyLoading: true,
        isFavoriteLoading: true,
      });

      expect(data(
      {
        offers: [],
        nearbyOffers: [],
        comments: [],
        favorites: [],
        currentOffer: null,
        isDataLoaded: false,
        isOfferLoading: true,
        isCommentsLoading: true,
        isNearbyLoading: false,
        isFavoriteLoading: true,
      },
      startLoadingStatus(LOADING_STATE.NEARBY)))
      .toEqual({
        offers: [],
        nearbyOffers: [],
        comments: [],
        favorites: [],
        currentOffer: null,
        isDataLoaded: false,
        isOfferLoading: true,
        isCommentsLoading: true,
        isNearbyLoading: true,
        isFavoriteLoading: true,
      });
  });

  it('without correct parameter "screen" should update by default offer in offers', () => {
    const state = {
      offers,
      nearbyOffers: [],
      comments: [],
      favorites: [],
      currentOffer: null,
      isDataLoaded: false,
      isOfferLoading: true,
      isCommentsLoading: true,
      isNearbyLoading: true,
      isFavoriteLoading: true,
    };

    const updateOffersAction = {
      type: ActionType.UPDATE_OFFERS,
      payload: {offer: offer2Updated, screen: undefined}
    };

    expect(data(state, updateOffersAction))
      .toEqual({
        offers: [offer, offer2Updated, offer3],
        nearbyOffers: [],
        comments: [],
        favorites: [],
        currentOffer: null,
        isDataLoaded: false,
        isOfferLoading: true,
        isCommentsLoading: true,
        isNearbyLoading: true,
        isFavoriteLoading: true,
      });
  });

  it('should update offer in offers by given offer and update offer in state[key] by given key', () => {
    expect(data(
      {
        offers: [],
        nearbyOffers: offers,
        comments: [],
        favorites: [],
        currentOffer: null,
        isDataLoaded: false,
        isOfferLoading: true,
        isCommentsLoading: true,
        isNearbyLoading: true,
        isFavoriteLoading: true,
      },
      {
        type: ActionType.UPDATE_OFFERS,
        payload: {offer: offer2Updated, screen: Screen.OFFER},
      }
    ))
      .toEqual({
        offers: [offer2Updated],
        nearbyOffers: [offer, offer2Updated, offer3],
        comments: [],
        favorites: [],
        currentOffer: null,
        isDataLoaded: false,
        isOfferLoading: true,
        isCommentsLoading: true,
        isNearbyLoading: true,
        isFavoriteLoading: true,
      });

    expect(data(
      {
        offers: [],
        nearbyOffers: [],
        comments: [],
        favorites: offers,
        currentOffer: null,
        isDataLoaded: false,
        isOfferLoading: true,
        isCommentsLoading: true,
        isNearbyLoading: true,
        isFavoriteLoading: true,
      },
      {
        type: ActionType.UPDATE_OFFERS,
        payload: {offer: offer2Updated, screen: Screen.FAVORITES},
      }
    ))
      .toEqual({
        offers: [offer2Updated],
        nearbyOffers: [],
        comments: [],
        favorites: [offer, offer2Updated, offer3],
        currentOffer: null,
        isDataLoaded: false,
        isOfferLoading: true,
        isCommentsLoading: true,
        isNearbyLoading: true,
        isFavoriteLoading: true,
      });

      expect(data(
      {
        offers: [],
        nearbyOffers: [],
        comments: [],
        favorites: [],
        currentOffer: offer,
        isDataLoaded: false,
        isOfferLoading: true,
        isCommentsLoading: true,
        isNearbyLoading: true,
        isFavoriteLoading: true,
      },
      {
        type: ActionType.UPDATE_OFFERS,
        payload: {offer: offer2Updated, screen: Screen.CURRENT_OFFER},
      }
    ))
      .toEqual({
        offers: [offer2Updated],
        nearbyOffers: [],
        comments: [],
        favorites: [],
        currentOffer: offer2Updated,
        isDataLoaded: false,
        isOfferLoading: true,
        isCommentsLoading: true,
        isNearbyLoading: true,
        isFavoriteLoading: true,
      });
  });
});
