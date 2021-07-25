import {loadComments, loadNearby, loadOffer, loadOffers} from '../action';
import {createReducer} from '@reduxjs/toolkit';

const initialState = {
  offers: [],
  nearbyOffers: [],
  comments: [],
  currentOffer: null,
  isDataLoaded: false,
  isOfferLoading: true,
  isCommentsLoading: true,
  isNearbyLoading: true,
};


const data = createReducer(initialState, (builder) => {
  builder
    .addCase(loadOffers, (state, action) => {
      state.isDataLoaded = true;
      state.offers = action.payload;
    })
    .addCase(loadOffer, (state, action) => {
      state.isOfferLoading = false;
      state.currentOffer = action.payload;
    })
    .addCase(loadNearby, (state, action) => {
      state.isNearbyLoading = false;
      state.nearbyOffers = action.payload;
    })
    .addCase(loadComments, (state, action) => {
      state.isCommentsLoading = false;
      state.comments = action.payload;
    });
});

export {data};
