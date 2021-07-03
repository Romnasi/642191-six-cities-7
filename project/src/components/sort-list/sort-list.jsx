import React from 'react';
import {Sorter} from '../../const';
import PropTypes from 'prop-types';


function SortList({ activeFilter, onFilterClick }) {

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
          Object.values(Sorter).map(({ ID, LABEL }) => {
            const isActive = ID === activeFilter;
            return (
              <li
                onClick={() => onFilterClick(ID)}
                key={ID}
                className={`places__option ${isActive && 'places__option--active'}`}
                tabIndex="0"
              >
                {LABEL}
              </li>
            );
          })
        }
      </ul>
    </form>
  );
}

SortList.propTypes = {
  activeFilter: PropTypes.oneOf(Object.values(Sorter)
    .map(({ID}) => ID)).isRequired,
  onFilterClick: PropTypes.func.isRequired,
};


export default SortList;
