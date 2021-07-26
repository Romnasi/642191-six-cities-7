import React from 'react';
import {postComment} from '../../store/api-actions';
import {useDispatch} from 'react-redux';
import useReviewInputs from '../../hooks/use-review-inputs';


const grades = ['perfect', 'good', 'not bad', 'badly', 'terribly'];
const maxRate = grades.length;


function ReviewForm(props) {
  const dispatch = useDispatch();

  const postUserComment = (id, {comment, rating}) => dispatch(postComment(id, {comment, rating}));

  const [isError400, isDisabled, formData, setFormData, onHandleSubmit] = useReviewInputs(postUserComment);


  return (
    <form
      onSubmit={
        (evt) => onHandleSubmit(evt)
      }
      className="reviews__form form"
      action="#"
      method="post"
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">

        {grades.map((grade, i) => {
          const rateIndex = maxRate - i;
          return (
            <React.Fragment key={`${grade}-key-${rateIndex}-stars`}>
              <input
                className="form__rating-input visually-hidden"
                name="rating"
                value={rateIndex}
                id={`${rateIndex}-stars`}
                type="radio"
                checked={rateIndex === formData.rating}
                onChange={() => {
                  setFormData({
                    ...formData,
                    rating: rateIndex,
                  });
                }}
              />
              <label
                htmlFor={`${rateIndex}-stars`}
                className="reviews__rating-label form__rating-label"
                title={grade}
              >
                <svg className="form__star-image" width="37" height="33">
                  <use xlinkHref="#icon-star"/>
                </svg>
              </label>
            </React.Fragment>
          );
        })}

      </div>

      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        value={formData.comment}
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={({target}) => {
          const value = target.value;
          setFormData({
            ...formData,
            comment: value,
          });
        }}
      />

      <div className="reviews__button-wrapper">

        {
          isError400
          &&
          <span className="reviews__error-text">
            The entered data is incorrect
          </span>
        }

        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and
          describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>

        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={isDisabled}
        >
          Submit
        </button>
      </div>

    </form>
  );
}

export default ReviewForm;
