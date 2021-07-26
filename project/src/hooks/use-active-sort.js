import {useState} from 'react';
import {getSortedOffers} from '../utils/sort';


const useActiveSort = (currentOffers) => {
  const [activeSort, setActiveSort] = useState('popular');

  const onSorterClick = (id) => {
    setActiveSort(id);
  };

  const sortedOffers = getSortedOffers(currentOffers.slice(), activeSort);

  return [activeSort, sortedOffers, onSorterClick];
};

export default useActiveSort;
