import React from 'react';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';
import {useDispatch} from 'react-redux';
import {logout} from '../../store/api-actions';


function SignOutLink(props) {
  const dispatch = useDispatch();

  const handleLogoutBtn = () => {
    dispatch(logout());
  };

  return (
    <Link
      className="header__nav-link"
      onClick={(evt) => {
        evt.preventDefault();
        handleLogoutBtn();
      }}
      to={AppRoute.ROOT}
    >
      <span className="header__signout">Sign out</span>
    </Link>
  );
}

export default SignOutLink;
