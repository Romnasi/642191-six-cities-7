import React from 'react';
import PropTypes from 'prop-types';


function Amenities({goods}) {
  return (
    <div className="property__inside">
      <h2 className="property__inside-title">What&apos;s inside</h2>
      <ul className="property__inside-list">
        {goods.map((amenity, i) => {
          const keyValue = `${i}-amenity`;
          return (
            <li key={keyValue} className="property__inside-item">
              {amenity}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

Amenities.propTypes = {
  goods: PropTypes.array.isRequired,
};


export default Amenities;
