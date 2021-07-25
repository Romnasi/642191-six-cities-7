import React from 'react';
import ReviewForm from '../review-form/review-form';
import {convertRating} from '../../utils/utils';
import {getDatetime, getMonthAndYear} from '../../utils/date';
import {sortByDateDown} from '../../utils/sort';
import reviewProp from '../reviews/review.prop';
import PropTypes from 'prop-types';
import {AuthorizationStatus} from '../../const';


function Reviews({reviews, authorizationStatus}) {
  const reviewAmount = reviews.length;
  const reviewForSort = [...reviews];
  const sortedReviews = reviewForSort.sort(sortByDateDown);

  const reviewItems = sortedReviews.map((review) => {
    const {comment, date, id, rating, user: {name, avatarUrl}} = review;
    const ratingWidth = convertRating(rating);

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
  });


  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviewAmount}</span></h2>
      <ul className="reviews__list">
        {reviewItems}
      </ul>

      {authorizationStatus === AuthorizationStatus.AUTH && <ReviewForm/>}

    </section>
  );
}

Reviews.propTypes = {
  reviews: reviewProp,
  authorizationStatus: PropTypes.string.isRequired,
};

export default Reviews;
