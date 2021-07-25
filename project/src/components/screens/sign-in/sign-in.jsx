import React from 'react';
import Header from '../../header/header';
import {useSelector, useDispatch} from 'react-redux';
import {login} from '../../../store/api-actions';
import {AppRoute, AuthorizationStatus} from '../../../const';
import {Link, Redirect} from 'react-router-dom';
import SignInForm from '../../sign-in-form/sign-in-form';
import {getAuthorizationStatus} from '../../../store/user/selectors';
import {getCurrentCity} from '../../../store/ui/selectors';


function SignIn (props) {
  const authorizationStatus = useSelector(getAuthorizationStatus);
  const currentCity = useSelector(getCurrentCity);

  const dispatch = useDispatch();
  const onSubmit = (authData) => dispatch(login(authData));

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

export default SignIn;
