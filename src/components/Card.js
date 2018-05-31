import React, { Component } from 'react';
import { View, Text, TouchableOpacity, LayoutAnimation } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import * as actions from '../actions';

class Card extends Component {

  componentWillUpdate() {
    LayoutAnimation.spring();
  }

  render() {
    const { viewStyle, textStyle, matchedStyle, coverStyle } = styles;
    const { selected, word, match, matched } = this.props;

    if (this.props.win) {
      Actions.victory();
    }

    if (this.props.matched) {
      return (
        <View style={matchedStyle}>
          <Text style={textStyle}>{word}</Text>
        </View>
      );
    } else if (this.props.isMatched) {
      this.props.matchHandler(this.props.word);
    }

    if (selected) {
      return (
          <View style={viewStyle}>
            <Text style={textStyle}>{word}</Text>
          </View>
      );
    } else {
      return (
        <TouchableOpacity onPress={() => {
          this.props.selectCard(word, match);
        }}>
          <View style={coverStyle} />
        </TouchableOpacity>
      );
    }
  }
}

const styles = {
  viewStyle: {
    height: 90,
    width: 90,
    borderColor: '#f8333c',
    borderRadius: 10,
    borderWidth: 3,
    backgroundColor: '#f1fffa',
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  coverStyle: {
    height: 90,
    width: 90,
    borderColor: '#f8333c',
    borderRadius: 10,
    borderWidth: 3,
    backgroundColor: '#f8333c',
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  textStyle: {
    color: '#f8333c',
    fontWeight: 'bold',
    fontSize: 14
  },
  matchedStyle: {
    height: 95,
    width: 95,
    borderColor: '#235789',
    borderRadius: 10,
    borderWidth: 3,
    backgroundColor: '#235789',
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
};

const mapStateToProps = (state, ownProps) => {
  const selected = state.selectedCard && state.selectedCard.selected.includes(ownProps.word);
  const win = state.selectedCard && (state.selectedCard.matches.length >= 20);
  const isMatched = state.selectedCard && state.selectedCard.matches.includes(ownProps.word);
  return { selected, win, isMatched };
};

export default connect(mapStateToProps, actions)(Card);
