import {useEffect} from 'react';

const useOffers = (fetchOffers) => {
  useEffect(() => {
    fetchOffers();
  }, [fetchOffers]);
};

export default useOffers;
