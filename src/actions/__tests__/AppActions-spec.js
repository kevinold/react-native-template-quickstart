import expect from 'expect';
import * as Constants from '../../constants';
import * as Actions from '../AppActions';

describe('App Actions', () => {
  let payload;

  beforeEach(() => {
    payload = {
      data: {
        code: 'MOCK_CODE',
        msg: 'MOCK_MSG',
      },
    };
  });

  it('should be an appInit action', () => {
    const expected = {
      type: Constants.APP_INIT,
      payload,
    };

    expect(Actions.appInit(payload)).toEqual(expected);
  });
});
