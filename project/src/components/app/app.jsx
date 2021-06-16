import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {AppRoute} from '../../const';
import Main from '../screens/main/main';
import SignIn from '../screens/sign-in/sign-in';
import Favorites from '../screens/favorites/favorites';
import Room from '../screens/room/room';
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
          <Room cardData={cardData.slice(0, 3)} />
        </Route>
        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  cardData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      previewImage: PropTypes.string.isRequired,
      isPremium: PropTypes.bool.isRequired,
      isFavorite: PropTypes.bool.isRequired,
      rating: PropTypes.number.isRequired,
    })),
};

export default App;
