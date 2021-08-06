import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../services/api';
import {ActionType} from './action';
import {
  checkAuth,
  fetchComments,
  fetchFavorites,
  fetchNearby,
  fetchOfferData,
  fetchOffersList,
  login, logout,
  postComment, postFavorite
} from './api-actions';
import {APIRoute, AppRoute, AuthorizationStatus, Screen} from '../const';
import {adaptCommentToClient, adaptOfferToClient} from '../utils/adapter';

const offer = {
  bedrooms: 3,
  city: {
    location: {
      latitude: 52.370216,
      longitude: 4.895168,
      zoom: 10,
    },
    name: "Amsterdam",
  },
  description: "A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.",
  goods: ["Heating", "Kitchen", "Cable TV", "Washing machine", "Coffee machine", "Dishwasher"],
  host: {
    avatar_url: "img/1.png",
    id: 3,
    is_pro: true,
    name: "Angelina",
  },
  id: 1,
  images: ["img/1.png", "img/2.png"],
  is_favorite: false,
  is_premium: false,
  location: {
    latitude: 52.35514938496378,
    longitude: 4.673877537499948,
    zoom: 8,
  },
  max_adults: 4,
  preview_image: "img/1.png",
  price: 120,
  rating: 4.8,
  title: "Beautiful & luxurious studio at great location",
  type: "apartment",
};

const offers = [offer, offer];

const comment = {
  comment: "A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.",
  date: "2019-05-08T14:13:56.569Z",
  id: 1,
  rating: 4,
  user: {
    avatar_url: "img/1.png",
    id: 4,
    is_pro: false,
    name: "Max",
  }
};

const comments = [comment, comment];

let api = null;

describe('Async operations', () => {
  beforeAll(() => {
    api = createAPI(() => {});
  });

  it('should make a correct API call to GET /login', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const checkAuthLoader = checkAuth();
    const email = 'romnasi@gmail.com'

    apiMock
      .onGet(APIRoute.LOGIN)
      .reply(200, {id: 1, email});

    return checkAuthLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.ADD_USER_EMAIL,
          payload: email,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.REQUIRED_AUTHORIZATION,
          payload: AuthorizationStatus.AUTH,
        });
      });
  });

  it('should make a correct API call to POST /login', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const email = 'test@test,ru';
    const fakeUser = {login: email, password: '123456'};
    const loginLoader = login(fakeUser);

    apiMock
      .onPost(APIRoute.LOGIN)
      .reply(200, [{fake: true}]);

    return loginLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.ADD_USER_EMAIL,
          payload: email,
        });

        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.REQUIRED_AUTHORIZATION,
          payload: AuthorizationStatus.AUTH,
        });

        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: ActionType.REDIRECT_TO_ROUTE,
          payload: AppRoute.ROOT,
        });
      });
  });

  it('should make a correct API call to GET /hotels', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fetchOffersListLoader = fetchOffersList();

    apiMock
      .onGet(APIRoute.HOTELS)
      .reply(200, offers);

    return fetchOffersListLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_OFFERS,
          payload: offers.map(adaptOfferToClient),
        });
      });
  });

  it('should make a correct API call to GET /hotels/:id/nearby', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const id = 1;
    const fetchNearbyLoader = fetchNearby(id);

    apiMock
      .onGet(`${APIRoute.HOTELS}/${id}/nearby`)
      .reply(200, offers);

    return fetchNearbyLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_NEARBY,
          payload: offers.map(adaptOfferToClient),
        });
      });
  });

  it('should make a correct API call to GET /comments/:id', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const id = 1;
    const fetchCommentsLoader = fetchComments(id);

    apiMock
      .onGet(`${APIRoute.COMMENTS}/${id}`)
      .reply(200, comments);

    return fetchCommentsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_COMMENTS,
          payload: comments.map(adaptCommentToClient),
        });
      });
  });

  it('should make a correct API call to GET /favorites', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fetchFavoritesListLoader = fetchFavorites();

    apiMock
      .onGet(APIRoute.FAVORITE)
      .reply(200, offers);

    return fetchFavoritesListLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_FAVORITES,
          payload: offers.map(adaptOfferToClient),
        });
      });
  });

  it('should make a correct API call to GET /hotels/:id', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const id = 1;
    const fetchOfferDataLoader = fetchOfferData(id);

    apiMock
      .onGet(`${APIRoute.HOTELS}/${id}`)
      .reply(200, offer);

    return fetchOfferDataLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_OFFER,
          payload: adaptOfferToClient(offer),
        });
      });
  });

  it('should make a correct API call to POST /comments/:id', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const id = 1;
    const commentPost = {
      comment: "A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.",
      rating: 4
    };
    const postCommentLoader = postComment(id, commentPost);

    apiMock
      .onPost(`${APIRoute.COMMENTS}/${id}`)
      .reply(200, comments);

    return postCommentLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toBeCalledTimes(1);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_COMMENTS,
          payload: comments.map(adaptCommentToClient),
        });
      });
  });

  it('should make a correct API call to POST /favorite/:id/:favoriteStatus',
    () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const id = 1;
    const favoriteStatus = 1;
    const screen = Screen.OFFER;
    const postFavoriteLoader = postFavorite(id, favoriteStatus, screen);

    apiMock
      .onPost(`${APIRoute.FAVORITE}/${id}/${favoriteStatus}`)
      .reply(200, offer);

    return postFavoriteLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.UPDATE_OFFERS,
          payload: {
            offer: adaptOfferToClient(offer),
            screen: Screen.OFFER,
          },
        });
      });
  });

  it('should make a correct API call to DELETE /logout', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const logoutLoader = logout();

    apiMock
      .onDelete(APIRoute.LOGOUT)
      .reply(200);

    return logoutLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toBeCalledTimes(2);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOGOUT,
        });

        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.ADD_USER_EMAIL,
          payload: "",
        });
      });
  });
});
