import React from 'react';
import PropTypes from 'prop-types';
import useFavoriteButton from '../../hooks/use-favorite-button';
import {BlockClass, FavoriteIcon} from '../../const';


function BookmarkButton({ id, isFavorite, screen }) {
  const onClickBookmarkBtn = useFavoriteButton(id, isFavorite, screen);


  return (
    <button
      className={
        `${BlockClass[screen]}__bookmark-button ${isFavorite ? `${BlockClass[screen]}__bookmark-button--active` : ''} button`
      }
      type="button"
      onClick={onClickBookmarkBtn}
    >
      <svg className={`${BlockClass[screen]}__bookmark-icon`} width={FavoriteIcon[screen].WIDTH} height={FavoriteIcon[screen].HEIGHT}>
        <use xlinkHref="#icon-bookmark"/>
      </svg>
      <span className="visually-hidden">
        {isFavorite ? 'In bookmarks' : 'To bookmarks'}
      </span>
    </button>
  );
}

BookmarkButton.defaultProps = {screen: Screen.MAIN};

BookmarkButton.propTypes = {
  id: PropTypes.number.isRequired,
  screen: PropTypes.string.isRequired,
  isFavorite: PropTypes.bool.isRequired,
};

export default BookmarkButton;
