import React from 'react';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';
import {connect} from 'react-redux';
// import {ActionCreator} from '../../store/action';
import PropTypes from 'prop-types';
import {closeSession} from '../../store/action';


function SignOutLink({logout}) {
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

const mapDispatchToProps = (dispatch) => ({
  logout() {
    dispatch(closeSession());
  },
});

SignOutLink.propTypes = {
  logout: PropTypes.func.isRequired,
};

export {SignOutLink};
export default connect(null, mapDispatchToProps)(SignOutLink);
