import React from 'react';
import PropTypes from 'prop-types';
import {placeTypes, Screen} from '../../const';
import {convertRating} from '../../utils/utils';
import {Link} from 'react-router-dom';
import BookmarkButton from '../bookmark-button/bookmark-button';
import {ScreenClass, Preview} from '../../const';


function Card({
  cardType, title, type, price, previewImage, isPremium, rating, id, isFavorite,
  onListItemHover = () => {},
}) {

  const ratingWidth = convertRating(rating);

  const handleCardMouseOver = () => {
    onListItemHover(id);
  };


  return (
    <article
      className={`${ScreenClass.ARTICLE[cardType]} place-card`}
      onMouseEnter={handleCardMouseOver}
    >
      {
        cardType === Screen.MAIN
        && isPremium
        && <div className="place-card__mark"><span>Premium</span></div>
      }
      <div className={`${ScreenClass.IMAGE_WRAPPER[cardType]} place-card__image-wrapper`}>
        <Link to={`/offer/${id}`}>
          <img
            className="place-card__image"
            src={`${previewImage}`}
            width={Preview.WIDTH[cardType]}
            height={Preview.HEIGHT[cardType]}
            alt="Place"
          />
        </Link>
      </div>
      <div className={cardType === Screen.FAVORITES
        ? 'favorites__card-info place-card__info'
        : 'place-card__info'}
      >
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>

          <BookmarkButton
            id={id}
            isFavorite={isFavorite}
            screen={cardType}
          />

        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span
              style={{
                width: `${ratingWidth}%`,
              }}
            />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}


Card.propTypes = {
  cardType: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.oneOf(placeTypes).isRequired,
  price: PropTypes.number.isRequired,
  previewImage: PropTypes.string.isRequired,
  isPremium: PropTypes.bool.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  rating: PropTypes.number.isRequired,
  onListItemHover: PropTypes.func,
  id: PropTypes.number,
};

export default Card;
