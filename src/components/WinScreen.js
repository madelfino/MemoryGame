import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import * as actions from '../actions';

class WinScreen extends Component {
  render() {
    const { viewStyle, rowStyle, textStyle } = styles;
    return (
      <View style={viewStyle}>
        <View style={rowStyle}>
          <Text style={textStyle}>You Win!</Text>
        </View>
        <View style={rowStyle}>
          <Button
            title="Play Again"
            onPress={() => {
              this.props.resetCards();
              Actions.categoryList();
          }} />
        </View>
        <View style={rowStyle}>
          <Button
            title="Return to Main Menu"
            onPress={() => {
              this.props.resetCards();
              Actions.mainMenu();
          }} />
        </View>
      </View>
    );
  }
}

const styles = {
  viewStyle: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowStyle: {
    flex:1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textStyle: {
    fontSize: 36,
  }
};


export default connect(null, actions)(WinScreen);
