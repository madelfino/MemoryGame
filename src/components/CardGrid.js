import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import Card from './Card';

const shuffle = (a) => {
  var i, x, j;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random()*(i+1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
};

const shuffle_together = (a, b) => {
  var i, x, j;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random()*(i+1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;

    x = b[i];
    b[i] = b[j];
    b[j] = x;
  }
  return [a, b];
};

class CardGrid extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { gridStyle, rowStyle } = styles;
    const { words } = this.props;
    var numRows = 5;
    var numCols = 4;

    var wordlist = [], matches = [];
    var cat_id = 0;
    for (id in words) {
      if (words[id].category == this.props.category) {
        cat_id = id;
      }
    }
    for (var i=0; i<10 && i<words[cat_id].words.length; i++) {
      wordlist.push(words[cat_id].words[i]['English']);
      wordlist.push(words[cat_id].words[i]['Thai']);
      matches.push(words[cat_id].words[i]['Thai']);
      matches.push(words[cat_id].words[i]['English']);
    }
    [wordlist, matches] = shuffle_together(wordlist, matches);

    var cards=[];
    for (var i=0; i<numRows * numCols; i++) {
      cards.push(<Card
        key={i}
        word={wordlist[i]}
        match={matches[i]}
      />)
    }

    var cardgrid = [];
    for (var i=0; i<numRows; i++) {
      var row = cards.slice(i*numCols, i*numCols + numCols);
      cardgrid.push(
        <View style={rowStyle}>
          {row}
        </View>
      );
    }

    return (
      <View style={gridStyle}>
        {cardgrid}
      </View>
    );
  }
}

const styles = {
  gridStyle: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#007aff',
  },
  rowStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  }
};

const mapStateToProps = state => {
  return { words: state.words };
};

export default connect(mapStateToProps)(CardGrid);
