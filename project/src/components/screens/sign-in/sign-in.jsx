import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../header/header';
import {connect} from 'react-redux';
import {login} from '../../../store/api-actions';
import {AppRoute, AuthorizationStatus} from '../../../const';
import {Link, Redirect} from 'react-router-dom';
import currentCityProp from '../../city-list/current-city.prop';
import SignInForm from '../../sign-in-form/sign-in-form';


function SignIn ({onSubmit, authorizationStatus, currentCity}) {
  if (authorizationStatus === AuthorizationStatus.AUTH) {
    return <Redirect to={AppRoute.ROOT} />;
  }

  return (
    <div className="page page--gray page--login">
      <Header />

      <main className="page__main page__main--login">
        <div className="page__login-container container">

          <section className="login">
            <h1 className="login__title">Sign in</h1>

            <SignInForm onSubmit={onSubmit} />

          </section>

          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to={AppRoute.ROOT}>
                <span>{currentCity}</span>
              </Link>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}

SignIn.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  currentCity: currentCityProp,
};

const mapDispatchToProps = (dispatch) => ({
  onSubmit(authData) {
    return dispatch(login(authData));
  },
});

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus,
  currentCity: state.currentCity,
});


export {SignIn};
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
