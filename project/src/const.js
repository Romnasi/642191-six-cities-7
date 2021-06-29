import leaflet from 'leaflet';

export const AppRoute = {
  ROOT: '/',
  LOGIN: '/login',
  FAVORITES: '/favorites',
  OFFER: '/offer/:id',
};


export const placeTypes = ['apartment', 'room', 'house', 'hotel'];

export const Screen = {
  MAIN: 'MAIN',
  FAVORITES: 'FAVORITES',
  OFFER: 'OFFER',
};


const MapMarker = {
  DEFAULT_URL: 'img/pin.svg',
  CURRENT_URL: 'img/pin-active.svg',
  ICON_SIZE: [27, 35],
  ICON_ANCHOR: [13.5, 35],
};


export const defaultCustomIcom = leaflet.icon({
  iconUrl: MapMarker.DEFAULT_URL,
  iconSize: MapMarker.ICON_SIZE,
  iconAnchor: MapMarker.ICON_ANCHOR,
});


export const currentCustomIcon = leaflet.icon({
  iconUrl: MapMarker.CURRENT_URL,
  iconSize: MapMarker.ICON_SIZE,
  iconAnchor: MapMarker.ICON_ANCHOR,
});
