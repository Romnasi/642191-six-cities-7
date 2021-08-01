import React, {useCallback} from 'react';
import Header from '../../header/header';
import {useSelector, useDispatch} from 'react-redux';
import CityList from '../../city-list/city-list';
import MainContent from '../../main-content/main-content';
import MainEmpty from '../../main-empty/main-empty';
import {fetchOffersList} from '../../../store/api-actions';
import LoadingScreen from '../../loading-screen/loading-screen';
import useSelectedPoint from '../../../hooks/use-selected-point';
import useOffers from '../../../hooks/use-offers';
import {changeCity} from '../../../store/action';
import {getCurrentOffers, getDataLoadedStatus} from '../../../store/data/selectors';
import {getCurrentCity} from '../../../store/ui/selectors';


function Main(props) {
  const currentCity = useSelector(getCurrentCity);
  const isDataLoaded = useSelector(getDataLoadedStatus);
  const currentOffers = useSelector(getCurrentOffers);
  const dispatch = useDispatch();

  const onChangeCity = useCallback((city) => dispatch(changeCity(city)), [dispatch]);
  const fetchOffers = useCallback(() => dispatch(fetchOffersList()), [dispatch]);


  useOffers(fetchOffers, isDataLoaded);
  const [selectedPoint, onListItemHover] = useSelectedPoint(currentOffers);

  if (!isDataLoaded) {
    return <LoadingScreen />;
  }

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

export default Main;
