import React from 'react';
import PropTypes from 'prop-types';
import sortListProp from '../sort-list/sort-list.prop';
import {Sorter} from '../../const';


function SortButton({onSortBtnClick, isListOpened, activeSort}) {
  const buttonText = Object.values(Sorter).find(({ ID: id}) => id === activeSort).LABEL;

  return (
    <span
      onClick={onSortBtnClick}
      className="places__sorting-type"
      tabIndex="0"
    >
      {buttonText}
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
  activeSort: sortListProp,
};

export default SortButton;
