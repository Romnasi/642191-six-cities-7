import {
  loadComments,
  loadFavorites,
  loadNearby,
  loadOffer,
  loadOffers,
  startLoadingStatus,
  updateOffer
} from '../action';
import {createReducer} from '@reduxjs/toolkit';

const initialState = {
  offers: [],
  nearbyOffers: [],
  comments: [],
  favorites: [],
  currentOffer: null,
  isDataLoaded: false,
  isOfferLoading: true,
  isCommentsLoading: true,
  isNearbyLoading: true,
  isFavoriteLoading: true,
};


const data = createReducer(initialState, (builder) => {
  builder
    .addCase(loadOffers, (state, action) => {
      state.isDataLoaded = true;
      state.offers = action.payload;
    })
    .addCase(loadFavorites, (state, action) => {
      state.isFavoriteLoading = false;
      state.favorites = action.payload;
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
    })
    .addCase(startLoadingStatus, (state, action) => {
      state[action.payload] = true;
    })
    .addCase(updateOffer, (state, action) => {
      const offers = state.offers;
      const updatedOffer = action.payload;
      const id = updatedOffer.id;
      const idx = offers.findIndex((offer) => offer.id === id);
      state.offers = [...offers.slice(0, idx), updatedOffer, ...offers.slice(idx + 1)];
    });
});

export {data};
