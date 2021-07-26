import {useEffect} from 'react';

const useOfferData = (offers, currentID, fetchNearbyOffers, fetchOffer, fetchOfferComments) => {
  useEffect(() => {
    if (!offers.length) {
      fetchOffer(currentID);
    }
  }, [currentID, fetchOffer, offers]);

  useEffect(() => {
    fetchNearbyOffers(currentID);
  }, [currentID, fetchNearbyOffers]);

  useEffect(() => {
    fetchOfferComments(currentID);
  }, [currentID, fetchOfferComments]);
};

export default useOfferData;
