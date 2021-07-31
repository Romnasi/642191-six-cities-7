import PropTypes from 'prop-types';
import {Sorter} from '../../const';


export default PropTypes.oneOf(Object.values(Sorter).map(({ID}) => ID)).isRequired;
