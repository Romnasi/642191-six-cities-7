import {useState, useMemo} from 'react';
import {getSortedOffers} from '../utils/sort';


const useActiveSort = (currentOffers) => {
  const [activeSort, setActiveSort] = useState('popular');

  const onSorterClick = (id) => {
    setActiveSort(id);
  };

  const sortedOffers = useMemo(() => getSortedOffers(currentOffers.slice(), activeSort), [currentOffers, activeSort]);

  return [activeSort, sortedOffers, onSorterClick];
};

export default useActiveSort;
