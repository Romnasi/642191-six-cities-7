import React from 'react';
import PropTypes from 'prop-types';
import {placeTypes} from '../../const';
import imagesProp from './images.prop';


const GALLERY_MAX_LENGTH = 6;


function Gallery({images, type}) {

  if (images.length > GALLERY_MAX_LENGTH) {
    images = images.slice(0, GALLERY_MAX_LENGTH);
  }

  return (
    <div className="property__gallery-container container">
      <div className="property__gallery">
        {images.map((image, i) => {
          const keyValue = `${i}-${image}`;
          return (
            <div key={keyValue} className="property__image-wrapper">
              <img className="property__image" src={image} alt={type} />
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
