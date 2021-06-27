import React, {useRef, useEffect} from 'react';
import leaflet from 'leaflet';
import offerProp from '../screens/main/offers.prop';
import pointProp from './point.prop';

import useMap from './use-map';
import {MapMarker} from '../../const';

import 'leaflet/dist/leaflet.css';

const defaultCustomIcom = leaflet.icon({
  iconUrl: MapMarker.DEFAULT_URL,
  iconSize: MapMarker.ICON_SIZE,
  iconAnchor: MapMarker.ICON_ANCHOR,
});

const currentCustomIcon = leaflet.icon({
  iconUrl: MapMarker.CURRENT_URL,
  iconSize: MapMarker.ICON_SIZE,
  iconAnchor: MapMarker.ICON_ANCHOR,
});


function Map({currentOffers, selectedPoint}) {
  const city = currentOffers[0].city.location;
  const points = currentOffers.map(({location}) => location);

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);


  useEffect(() => {
    if (map) {
      points.forEach((point) => {
        leaflet
          .marker({
            lat: point.latitude,
            lng: point.longitude,
          }, {
            icon: (point.latitude === selectedPoint.latitude && point.longitude === selectedPoint.longitude)
              ? currentCustomIcon
              : defaultCustomIcom,
          })
          .addTo(map);
      });
    }
  }, [map, points, selectedPoint]);

  return (
    <section
      ref={mapRef}
      className="cities__map map"
      style={{height: '100%'}}
    />
  );
}

Map.propTypes = {
  currentOffers: offerProp,
  selectedPoint: pointProp,
};

export default Map;
