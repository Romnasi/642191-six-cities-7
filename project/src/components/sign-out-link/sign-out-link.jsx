import React from 'react';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';


function SignOutLink() {
  return (
    <Link className="header__nav-link" href={AppRoute.ROOT}>
      <span className="header__signout">Sign out</span>
    </Link>
  );
}

export default SignOutLink;
