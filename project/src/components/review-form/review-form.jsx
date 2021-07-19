import React, {useState} from 'react';
import {connect} from 'react-redux';
import {postComment} from '../../store/api-actions';
import PropTypes from 'prop-types';
import {useParams} from 'react-router-dom';

const Comment = {
  MIN_LENGTH: 50,
  MAX_LENGTH: 300,
};

const grades = ['perfect', 'good', 'not bad', 'badly', 'terribly'];
const maxRate = grades.length;


function ReviewForm({postUserComment}) {
  const [formData, setFormData] = useState({
    comment: '',
    rating: null,
    isLoading: false,
  });
  const [isError400, setIsError400] = useState(false);
  const currentID = useParams().id;

  const commentLength = formData.comment.length;

  const isDisabled = !(commentLength >= Comment.MIN_LENGTH
    && commentLength <= Comment.MAX_LENGTH
    && formData.rating !== null
    && !formData.isLoading);


  const resetState = () => {
    setFormData((state) => ({
      ...state,
      comment: '',
      rating: null,
    }));
  };


  const toggleDisableForm = () => {
    setFormData((state) => ({
      ...state,
      isLoading: !state.isLoading,
    }));
  };


  const onHandleSubmit = (evt) => {
    evt.preventDefault();
    toggleDisableForm();

    postUserComment(currentID, formData)
      .then(() => {
        resetState();
      })
      .catch(() => setIsError400(true))
      .finally(() => {
        toggleDisableForm();
      });
  };


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


ReviewForm.propTypes = {
  postUserComment: PropTypes.func.isRequired,
};


const mapDispatchToProps = (dispatch) => ({
  postUserComment(id, {comment, rating}) {
    return dispatch(postComment(id, {comment, rating}));
  },
});


export {ReviewForm};
export default connect(null, mapDispatchToProps)(ReviewForm);
