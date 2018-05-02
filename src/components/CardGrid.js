import React, { Component } from 'react';
import { View, Text } from 'react-native';
import CardRow from './CardRow';

class CardGrid extends Component {
  render() {
    const { gridStyle } = styles;

    var cardRows = [];
    for (var i = 0; i < this.props.numRows; ++i ) {
      cardRows.push(<CardRow key={i} numCards={this.props.numCols} />);
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
  }
};

export default CardGrid;
