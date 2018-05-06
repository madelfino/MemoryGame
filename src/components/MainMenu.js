import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

class MainMenu extends Component {
  render() {
    const { viewStyle, textStyle, buttonStyle, buttonTextStyle } = styles;
    return(
      <View style={viewStyle}>
        <View style={{ backgroundColor: '#f8333c', flex: 1 }} />
        <View style={{ backgroundColor: '#f1fffa', flex: 1 }} />
        <View style={{ backgroundColor: '#235789', flex: 2 }}>
          <View style={viewStyle} />
          <Text style={textStyle}>
            จำได้
          </Text>
          <Text style={textStyle}>
            Thai Memory Game
          </Text>
          <View style={viewStyle} />
        </View>
        <View style={{ backgroundColor: '#f1fffa', flex: 1 }} />
        <View style={{ backgroundColor: '#f8333c', flex: 1 }} />
        <View style={{ flex:1}}>
          <TouchableOpacity style={buttonStyle}
            onPress={() => {
              Actions.categoryList();
            }}
          >
          <View style={{flex:0.5}} />
          <Text style={buttonTextStyle}>Start</Text>
          <View style={{flex:0.5}} />
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
    height: 100,
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

export default MainMenu;
