import React from 'react';
import PropTypes from 'prop-types';


function ProfileLink({isLoggedIn}) {
  return (
    <a className="header__nav-link header__nav-link--profile" href="#">
      <div className="header__avatar-wrapper user__avatar-wrapper">
      </div>
      {isLoggedIn
        ? <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
        : <span className="header__login">Sign in</span>}
    </a>
  );
}

ProfileLink.propTypes = {
  isLoggedIn: PropTypes.bool,
};

export default ProfileLink;
