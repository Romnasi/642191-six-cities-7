import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';


function ProfileLink({isLoggedIn}) {
  return (
    <Link className="header__nav-link header__nav-link--profile" to={isLoggedIn ? AppRoute.FAVORITES : AppRoute.LOGIN}>
      <div className="header__avatar-wrapper user__avatar-wrapper">
      </div>
      {isLoggedIn
        ? <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
        : <span className="header__login">Sign in</span>}
    </Link>
  );
}

ProfileLink.propTypes = {
  isLoggedIn: PropTypes.bool,
};

export default ProfileLink;
