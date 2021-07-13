import React, {useEffect, useState} from 'react';
import offerProp from '../main/offers.prop';
import currentCityProp from '../../city-list/current-city.prop';
import PropTypes from 'prop-types';
import Header from '../../header/header';
import {connect} from 'react-redux';
import {ActionCreator} from '../../../store/action';
import CityList from '../../city-list/city-list';
import MainContent from '../../main-content/main-content';
import MainEmpty from '../../main-empty/main-empty';
import {fetchOffersList} from '../../../store/api-actions';
import LoadingScreen from '../../loading-screen/loading-screen';


function Main({offers, currentCity, changeCity, fetchOffers, isDataLoaded}) {
  const [selectedPoint, setSelectedPoint] = useState({});

  useEffect(() => {
    fetchOffers();
  }, [fetchOffers]);


  if (!isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  const currentOffers = offers
    .filter(({city: { name }}) => name === currentCity);

  const offersCount = currentOffers.length;
  const isEmpty = offersCount < 1;

  const onListItemHover = (id) => {
    const currentPoint = offers.find((offer) => offer.id === id).location;
    setSelectedPoint(currentPoint);
  };

  return (
    <div className="page page--gray page--main">
      <Header isMainScreen />

      <main className={`page__main page__main--index ${isEmpty && 'page__main--index-empty'}`}>

        <CityList
          currentCity={currentCity}
          changeCity={changeCity}
        />

        <div className="cities">
          {
            isEmpty
              ?
              <MainEmpty
                currentCity={currentCity}
              />
              :
              <MainContent
                offersCount={offersCount}
                currentCity={currentCity}
                currentOffers={currentOffers}
                selectedPoint={selectedPoint}
                onListItemHover={onListItemHover}
              />
          }
        </div>
      </main>

    </div>
  );
}

Main.propTypes = {
  fetchOffers: PropTypes.func.isRequired,
  offers: offerProp,
  changeCity: PropTypes.func.isRequired,
  currentCity: currentCityProp,
  isDataLoaded: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  offers: state.offers,
  currentCity: state.currentCity,
  isDataLoaded: state.isDataLoaded,
});


const mapDispatchToProps = (dispatch) => ({
  changeCity(city) {
    dispatch(ActionCreator.changeCity(city));
  },
  fetchOffers(){
    dispatch(fetchOffersList());
  },
});

export {Main};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
