import React, {memo} from 'react';
import {Sorter} from '../../const';
import PropTypes from 'prop-types';


function SortList({ activeSort, onSorterClick }) {

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex="0">
        Popular
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"/>
        </svg>
      </span>
      <ul className="places__options places__options--custom places__options--opened">
        {
          Object.values(Sorter).map(({ ID: id, LABEL: label }) => {
            const isActive = id === activeSort;
            return (
              <li
                onClick={() => onSorterClick(id)}
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
