import React, {useEffect, useRef, useState} from 'react';
import {connect} from 'react-redux';
import {postComment} from '../../store/api-actions';
import PropTypes from 'prop-types';
import {useParams} from 'react-router-dom';

const grades = ['perfect', 'good', 'not bad', 'badly', 'terribly'];
const maxRate = grades.length;


function ReviewForm({postUserComment}) {
  const [formData, setFormData] = useState({
    comment: '',
    rating: 0,
    isDisabled: true,
  });
  const [isError400, setIsError400] = useState(false);

  const formRef = useRef();
  const buttonRef = useRef();
  const currentID = useParams().id;

  const onSubmitBtnDisable = () => {
    setFormData({
      ...formData,
      isDisabled: true,
    });
  };

  const onSubmitBtnActive = () => {
    setFormData( {
      ...formData,
      isDisabled: false,
    });
  };


  useEffect(() => {
    const commentLength = formData.comment.length;
    if (
      commentLength >= 50
      && commentLength <= 300
      && formData.rating !== 0
    ) {
      onSubmitBtnActive();
    } else {
      onSubmitBtnDisable();
    }
  }, [formData.comment, formData.rating]);


  const onHandleSubmit = (evt) => {
    evt.preventDefault();
    onSubmitBtnDisable();

    postUserComment(currentID, formData)
      .then(() => {
        setFormData({
          comment: '',
          rating: 0,
          isDisabled: true,
        });
      })
      .catch(() => setIsError400(true))
      .finally(() => {
        onSubmitBtnActive();
        formRef.current.reset();
      });
  };

  return (
    <form
      ref={formRef}
      onSubmit={
        (evt) => onHandleSubmit(evt)
      }
      className="reviews__form form"
      action="#"
      method="post"
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">

        {grades.map((grade, i) => (
          <React.Fragment key={`${grade}-key-${maxRate - i}-stars`}>
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              value={maxRate - i}
              id={`${maxRate - i}-stars`}
              type="radio"

              onChange={() => {
                setFormData({
                  ...formData,
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
          </React.Fragment>
        ))}

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
        <p>Current symbols: {formData.comment.length}</p>
        <button
          ref={buttonRef}
          className="reviews__submit form__submit button"
          type="submit"
          disabled={formData.isDisabled}
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
