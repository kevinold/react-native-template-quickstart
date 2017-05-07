import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';

import SettingsScreen from '../SettingsScreen';

it('renders correctly', () => {
  const cmpt = shallow(<SettingsScreen />);
  expect(cmpt.length).toEqual(1);
});
