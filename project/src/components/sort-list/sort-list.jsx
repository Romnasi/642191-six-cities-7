import React, {memo, useState} from 'react';
import {Sorter} from '../../const';
import PropTypes from 'prop-types';
import SortButton from '../sort-button/sort-button';


function SortList({ activeSort, onSorterClick }) {
  const [isListOpened, setIsListOpened] = useState(false);

  const onSortBtnClick = () => {
    setIsListOpened((prevState) => !prevState);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>

      <SortButton
        isListOpened={isListOpened}
        onSortBtnClick={onSortBtnClick}
      />

      <ul className={`places__options places__options--custom ${isListOpened && 'places__options--opened'}`}>
        {
          Object.values(Sorter).map(({ ID: id, LABEL: label }) => {
            const isActive = id === activeSort;
            return (
              <li
                onClick={() => {
                  onSorterClick(id);
                  onSortBtnClick();
                }}
                key={id}
                className={`places__option ${isActive && 'places__option--active'}`}
                tabIndex="0"
              >
                {label}
              </li>
            );
          })
        }
      </ul>
    </form>
  );
}

SortList.propTypes = {
  activeSort: PropTypes.oneOf(Object.values(Sorter)
    .map(({ID}) => ID)).isRequired,
  onSorterClick: PropTypes.func.isRequired,
};


export default memo(SortList,  (
  prevProps,
  nextProps,
) => prevProps.activeSort === nextProps.activeSort);
