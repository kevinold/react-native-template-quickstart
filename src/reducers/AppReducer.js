import { Record } from 'immutable';
import * as Constants from '../constants';

export const AppStateRecord = Record(
  {
    initialized: false,
  },
  'AppStateRecord'
);

const defaultState = new AppStateRecord();

export default function(state = defaultState, action) {
  switch (action.type) {
    case Constants.APP_INIT:
      return state.set('initialized', true);
    default:
      return state;
  }
}
