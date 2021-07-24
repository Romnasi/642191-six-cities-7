import React from 'react';
import offerProp from '../main/offers.prop';
import currentCityProp from '../../city-list/current-city.prop';
import PropTypes from 'prop-types';
import Header from '../../header/header';
import {connect} from 'react-redux';
import CityList from '../../city-list/city-list';
import MainContent from '../../main-content/main-content';
import MainEmpty from '../../main-empty/main-empty';
import {fetchOffersList} from '../../../store/api-actions';
import LoadingScreen from '../../loading-screen/loading-screen';
import useSelectedPoint from '../../../hooks/use-selected-point';
import useOffers from '../../../hooks/use-offers';
import {changeCity} from '../../../store/action';
import {getDataLoadedStatus, getOffers} from '../../../store/data/selectors';
import {getCurrentCity} from '../../../store/ui/selectors';


function Main({offers, currentCity, onChangeCity, fetchOffers, isDataLoaded}) {
  useOffers(fetchOffers);
  const [selectedPoint, onListItemHover] = useSelectedPoint(offers);

  if (!isDataLoaded) {
    return <LoadingScreen />;
  }

  const currentOffers = offers
    .filter(({city: { name }}) => name === currentCity);

  const offersCount = currentOffers.length;
  const isEmpty = offersCount < 1;

  return (
    <div className="page page--gray page--main">
      <Header isMainScreen />

      <main className={`page__main page__main--index ${isEmpty && 'page__main--index-empty'}`}>

        <CityList
          currentCity={currentCity}
          changeCity={onChangeCity}
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
  onChangeCity: PropTypes.func.isRequired,
  currentCity: currentCityProp,
  isDataLoaded: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  offers: getOffers(state),
  currentCity: getCurrentCity(state),
  isDataLoaded: getDataLoadedStatus(state),
});


const mapDispatchToProps = (dispatch) => ({
  onChangeCity(city) {
    dispatch(changeCity(city));
  },
  fetchOffers(){
    dispatch(fetchOffersList());
  },
});

export {Main};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
