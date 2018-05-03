import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './src/reducers';
import Header from './src/components/Header';
import CardGrid from './src/components/CardGrid';

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
    var wordlist = [];
    for (var i=0; i<10; i++) {
      wordlist.push(store.getState().words[0].words[i]['English']);
      wordlist.push(store.getState().words[0].words[i]['Thai']);
    }
    return (
      <Provider store={store}>
      <View style={{ flex: 1 }}>
      <Header headerText="Memory Game" />
      <CardGrid numRows="5" numCols="4" words={wordlist}/>
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
