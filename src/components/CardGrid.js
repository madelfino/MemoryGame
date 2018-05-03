import React, { Component } from 'react';
import { View, Text } from 'react-native';
import CardRow from './CardRow';

class CardGrid extends Component {
  render() {
    const { gridStyle } = styles;

    var cardRows = [];
    var cols = this.props.numCols;
    for (var i = 0; i < this.props.numRows; ++i ) {
      cardRows.push(<CardRow
        key={i}
        numCards={cols}
        words={this.props.words.slice(i*cols, i*cols + cols)}
      />);
    }

    return (
      <View style={gridStyle}>
        {cardRows}
      </View>
    );
  }
}

const styles = {
  gridStyle: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    paddingTop: 15,
    backgroundColor: '#007aff',
  }
};

export default CardGrid;
