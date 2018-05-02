import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flipped: true,
    };
  }

  render() {
    const { viewStyle, textStyle } = styles;
    if (this.state.flipped) {
      return (
        <View style={viewStyle}>
          <Text style={textStyle}>{this.props.word}</Text>
        </View>
      );
    } else {
      return <View style={viewStyle}></View>
    }
  }
}

const styles = {
  viewStyle: {
    width:100,
    height:100,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
  }
};

export default Card;
