import {useEffect} from 'react';

const useOffers = (fetchOffers, isDataLoaded) => {
  useEffect(() => {
    if (!isDataLoaded) {
      fetchOffers();
    }
  }, [fetchOffers]);
};

export default useOffers;
