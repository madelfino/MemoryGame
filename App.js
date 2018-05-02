import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './src/reducers';
import Header from './src/components/Header';
import CardGrid from './src/components/CardGrid';
import CategoryList from './src/components/CategoryList';

class Greeting extends Component {
  render() {
    return (
      <Text style={ styles.bigtext }>Hello, {this.props.name}!</Text>
    );
  }
}

class App extends Component {
  render() {
    var store = createStore(reducers);
    console.log(store);
    return (
      <Provider store={store}>
      <View style={{ flex: 1 }}>
      <Header headerText="Memory Game" />
      <CardGrid numRows="5" numCols="4" />
      </View>
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

const mapStateToProps = state => {
  return { words: state.words };
};

export default App;
