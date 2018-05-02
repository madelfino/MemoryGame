import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import Header from './src/components/Header';
import CardGrid from './src/components/CardGrid';

class Greeting extends Component {
  render() {
    return (
      <Text style={ styles.bigtext }>Hello, {this.props.name}!</Text>
    );
  }
}

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
      <Header headerText="Memory Game" />
      <CardGrid numRows="5" numCols="4" />
      </View>
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
