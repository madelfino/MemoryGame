import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Card from './Card';

class CardRow extends Component {
  render() {
    const { rowStyle } = styles;

    var cards = [];
    for (var i=0; i<this.props.numCards; ++i) {
      cards.push(<Card key={i} word={this.props.words[i]} />);
    }

    return (
      <View style={rowStyle}>
        {cards}
      </View>
    );
  }
}

const styles = {
  rowStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  }
};

export default CardRow;
