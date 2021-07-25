import {changeCity} from '../action';
import {createReducer} from '@reduxjs/toolkit';

const initialState = {
  currentCity: 'Paris',
};


const ui = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.currentCity = action.payload;
    });
});

export {ui};
