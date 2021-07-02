import PropTypes from 'prop-types';
import {cities} from '../../const';

export default PropTypes.oneOf(cities).isRequired;
