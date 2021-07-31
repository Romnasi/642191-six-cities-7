import {
  loadComments,
  loadFavorites,
  loadNearby,
  loadOffer,
  loadOffers,
  startLoadingStatus,
  updateOffers
} from '../action';
import {createReducer} from '@reduxjs/toolkit';
import {updateArrayItem} from '../../utils/utils';

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
    .addCase(updateOffers, (state, action) => {
      const updatedOffer = action.payload.offer;
      const id = updatedOffer.id;

      updateArrayItem(state, 'offers', id, updatedOffer);

      switch (action.payload.screen) {
        case 'OFFER':
          updateArrayItem(state, 'nearbyOffers', id, updatedOffer);
          break;
        case 'FAVORITES':
          updateArrayItem(state, 'favorites', id, updatedOffer);
          break;
        case 'CURRENT_OFFER':
          state.currentOffer = updatedOffer;
          break;
        default:
          updateArrayItem(state, 'offers', id, updatedOffer);
          break;
      }
    });
});

export {data};
