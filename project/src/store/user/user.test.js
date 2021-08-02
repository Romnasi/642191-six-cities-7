import {user} from './user';
import {AuthorizationStatus} from '../../const';
import {requireAuthorization, ActionType} from '../action';


describe('Reducer: user', () => {
  it('without additional parameters should return initial state', () => {
    expect(user(undefined, {}))
      .toEqual({
        authorizationStatus: AuthorizationStatus.UNKNOWN,
        userEmail: '',
      });
  });

  it('should update authorizationStatus to "AUTH"', () => {
    const state = {
      authorizationStatus: AuthorizationStatus.NO_AUTH,
      userEmail: '',
    };

    const requiredAuthorizationAction = {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.AUTH,
    };

    expect(user(state, requiredAuthorizationAction))
      .toEqual({
        authorizationStatus: AuthorizationStatus.AUTH,
        userEmail: '',
      });
  });

  it('should update authorizationStatus to "NO_AUTH"', () => {
    const state = {
      authorizationStatus: AuthorizationStatus.AUTH,
      userEmail: '',
    };

    const requiredAuthorizationAction = {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.NO_AUTH,
    };

    expect(user(state, requiredAuthorizationAction))
      .toEqual({
        authorizationStatus: AuthorizationStatus.NO_AUTH,
        userEmail: '',
      });
  });

  it('should update email to a given value', () => {
    const email = 'romnasi@gmail.com';
    const state = {
      authorizationStatus: AuthorizationStatus.AUTH,
      userEmail: '',
    };

    const requiredAuthorizationAction = {
      type: ActionType.ADD_USER_EMAIL,
      payload: email,
    };

    expect(user(state, requiredAuthorizationAction))
      .toEqual({
        authorizationStatus: AuthorizationStatus.AUTH,
        userEmail: email,
      });
  });

  it('should update email to ""', () => {
    const email = 'romnasi@gmail.com';
    const state = {
      authorizationStatus: AuthorizationStatus.AUTH,
      userEmail: email,
    };

    const requiredAuthorizationAction = {
      type: ActionType.ADD_USER_EMAIL,
      payload: '',
    };

    expect(user(state, requiredAuthorizationAction))
      .toEqual({
        authorizationStatus: AuthorizationStatus.AUTH,
        userEmail: '',
      });
  });
});
