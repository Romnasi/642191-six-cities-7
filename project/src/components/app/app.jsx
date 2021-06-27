import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {AppRoute} from '../../const';
import Main from '../screens/main/main';
import SignIn from '../screens/sign-in/sign-in';
import Favorites from '../screens/favorites/favorites';
import Offer from '../screens/offer/offer';
import NotFoundScreen from '../screens/not-found-screen/not-found-screen';
import offerProp from '../screens/main/offers.prop';
import reviewProp from '../reviews/review.prop';


function App(props) {
  const {offers, reviews} = props;

  const favoritesCards = offers.filter(({isFavorite}) => isFavorite);
  const nearPlaces = offers.slice(0, 3);


  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          <Main
            offers={offers}
          />
        </Route>

        <Route exact path={AppRoute.LOGIN}>
          <SignIn />
        </Route>

        <Route exact path={AppRoute.FAVORITES}>
          <Favorites
            offers={favoritesCards}
          />
        </Route >

        <Route exact path={AppRoute.OFFER} >
          <Offer
            offers={offers}
            nearPlaces={nearPlaces}
            reviews={reviews}
          />
        </Route>

        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  offers: offerProp,
  reviews: reviewProp,
};

export default App;
