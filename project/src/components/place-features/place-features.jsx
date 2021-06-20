import React from 'react';
import PropTypes from 'prop-types';
import {placeTypes} from '../../const';
import {convertRating, capitalizeFirstLetter} from '../../utils/utils';


function PlaceFeatures({
  isPremium,
  title,
  rating,
  isFavorite,
  type,
  bedrooms,
  maxAdults,
  price,
}) {
  const ratingWidth = convertRating(rating);
  const typeWithCapitalLetter = capitalizeFirstLetter(type);

  return (
    <>
      {isPremium && <div className="property__mark"><span>Premium</span></div>}

      <div className="property__name-wrapper">
        <h1 className="property__name">
          {title}
        </h1>
        <button
          className={`property__bookmark-button ${isFavorite ? 'property__bookmark-button--active' : ''} button`}
          type="button"
        >
          <svg className="property__bookmark-icon" width="31" height="33">
            <use xlinkHref="#icon-bookmark" />
          </svg>
          <span className="visually-hidden">{isFavorite ? 'In bookmarks' : 'To bookmarks'}</span>
        </button>
      </div>
      <div className="property__rating rating">
        <div className="property__stars rating__stars">
          <span
            style={{
              width: `${ratingWidth}%`,
            }}
          />
          <span className="visually-hidden">Rating</span>
        </div>
        <span className="property__rating-value rating__value">{`${rating}`}</span>
      </div>
      <ul className="property__features">
        <li className="property__feature property__feature--entire">
          {typeWithCapitalLetter}
        </li>
        <li className="property__feature property__feature--bedrooms">
          {bedrooms} Bedrooms
        </li>
        <li className="property__feature property__feature--adults">
          Max {maxAdults} adults
        </li>
      </ul>
      <div className="property__price">
        <b className="property__price-value">&euro;{price}</b>
        <span className="property__price-text">&nbsp;night</span>
      </div>
    </>
  );
}


PlaceFeatures.propTypes = {
  isPremium: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  type: PropTypes.oneOf(placeTypes).isRequired,
  bedrooms: PropTypes.number.isRequired,
  maxAdults: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
};


export default PlaceFeatures;
