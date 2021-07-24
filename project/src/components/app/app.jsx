import React from 'react';
import {Switch, Route, Router as BrowserRouter} from 'react-router-dom';
import {AppRoute} from '../../const';
import PropTypes from 'prop-types';
import Main from '../screens/main/main';
import SignIn from '../screens/sign-in/sign-in';
import Favorites from '../screens/favorites/favorites';
import Offer from '../screens/offer/offer';
import NotFoundScreen from '../screens/not-found-screen/not-found-screen';
import {connect} from 'react-redux';
import LoadingScreen from '../loading-screen/loading-screen';
import {isUnknownAuth} from '../../utils/utils';
import PrivateRoute from '../private-route/private-route';
import browserHistory from '../../browser-history';


function App({
  authorizationStatus,
}) {

  if (isUnknownAuth(authorizationStatus)) {
    return (
      <LoadingScreen />
    );
  }


  return (
    <BrowserRouter history={browserHistory}>
      <Switch>

        <Route exact path={AppRoute.ROOT}>
          <Main />
        </Route>

        <Route exact path={AppRoute.LOGIN}>
          <SignIn />
        </Route>

        <PrivateRoute
          authorizationStatus={authorizationStatus}
          exact
          path={AppRoute.FAVORITES}
          render={() => <Favorites />}
        >
        </PrivateRoute>

        <Route exact path={AppRoute.OFFER} >
          <Offer />
        </Route>

        <Route>
          <NotFoundScreen />
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
};

const mapStateToProps = ({USER, DATA}) => ({
  authorizationStatus: USER.authorizationStatus,
  isDataLoaded: DATA.isDataLoaded,
});

export {App};
export default connect(mapStateToProps, null)(App);
