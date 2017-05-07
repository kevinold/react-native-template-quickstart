import * as Constants from '../constants';

export function appInit(payload) {
  return {
    type: Constants.APP_INIT,
    payload,
  };
}
