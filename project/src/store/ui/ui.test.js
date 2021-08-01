import {ui} from './ui';
import {changeCity, ActionType} from '../action';


describe('Reducer: ui', () => {
  it('without additional parameters should return initial state', () => {
    expect(ui(undefined, {}))
      .toEqual({currentCity: 'Paris'});
  });

  it('should change current city to the passed value', () => {
    const state = {currentCity: 'Paris'};

    expect(ui(state, changeCity('Moscow')))
      .toEqual({currentCity: 'Moscow'});
  });
});
