import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';


function ProfileLink({isLoggedIn}) {
  return (
    <a className="header__nav-link header__nav-link--profile" href="#">
      <div className="header__avatar-wrapper user__avatar-wrapper">
      </div>
      {isLoggedIn
        ? <Link className="header__user-name user__name" to={AppRoute.FAVORITES}>Oliver.conner@gmail.com</Link>
        : <Link className="header__login" to={AppRoute.LOGIN}>Sign in</Link>}
    </a>
  );
}

ProfileLink.propTypes = {
  isLoggedIn: PropTypes.bool,
};

export default ProfileLink;
