import expect from 'expect';
import * as Constants from '../../constants';

import reducer, { AppStateRecord } from '../AppReducer';

describe('AppReducer', () => {
  it('initializes with initialState', () => {
    const state = reducer(undefined, {});

    expect(state.get('initialized')).toBe(false);
  });

  it('should indicate the app is loading', () => {
    const action = {
      type: Constants.APP_INIT,
      payload: {
        data: true,
      },
    };
    const state = reducer(undefined, action);

    expect(state.get('initialized')).toBe(true);
  });
});
