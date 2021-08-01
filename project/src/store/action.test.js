import {
  changeCity,
  loadOffers,
  loadOffer,
  loadNearby,
  loadComments,
  requireAuthorization,
  closeSession,
  redirectToRoute,
  startLoadingStatus,
  loadFavorites,
  updateOffers,
  addUserEmail,
  ActionType,
} from './action';

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
const offers = [offer, offer, offer, offer];


describe('Actions', () => {
  it('action creator for change city returns correct action', () => {
    const city = 'Moscow';

    const expectedAction = {
      type: ActionType.CHANGE_CITY,
      payload: city,
    };

    expect(changeCity(city)).toEqual(expectedAction);
  });

  it('action creator for load offers returns correct action', () => {
    const expectedAction = {
      type: ActionType.LOAD_OFFERS,
      payload: offers,
    };

    expect(loadOffers(offers)).toEqual(expectedAction);
  });

  it('action creator for load offer returns correct action', () => {
    const expectedAction = {
      type: ActionType.LOAD_OFFER,
      payload: offer,
    };

    expect(loadOffer(offer)).toEqual(expectedAction);
  });

  it('action creator for load nearby offers returns correct action', () => {
    const expectedAction = {
      type: ActionType.LOAD_NEARBY,
      payload: offers,
    };

    expect(loadNearby(offers)).toEqual(expectedAction);
  });

  it('action creator for load comments returns correct action', () => {
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

    const expectedAction = {
      type: ActionType.LOAD_COMMENTS,
      payload: comments,
    };

    expect(loadComments(comments)).toEqual(expectedAction);
  });

  it('action creator for require authorization returns correct action', () => {
    const status = 'AUTH';

    const expectedAction = {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: status,
    };

    expect(requireAuthorization(status)).toEqual(expectedAction);
  });

  it('action creator for close session returns correct action', () => {
    const expectedAction = {
      type: ActionType.LOGOUT,
    };

    expect(closeSession()).toEqual(expectedAction);
  });

  it('action creator for redirect to route returns correct action', () => {
    const expectedAction = {
      type: ActionType.REDIRECT_TO_ROUTE,
      payload: '',
    };

    expect(redirectToRoute('')).toEqual(expectedAction);
  });

  it('action creator for start loading status returns correct action', () => {
    const LOADING_STATE = 'isOfferLoading';
    const expectedAction = {
      type: ActionType.START_LOADING_STATUS,
      payload: LOADING_STATE,
    };

    expect(startLoadingStatus(LOADING_STATE)).toEqual(expectedAction);
  });

  it('action creator for load favorites returns correct action', () => {
    const expectedAction = {
      type: ActionType.LOAD_FAVORITES,
      payload: offers,
    };

    expect(loadFavorites(offers)).toEqual(expectedAction);
  });

  it('action creator for update offers returns correct action', () => {
    const expectedAction = {
      type: ActionType.UPDATE_OFFERS,
      payload: offer,
    };

    expect(updateOffers(offer)).toEqual(expectedAction);
  })

  it('action creator for add user email returns correct action', () => {
    const expectedAction = {
      type: ActionType.ADD_USER_EMAIL,
      payload: '',
    };

    expect(addUserEmail('')).toEqual(expectedAction);
  });
});
