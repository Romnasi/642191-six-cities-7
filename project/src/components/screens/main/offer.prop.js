import PropTypes from 'prop-types';
import pointProp from '../../map/point.prop';
import goodsProp from '../../amenities/goods.prop';
import hostProp from '../../host/host.prop';
import imagesProp from '../../gallery/images.prop';
import {placeTypes} from '../../../const';

export default PropTypes.shape({
  bedrooms: PropTypes.number.isRequired,
  city: PropTypes.shape({
    location: pointProp,
    name: PropTypes.string.isRequired,
  }).isRequired,
  description: PropTypes.string.isRequired,
  goods: goodsProp,
  host: hostProp,
  id: PropTypes.number.isRequired,
  images: imagesProp,
  isFavorite: PropTypes.bool.isRequired,
  isPremium: PropTypes.bool.isRequired,
  location: pointProp,
  maxAdults: PropTypes.number.isRequired,
  previewImage: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.oneOf(placeTypes).isRequired,
});
