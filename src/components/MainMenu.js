import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';

class MainMenu extends Component {
  render() {
    const { viewStyle, textStyle, buttonStyle } = styles;
    return(
      <View style={viewStyle}>
        <View style={{ backgroundColor: 'red', flex: 1 }} />
        <View style={{ backgroundColor: 'white', flex: 1 }} />
        <View style={{ backgroundColor: 'blue', flex: 2 }}>
          <View style={viewStyle} />
          <Text style={textStyle}>
            จำได้
          </Text>
          <Text style={textStyle}>
            Thai Memory Game
          </Text>
          <View style={viewStyle} />
        </View>
        <View style={{ backgroundColor: 'white', flex: 1 }} />
        <View style={{ backgroundColor: 'red', flex: 1 }} />
        <Button style={buttonStyle}
          onPress={() => {
            Actions.categoryList();
          }}
          title="Start"
        />
      </View>
    );
  }
}

const styles = {
  textStyle: {
    flex: 2,
    fontSize: 36,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  viewStyle: {
    flex: 1,
  },
  buttonStyle: {
    flex: 1,
    width: null,
    backgroundColor: 'blue',
  }
};

export default MainMenu;
