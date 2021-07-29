import React, {useCallback, useEffect} from 'react';
import Header from '../../header/header';
import Footer from '../../footer/footer';
import FavoritesList from '../../favorites-list/favorites-list';
import FavoritesEmpty from '../../favorites-empty/favorites-empty';
import {fetchFavorites} from '../../../store/api-actions';
import {useDispatch, useSelector} from 'react-redux';
import {getDataLoadedStatus, getFavoriteLoadingStatus, getFavorites, getOffers} from '../../../store/data/selectors';
import LoadingScreen from '../../loading-screen/loading-screen';
import {getSortedByCitiesData} from '../../../utils/sort';


function Favorites () {
  const isDataLoaded = useSelector(getDataLoadedStatus);
  const isFavoriteLoading = useSelector(getFavoriteLoadingStatus);
  let favoriteOffers = useSelector(getFavorites);
  const offers = useSelector(getOffers);

  const dispatch = useDispatch();

  const fetchFavorite = useCallback(() => dispatch(fetchFavorites()), [dispatch]);

  useEffect(() => {
    if (!isDataLoaded) {
      fetchFavorite();
    }
  }, [fetchFavorite]);


  if (!isDataLoaded && isFavoriteLoading) {
    return <LoadingScreen />;
  }

  if (isDataLoaded) {
    favoriteOffers = offers.filter(({isFavorite}) => isFavorite);
  }

  const isEmpty = favoriteOffers.length < 1;
  const sortByCitiesData = getSortedByCitiesData(favoriteOffers);


  return (
    <div className={`page ${isEmpty && 'page--favorites-empty'}`} >
      <Header />

      <main
        className={`page__main page__main--favorites ${isEmpty && 'page__main--favorites-empty'}`}
      >
        <div className="page__favorites-container container">

          {isEmpty
            ?
            <FavoritesEmpty />
            :
            <FavoritesList
              sortByCitiesData={sortByCitiesData}
            />}
        </div>
      </main>
      <Footer />
    </div>
  );
}


export default Favorites;
