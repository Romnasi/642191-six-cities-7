import React, {useState} from 'react';

const grades = ['perfect', 'good', 'not bad', 'badly', 'terribly'];
const maxRate = grades.length;


function ReviewForm() {
  const [ratingData, setRatingData] = useState({
    comment: '',
    rating: 0,
  });

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">

        {grades.map((grade, i) => (
          <>
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              value={maxRate - i}
              id={`${maxRate - i}-stars`}
              type="radio"
              onChange={() => {
                setRatingData({
                  ...ratingData,
                  rating: maxRate - i,
                });
              }}
            />
            <label
              htmlFor={`${maxRate - i}-stars`}
              className="reviews__rating-label form__rating-label"
              title={grade}
            >
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star" />
              </svg>
            </label>
          </>
        ))}

      </div>

      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={({target}) => {
          const value = target.value;
          setRatingData({
            ...ratingData,
            comment: value,
          });
        }}
      />

      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and
          describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled="">Submit</button>
      </div>

    </form>
  );
}

export default ReviewForm;
