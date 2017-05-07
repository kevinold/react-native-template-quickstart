import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StatusBar, Text, View, TouchableOpacity } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from './HomeScreen';
import AboutScreen from './AboutScreen';
import SettingsScreen from './SettingsScreen';

const TabNav = TabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => ({
      tabBarKey: navigation.state,
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={focused ? 'ios-book' : 'ios-book-outline'}
          size={26}
          style={{ color: tintColor }}
        />
      ),
    }),
  },
  About: {
    screen: AboutScreen,
    navigationOptions: ({ navigation }) => ({
      tabBarKey: navigation.state,
      tabBarLabel: 'About',
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={
            focused
              ? 'ios-information-circle'
              : 'ios-information-circle-outline'
          }
          size={26}
          style={{ color: tintColor }}
        />
      ),
    }),
  },
  Settings: {
    screen: SettingsScreen,
    navigationOptions: ({ navigation }) => ({
      tabBarKey: navigation.state,
      tabBarLabel: 'Settings',
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={focused ? 'ios-settings' : 'ios-settings-outline'}
          size={26}
          style={{ color: tintColor }}
        />
      ),
    }),
  },
});

const RootNavigator = StackNavigator(
  {
    Root: {
      screen: TabNav,
    },
  },
  {}
);

class RootContainer extends Component {
  componentWillMount() {
    StatusBar.setHidden(true);
  }

  render() {
    return <RootNavigator />;
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(RootContainer);
