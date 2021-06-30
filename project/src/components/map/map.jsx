import React, {useRef, useEffect} from 'react';
import leaflet from 'leaflet';
import useMap from './use-map';
import {defaultCustomIcom, currentCustomIcon} from '../../const';
import offerProp from '../screens/main/offers.prop';
import pointProp from './point.prop';
import PropTypes from 'prop-types';

import 'leaflet/dist/leaflet.css';


const ScreenClass = {
  MAIN: 'cities__map',
  OFFER: 'property__map',
};

const MapSize = {
  MAIN: '100%',
  OFFER: '579px',
};


const getIcon = (point, selectedPoint) => {
  if (!selectedPoint) {
    return defaultCustomIcom;
  }

  return (point.latitude === selectedPoint.latitude
    && point.longitude === selectedPoint.longitude)
    ? currentCustomIcon
    : defaultCustomIcom;
};


function Map({currentOffers, selectedPoint, cardType}) {
  const city = currentOffers[0].city.location;
  const points = currentOffers.map(({location}) => location);

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);


  useEffect(() => {
    const pointLayer = leaflet.layerGroup();
    if (map) {
      points.forEach((point) => {
        pointLayer
          .addLayer(leaflet.marker({
            lat: point.latitude,
            lng: point.longitude,
          }, {
            icon: getIcon(point, selectedPoint),
          }))
          .addTo(map);
      });
    }
    return () => {
      pointLayer.clearLayers();
    };
  }, [map, points, selectedPoint]);


  return (
    <section
      ref={mapRef}
      className={`${ScreenClass[cardType]} map`}
      style={{height: `${MapSize[cardType]}`}}
    />
  );
}


Map.propTypes = {
  currentOffers: offerProp,
  selectedPoint: pointProp,
  cardType: PropTypes.string.isRequired,
};


export default Map;
