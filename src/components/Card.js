import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flipped: false,
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
      return (
        <TouchableOpacity onPress={() => {
          this.setState({flipped: true});
        }}>
          <View style={viewStyle} />
        </TouchableOpacity>
      );
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
