import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './src/reducers';
import Router from './src/Router';

class App extends Component {
  render() {
    console.disableYellowBox = true;
    var store = createStore(reducers);
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'powderblue',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  bigtext: {
    fontWeight: 'bold',
    fontSize: 36,
  },
});

export default App;
