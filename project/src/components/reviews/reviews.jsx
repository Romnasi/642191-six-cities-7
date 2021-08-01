import React from 'react';
import ReviewForm from '../review-form/review-form';
import {convertRating} from '../../utils/utils';
import {sortByDateDown} from '../../utils/sort';
import reviewProp from '../reviews/review.prop';
import PropTypes from 'prop-types';
import {AuthorizationStatus} from '../../const';
import ReviewItem from '../review-item/review-item';

const MAX_VISIBLE_REVIEWS = 10;

function Reviews({reviews, authorizationStatus}) {
  let visibleReviews;
  const reviewAmount = reviews.length;
  const reviewForSort = [...reviews];
  const sortedReviews = reviewForSort.sort(sortByDateDown);

  if (reviewAmount > MAX_VISIBLE_REVIEWS) {
    const startVisibleReviews = reviewAmount - MAX_VISIBLE_REVIEWS;
    visibleReviews = sortedReviews.slice(startVisibleReviews);
  } else {
    visibleReviews = sortedReviews;
  }

  const reviewItems = visibleReviews.map((review) => {
    const {comment, date, id, rating, user: {name, avatarUrl}} = review;
    const ratingWidth = convertRating(rating);

    return (
      <ReviewItem
        key={`${id}-${date}`}
        id={id}
        avatarUrl={avatarUrl}
        ratingWidth={ratingWidth}
        comment={comment}
        date={date}
        name={name}
      />
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
