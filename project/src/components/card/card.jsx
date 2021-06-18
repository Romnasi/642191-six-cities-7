import React from 'react';
import {cardDataPropTypes} from '../../const';

const Rating = {
  MAX_STYLE_VALUE: 100,
  MAX_DIGIT_VALUE: 5,
};

const ScreenClass = {
  ARTICLE: {
    MAIN: 'cities__place-card',
    FAVORITES: 'favorites__card',
    OFFER: 'near-places__card',
  },
  IMAGE_WRAPPER: {
    MAIN: 'cities__image-wrapper',
    FAVORITES: 'favorites__image-wrapper',
    OFFER: 'near-places__image-wrapper',
  },
};

const Preview = {
  WIDTH: {
    MAIN: 260,
    FAVORITES: 150,
    OFFER: 260,
  },
  HEIGHT: {
    MAIN: 200,
    FAVORITES: 110,
    OFFER: 200,
  },
};


function Card({cardType, title, type, price, previewImage, isPremium, isFavorite, rating}) {
  const convertedRating = Rating.MAX_STYLE_VALUE / Rating.MAX_DIGIT_VALUE * rating;

  return (
    <article className={`${ScreenClass.ARTICLE[cardType]} place-card`}>
      {
        cardType === 'MAIN'
        && isPremium
        && <div className="place-card__mark"><span>Premium</span></div>
      }
      <div className={`${ScreenClass.IMAGE_WRAPPER[cardType]} place-card__image-wrapper`}>
        <a href="#">
          <img className="place-card__image" src={`img/${previewImage}`} width={Preview.WIDTH[cardType]} height={Preview.HEIGHT[cardType]} alt="Place" />
        </a>
      </div>
      <div className={cardType === 'FAVORITES'
        ? 'favorites__card-info place-card__info'
        : 'place-card__info'}
      >
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button ${isFavorite ? 'place-card__bookmark-button--active' : ''} button`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"/>
            </svg>
            <span className="visually-hidden">{isFavorite ? 'In bookmarks' : 'To bookmarks'}</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span
              style={{
                width: `${convertedRating}%`,
              }}
            />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{title}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}


Card.propTypes = cardDataPropTypes;


export default Card;
