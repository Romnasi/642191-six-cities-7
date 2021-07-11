import React from 'react';
import Header from '../../header/header';
import offerProp from '../../screens/main/offers.prop';
import Footer from '../../footer/footer';
import FavoritesList from '../../favorites-list/favorites-list';
import FavoritesEmpty from '../../favorites-empty/favorites-empty';


function Favorites ({offers}) {
  const offersCount = offers.length;
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
    <div
      className={
        `page ${offersCount === 0 && 'page--favorites-empty'}`
      }
    >
      <Header />

      <main
        className={
          `page__main page__main--favorites ${offersCount === 0 && 'page__main--favorites-empty'}`
        }
      >
        <div className="page__favorites-container container">

          {offersCount === 0
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


Favorites.propTypes = {
  offers: offerProp,
};


export default Favorites;
