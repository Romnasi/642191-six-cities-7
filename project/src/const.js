import leaflet from 'leaflet';

export const AppRoute = {
  ROOT: '/',
  LOGIN: '/login',
  FAVORITES: '/favorites',
  OFFER: '/offer/:id',
  NOT_FOUND: '/404',
};


export const placeTypes = ['apartment', 'room', 'house', 'hotel'];
export const cities = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

export const Screen = {
  MAIN: 'MAIN',
  FAVORITES: 'FAVORITES',
  OFFER: 'OFFER',
  CURRENT_OFFER: 'CURRENT_OFFER',
};


const MapMarker = {
  DEFAULT_URL: 'img/pin.svg',
  CURRENT_URL: 'img/pin-active.svg',
  ICON_SIZE: [27, 35],
  ICON_ANCHOR: [13.5, 35],
};


export const defaultCustomIcon = leaflet.icon({
  iconUrl: MapMarker.DEFAULT_URL,
  iconSize: MapMarker.ICON_SIZE,
  iconAnchor: MapMarker.ICON_ANCHOR,
});


export const currentCustomIcon = leaflet.icon({
  iconUrl: MapMarker.CURRENT_URL,
  iconSize: MapMarker.ICON_SIZE,
  iconAnchor: MapMarker.ICON_ANCHOR,
});


export const Sorter = {
  POPULAR: {
    ID: 'popular',
    LABEL: 'Popular',
  },
  LOW_TO_HIGH: {
    ID: 'price-low-to-high',
    LABEL: 'Price: low to high',
  },
  HIGH_TO_LOW: {
    ID: 'price-high-to-low',
    LABEL: 'Price: high to low',
  },
  TOP_RATED_FIRST: {
    ID: 'top-rated-first',
    LABEL: 'Top rated first',
  },
};


export const AuthorizationStatus = {
  AUTH: 'AUTH',
  NO_AUTH: 'NO_AUTH',
  UNKNOWN: 'UNKNOWN',
};


export const APIRoute = {
  HOTELS: '/hotels',
  LOGIN: '/login',
  LOGOUT: '/logout',
  COMMENTS: '/comments',
  FAVORITE: '/favorite',
};


export const ScreenClass = {
  ARTICLE: {
    MAIN: 'cities__place-card',
    FAVORITES: 'favorites__card',
    OFFER: 'near-places__card',
  },
  IMAGE_WRAPPER: {
    MAIN: 'cities__image-wrapper',
    FAVORITES: 'favorites__image-wrapper',
    OFFER: 'near-places__image-wrapper',
  },
};

export const Preview = {
  WIDTH: {
    MAIN: 260,
    FAVORITES: 150,
    OFFER: 260,
  },
  HEIGHT: {
    MAIN: 200,
    FAVORITES: 110,
    OFFER: 200,
  },
};


export const BlockClass = {
  MAIN: 'place-card',
  OFFER: 'place-card',
  CURRENT_OFFER: 'property',
  FAVORITES: 'place-card',
};


const SmallIcon = {
  WIDTH: 18,
  HEIGHT: 19,
};

const BigIcon = {
  WIDTH: 31,
  HEIGHT: 33,
};

export const FavoriteIcon = {
  MAIN: SmallIcon,
  OFFER: SmallIcon,
  CURRENT_OFFER: BigIcon,
  FAVORITES: SmallIcon,
};

export const LOADING_STATE = {
  OFFER: 'isOfferLoading',
  NEARBY: 'isNearbyLoading',
  COMMENTS: 'isCommentsLoading',
};

export const HttpCode = {
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
};
