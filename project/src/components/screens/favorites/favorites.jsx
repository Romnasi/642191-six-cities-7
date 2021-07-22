import React from 'react';
import Header from '../../header/header';
import Footer from '../../footer/footer';
import FavoritesList from '../../favorites-list/favorites-list';
import FavoritesEmpty from '../../favorites-empty/favorites-empty';


function Favorites () {
  const offers = [];
  const offersCount = offers.length;
  const isEmpty = offersCount === 0;
  const sortByCitiesData = Object.entries(offers.reduce((total, cityData) => {
    const {city: {name}} = cityData;

    if (!total[name]) {
      total[name] = [cityData];
    } else {
      total[name].push(cityData);
    }

    return total;
  }, {}));

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
