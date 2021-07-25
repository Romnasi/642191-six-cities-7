import React from 'react';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';
import {useDispatch} from 'react-redux';
import {closeSession} from '../../store/action';


function SignOutLink(props) {
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(closeSession());
  };

  return (
    <Link
      className="header__nav-link"
      onClick={(evt) => {
        evt.preventDefault();
        logout();
      }}
      to={AppRoute.ROOT}
    >
      <span className="header__signout">Sign out</span>
    </Link>
  );
}

export default SignOutLink;
