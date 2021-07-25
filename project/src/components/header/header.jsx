import React from 'react';
import Logo from '../logo/logo';
import ProfileLink from '../profile-link/profile-link';
import SignOutLink from '../sign-out-link/sign-out-link';
import {AuthorizationStatus} from '../../const';
import {useSelector} from 'react-redux';
import {getAuthorizationStatus} from '../../store/user/selectors';


function Header(props) {
  const authorizationStatus = useSelector(getAuthorizationStatus);
  const isLoggedIn = authorizationStatus === AuthorizationStatus.AUTH;

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo />
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <ProfileLink isLoggedIn={isLoggedIn} />
              </li>
              {isLoggedIn && <li className="header__nav-item"><SignOutLink /></li>}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
