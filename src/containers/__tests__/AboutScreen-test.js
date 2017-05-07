import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';

import AboutScreen from '../AboutScreen';

it('renders correctly', () => {
  const cmpt = shallow(<AboutScreen />);
  expect(cmpt.length).toEqual(1);
});
