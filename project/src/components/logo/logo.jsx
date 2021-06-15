import React from 'react';
import OptionalLink from '../optional-link/optional-link';
import PropTypes from 'prop-types';
import {AppRoute} from '../../const';


function Logo({isMainScreen}) {
  return (
    <OptionalLink className={'header__logo-link header__logo-link--active'} isMainScreen={isMainScreen} to={AppRoute.ROOT}>
      <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
    </ OptionalLink>
  );
}
Logo.propTypes = {
  isMainScreen: PropTypes.bool,
};


export default Logo;
