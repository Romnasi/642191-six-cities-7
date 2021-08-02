import {ui} from './ui';
import {changeCity} from '../action';


describe('Reducer: ui', () => {
  it('without additional parameters should return initial state', () => {
    expect(ui(undefined, {}))
      .toEqual({currentCity: 'Paris'});
  });

  it('should change currentCity to a given value', () => {
    const state = {currentCity: 'Paris'};

    expect(ui(state, changeCity('Moscow')))
      .toEqual({currentCity: 'Moscow'});
  });
});
