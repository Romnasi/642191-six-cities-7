import React, {useRef, useEffect} from 'react';
import leaflet from 'leaflet';
import offerProp from '../screens/main/offers.prop';
import useMap from './useMap';

import 'leaflet/dist/leaflet.css';
import pointProp from './point.prop';


function Map({currentOffers, selectedPoint}) {
  const city = currentOffers[0].city.location;
  const points = currentOffers.map(({location}) => location);


  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  const defaultCustomIcom = leaflet.icon({
    iconUrl: 'img/pin.svg',
    iconSize: [27, 35],
    iconAnchor: [13.5, 35],
  });

  const currentCustomIcon = leaflet.icon({
    iconUrl: 'img/pin-active.svg',
    iconSize: [27, 35],
    iconAnchor: [13.5, 35],
  });

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
  }, [map, points]);

  return (
    <section
      id="map"
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
