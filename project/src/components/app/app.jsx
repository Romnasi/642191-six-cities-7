import React from 'react';
import PropTypes from 'prop-types';
import Main from '../main/main';

function App(props) {
  const {cardData} = props;
  return (
    <Main cardData={cardData}/>
  );
}

App.propTypes = {
  cardData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      photo: PropTypes.string.isRequired,
      isPremium: PropTypes.bool.isRequired,
      isBookmark: PropTypes.bool.isRequired,
      rating: PropTypes.number.isRequired,
    })),
};

export default App;
