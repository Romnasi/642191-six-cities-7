import {useState} from 'react';
import {useParams} from 'react-router-dom';

const Comment = {
  MIN_LENGTH: 50,
  MAX_LENGTH: 300,
};


const useReviewInputs = (postUserComment) => {
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


  const toggleLoadingState = () => {
    setFormData((state) => ({
      ...state,
      isLoading: !state.isLoading,
    }));
  };


  const onHandleSubmit = (evt) => {
    evt.preventDefault();
    toggleLoadingState();

    postUserComment(currentID, formData)
      .then(() => {
        resetState();
      })
      .catch(() => setIsError400(true))
      .finally(() => {
        toggleLoadingState();
      });
  };

  return [isError400, isDisabled, formData, setFormData, onHandleSubmit];
};

export default useReviewInputs;
