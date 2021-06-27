import React from 'react';
import PropTypes from 'prop-types';
import {placeTypes} from '../../const';
import imagesProp from './images.prop';


function Gallery({images, type}) {

  return (
    <div className="property__gallery-container container">
      <div className="property__gallery">
        {images.map((image, i) => {
          const keyValue = `${i}-${image}`;
          return (
            <div key={keyValue} className="property__image-wrapper">
              <img className="property__image" src={`img/${image}`} alt={type} />
            </div>
          );
        })}
      </div>
    </div>
  );
}


Gallery.propTypes = {
  images: imagesProp,
  type: PropTypes.oneOf(placeTypes).isRequired,
};


export default Gallery;
