import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from 'react-redux';
import {postFavorite} from '../../store/api-actions';
import {getAuthorizationStatus} from '../../store/user/selectors';
import {AppRoute, AuthorizationStatus} from '../../const';
import {useHistory} from 'react-router-dom';


function BookmarkButton({ id, isFavorite }) {
  const [favoriteStatus, setFavoriteStatus] = useState(isFavorite);
  const authorizationStatus = useSelector(getAuthorizationStatus);
  const history = useHistory();

  const dispatch = useDispatch();

  const onClickBookmarkBtn = () => {


    if (authorizationStatus !== AuthorizationStatus.AUTH) {
      history.push(AppRoute.LOGIN);
    } else {
      dispatch(postFavorite(id, +!favoriteStatus));
      setFavoriteStatus((state) => !state);
    }
  };


  return (
    <button
      className={
        `place-card__bookmark-button ${favoriteStatus ? 'place-card__bookmark-button--active' : ''} button`
      }
      type="button"
      onClick={onClickBookmarkBtn}
    >
      <svg className="place-card__bookmark-icon" width="18" height="19">
        <use xlinkHref="#icon-bookmark"/>
      </svg>
      <span className="visually-hidden">
        {favoriteStatus ? 'In bookmarks' : 'To bookmarks'}
      </span>
    </button>
  );
}

BookmarkButton.propTypes = {
  id: PropTypes.number.isRequired,
  isFavorite: PropTypes.bool.isRequired,
};

export default BookmarkButton;
