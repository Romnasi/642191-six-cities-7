import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {AppRoute, cardDataPropTypes} from '../../const';
import Main from '../screens/main/main';
import SignIn from '../screens/sign-in/sign-in';
import Favorites from '../screens/favorites/favorites';
import Offer from '../screens/offer/offer';
import NotFoundScreen from '../screens/not-found-screen/not-found-screen';


function App(props) {
  const {cardData} = props;
  const favoritesCards = cardData.filter(({isFavorite}) => isFavorite);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          <Main cardData={cardData} />
        </Route>
        <Route exact path={AppRoute.LOGIN}>
          <SignIn />
        </Route>
        <Route exact path={AppRoute.FAVORITES}>
          <Favorites cardData={favoritesCards} />
        </Route>
        <Route exact path={AppRoute.DEV_ROOM}>
          <Offer cardData={cardData.slice(0, 3)} />
        </Route>
        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = cardDataPropTypes;

export default App;
