import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import * as actions from '../actions';

class WinScreen extends Component {
  render() {
    const { viewStyle, textStyle, buttonStyle, buttonTextStyle } = styles;
    return (
      <View style={viewStyle}>
        <View style={{ backgroundColor: '#f8333c', flex: 1 }}/>
        <View style={{ backgroundColor: '#f1fffa', flex: 1 }}/>
        <View style={{ backgroundColor: '#235789', flex: 2 }}>
          <View style={viewStyle}/>
          <Text style={textStyle}>
            You win!
          </Text>
          <Text style={textStyle}>
            เก่งมาก
          </Text>
          <View style={viewStyle}/>
        </View>
        <View style={{ backgroundColor: '#f1fffa', flex: 1 }} />
        <View style={{ backgroundColor: '#f8333c', flex: 1 }} />
        <View style={{flex:1}}>
          <TouchableOpacity
            style={buttonStyle}
            onPress={() => {
              this.props.resetCards();
              Actions.mainMenu();
          }}>
            <Text style={buttonTextStyle}>Play Again</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = {
  textStyle: {
    flex: 2,
    fontSize: 36,
    color: '#f1fffa',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  viewStyle: {
    flex: 1,
    flexDirection: 'column',
  },
  buttonStyle: {
    flex: 1,
    backgroundColor: '#333745',
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
  buttonTextStyle: {
    fontSize: 24,
    color: '#f1fffa',
    fontWeight: 'bold',
    textAlign: 'center',
  }
};

export default connect(null, actions)(WinScreen);
