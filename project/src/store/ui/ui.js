import {ActionType} from '../action';

const initialState = {
  currentCity: 'Paris',
};

const ui = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        currentCity: action.payload,
      };
    default:
      return state;
  }
};

export {ui};
