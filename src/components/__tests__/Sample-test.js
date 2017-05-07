import React from 'react';
import ReactNative from 'react-native';
import { shallow } from 'enzyme';
import expect from 'expect';

import Sample from '../Sample.js';

// This will mutate `react-native`'s require cache with `react-native-mock`'s.
require('react-native-mock/mock'); // <-- side-effects!!!

it.skip('renders correctly', () => {
  const cmpt = shallow(<Sample />);
  expect(cmpt.length).toEqual(1);
});
