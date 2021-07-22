import {useState} from 'react';


const useSelectedPoint = (offers) => {
  const [selectedPoint, setSelectedPoint] = useState({});

  const onListItemHover = (id) => {
    const currentPoint = offers.find((offer) => offer.id === id).location;
    setSelectedPoint(currentPoint);
  };

  return [selectedPoint, onListItemHover];
};

export default useSelectedPoint;
