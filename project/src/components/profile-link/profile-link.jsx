import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';
import {useSelector} from 'react-redux';
import {getUserEmail} from '../../store/user/selectors';


function ProfileLink({isLoggedIn}) {
  const userEmail = useSelector(getUserEmail);

  return (
    <Link className="header__nav-link header__nav-link--profile" to={isLoggedIn ? AppRoute.FAVORITES : AppRoute.LOGIN}>
      <div className="header__avatar-wrapper user__avatar-wrapper">
      </div>
      {isLoggedIn
        ? <span className="header__user-name user__name">{userEmail}</span>
        : <span className="header__login">Sign in</span>}
    </Link>
  );
}

ProfileLink.propTypes = {
  isLoggedIn: PropTypes.bool,
};

export default ProfileLink;
