import React, { Component } from 'react';
import { ActivityIndicator, Image, StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import RootContainer from './containers/RootContainer';
import reduxStore, { persistConfig } from './config/reduxStore';

const store = reduxStore();

// Stub console statements for release
/* eslint-disable */
if (!__DEV__) {
  console = {};
  /*console.log = () => {};*/
  /*console.error = () => {};*/
  /*console.warn = () => {};*/
  console.log = console.info = console.error = console.warn = console.debug = console.trace = () => {};
}

//if (__DEV__ && Platform.OS === 'android') {
//  console.error = () => {};
//}
/* eslint-enable */

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
  },
  centering: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
});

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rehydrated: false,
    };
  }

  componentWillMount() {
    persistStore(store, persistConfig, () => {
      this.setState({ rehydrated: true });
      //}).purge(); // used to clear redux-persist cache when developing
    });
  }

  render() {
    if (!this.state.rehydrated) {
      return (
        <View style={styles.splashContainer}>
          <ActivityIndicator
            animating={true}
            style={[styles.centering, { height: 80 }]}
            size="large"
          />
        </View>
      );
    }

    return (
      <Provider store={store}>
        <RootContainer />
      </Provider>
    );
  }
}
