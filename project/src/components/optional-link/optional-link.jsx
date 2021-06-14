import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';


function OptionalLink({isMainScreen, to, ...other}) {
  return isMainScreen
    ? <a { ...other} />
    : <Link to={to} {...other} />;
}

OptionalLink.propTypes = {
  isMainScreen: PropTypes.bool,
  to: PropTypes.string.isRequired,
};

export default OptionalLink;
