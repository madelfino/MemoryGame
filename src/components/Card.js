import React, { Component } from 'react';
import { View, Text, TouchableOpacity, LayoutAnimation } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import * as actions from '../actions';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      triggered: false,
      ishidden: false
    };
  }

  componentWillUpdate() {
    LayoutAnimation.spring();
  }

  render() {
    const { viewStyle, textStyle, matchedStyle, deadStyle } = styles;
    const { selected, word, match, matched } = this.props;
    if (this.props.win) {
      Actions.victory();
    }
    if (this.state.ishidden) {
      return (
        <View style={matchedStyle} />
      );
    }
    if (this.state.triggered) {
      return (
          <View style={[viewStyle, deadStyle]}>
            <Text style={textStyle}>{word}</Text>
          </View>
      );
    }
    if (!this.state.triggered && this.props.matched) {
      this.setState({triggered: true});
      setInterval(() => {
        this.setState({ishidden: true});
      }, 1000);
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
          <View style={viewStyle} />
        </TouchableOpacity>
      );
    }
  }
}

const styles = {
  viewStyle: {
    height: 100,
    width: 100,
    borderColor: 'blue',
    borderRadius: 5,
    borderWidth: 2,
    backgroundColor: 'powderblue',
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
  textStyle: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 24,
  },
  matchedStyle: {
    height: 100,
    width: 100,
    borderColor: '#007aff',
    borderRadius: 5,
    borderWidth: 2,
    backgroundColor: '#007aff',
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
  deadStyle: {
    backgroundColor: '#aa0000',
  }
};

const mapStateToProps = (state, ownProps) => {
  const selected = state.selectedCard && state.selectedCard.selected === ownProps.word;
  const win = state.selectedCard && (state.selectedCard.matches.length >= 20);
  const matched = state.selectedCard && state.selectedCard.matches.includes(ownProps.word);
  return { selected, win, matched };
};

export default connect(mapStateToProps, actions)(Card);
