import React, { Component } from 'react';
import { View, Text, TouchableOpacity, LayoutAnimation } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flipped: false,
    };
  }

  componentWillUpdate() {
    LayoutAnimation.spring();
  }

  render() {
    const { viewStyle, textStyle } = styles;
    const { selected, word } = this.props;
    if (selected) {
      return (
          <View style={viewStyle}>
            <Text style={textStyle}>{word}</Text>
          </View>
      );
    } else {
      return (
        <TouchableOpacity onPress={() => {
          this.props.selectCard(word);
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
    backgroundColor: 'powderblue',
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'blue',
    borderWidth: 1,
    borderRadius: 5
  },
  textStyle: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 24,
  }
};

const mapStateToProps = (state, ownProps) => {
  const selected = state.selectedCard === ownProps.word;
  return { selected };
};

export default connect(mapStateToProps, actions)(Card);
