import React from 'react';
import {Switch, Route, Router as BrowserRouter} from 'react-router-dom';
import {AppRoute} from '../../const';
import Main from '../screens/main/main';
import SignIn from '../screens/sign-in/sign-in';
import Favorites from '../screens/favorites/favorites';
import Offer from '../screens/offer/offer';
import NotFoundScreen from '../screens/not-found-screen/not-found-screen';
import {useSelector} from 'react-redux';
import LoadingScreen from '../loading-screen/loading-screen';
import {isUnknownAuth} from '../../utils/utils';
import PrivateRoute from '../private-route/private-route';
import browserHistory from '../../browser-history';
import {getAuthorizationStatus} from '../../store/user/selectors';


function App(props) {
  const authorizationStatus = useSelector(getAuthorizationStatus);

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

export default App;
