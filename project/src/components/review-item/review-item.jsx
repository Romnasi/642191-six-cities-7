import React from 'react';
import {getDatetime, getMonthAndYear} from '../../utils/date';
import PropTypes from 'prop-types';

function ReviewItem({id, avatarUrl, ratingWidth, comment, date, name}) {
  return (
    <li key={id} className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            alt="Reviews avatar"
            src={avatarUrl}
          />
        </div>
        <span className="reviews__user-name">{name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span
              style={{width: `${ratingWidth}%`}}
            />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">{comment}</p>
        <time
          className="reviews__time"
          dateTime={getDatetime(date)}
        >
          {getMonthAndYear(date)}
        </time>
      </div>
    </li>
  );
}

ReviewItem.propTypes = {
  id: PropTypes.number.isRequired,
  avatarUrl: PropTypes.string.isRequired,
  ratingWidth: PropTypes.number.isRequired,
  comment: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default ReviewItem;
