import React from 'react';
import PropTypes from 'prop-types';

function SortButton({onSortBtnClick, isListOpened}) {
  return (
    <span
      onClick={onSortBtnClick}
      className="places__sorting-type"
      tabIndex="0"
    >
      Popular
      <svg
        className={`places__sorting-arrow ${isListOpened && 'rotated'}`}
        width="7"
        height="4"
      >
        <use xlinkHref="#icon-arrow-select"/>
      </svg>
    </span>
  );
}

SortButton.propTypes = {
  onSortBtnClick: PropTypes.func.isRequired,
  isListOpened: PropTypes.bool.isRequired,
};

export default SortButton;
