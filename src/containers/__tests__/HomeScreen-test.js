import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';

import HomeScreen from '../HomeScreen';

it('renders correctly', () => {
  const cmpt = shallow(<HomeScreen />);
  expect(cmpt.length).toEqual(1);
});
