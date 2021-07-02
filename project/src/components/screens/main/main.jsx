import React, {useState} from 'react';
import offerProp from '../main/offers.prop';
import PropTypes from 'prop-types';
import Header from '../../header/header';
import OfferList from '../../offer-list/offer-list';
import Map from '../../map/map';
import {Screen} from '../../../const';
import {connect} from 'react-redux';
import {ActionCreator} from '../../../store/action';
import CityList from '../../city-list/city-list';


function Main({offers, currentCity, changeCity}) {
  const [selectedPoint, setSelectedPoint] = useState({});

  const currentOffers = offers
    .filter(({city: { name }}) => name === currentCity);

  const offersCount = currentOffers.length;

  const onListItemHover = (id) => {
    const currentPoint = offers.find((offer) => offer.id === id).location;
    setSelectedPoint(currentPoint);
  };

  return (
    <div className="page page--gray page--main">
      <Header isMainScreen isLoggedIn />

      <main className="page__main page__main--index">

        <CityList
          currentCity={currentCity}
          changeCity={changeCity}
        />

        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{`${offersCount} places to stay in ${currentCity}`}</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex="0">
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"/>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex="0">Popular</li>
                  <li className="places__option" tabIndex="0">Price: low to high</li>
                  <li className="places__option" tabIndex="0">Price: high to low</li>
                  <li className="places__option" tabIndex="0">Top rated first</li>
                </ul>
              </form>

              <OfferList
                currentOffers={currentOffers}
                onListItemHover={onListItemHover}
              />

            </section>
            <div className="cities__right-section">
              <Map
                currentOffers={currentOffers}
                selectedPoint={selectedPoint}
                cardType={Screen.MAIN}
              />
            </div>
          </div>
        </div>
      </main>

    </div>
  );
}

Main.propTypes = {
  offers: offerProp,
  changeCity: PropTypes.func.isRequired,
  currentCity: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  currentCity: state.currentCity,
});


const mapDispatchToProps = (dispatch) => ({
  changeCity(city) {
    dispatch(ActionCreator.changeCity(city));
  },
});

export {Main};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
