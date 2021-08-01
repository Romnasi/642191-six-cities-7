import {addUserEmail, closeSession, requireAuthorization} from '../action';
import {AuthorizationStatus} from '../../const';
import {createReducer} from '@reduxjs/toolkit';

const initialState = {
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  userEmail: false,
};


const user = createReducer(initialState, (builder) => {
  builder
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(closeSession, (state) => {
      state.authorizationStatus = AuthorizationStatus.NO_AUTH;
    })
    .addCase(addUserEmail, (state, action) => {
      state.userEmail = action.payload;
    });
});

export {user};
