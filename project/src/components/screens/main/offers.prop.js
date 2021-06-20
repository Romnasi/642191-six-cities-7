import PropTypes from 'prop-types';
import {placeTypes} from '../../../const';
import hostProp from '../../host/host.prop';

export default PropTypes.arrayOf(
  PropTypes.shape({
    bedrooms: PropTypes.number.isRequired,
    city: PropTypes.shape({
      location: PropTypes.shape({
        latitude:  PropTypes.number.isRequired,
        longitude:  PropTypes.number.isRequired,
        zoom:  PropTypes.number.isRequired,
      }).isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
    description: PropTypes.string.isRequired,
    goods: PropTypes.array.isRequired,
    host: hostProp,
    id: PropTypes.number.isRequired,
    images: PropTypes.array.isRequired,
    isFavorite: PropTypes.bool.isRequired,
    isPremium: PropTypes.bool.isRequired,
    location: PropTypes.shape({
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired8,
      zoom: PropTypes.number.isRequired,
    }).isRequired,
    maxAdults: PropTypes.number.isRequired,
    previewImage: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.oneOf(placeTypes).isRequired,
  })).isRequired;

