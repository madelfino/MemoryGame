import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import Card from './Card';
import Header from './Header';

const cull_together = (a, b, n) => {
  while (a.length > n) {
    var i = Math.floor(Math.random() * a.length);
    a.splice(i, 1);
    b.splice(i, 1);
  }
  return [a, b];
}

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

const copy_into_each_other = (a, b) => {
  var c = [];
  for (var i=0; i<a.length; i++) {
    c.push(a[i]);
  }
  for (var i=0; i<b.length; i++) {
    a.push(b[i]);
  }
  for (var i=0; i<c.length; i++) {
    b.push(c[i]);
  }
  return [a, b];
}

class CardGrid extends Component {
  constructor(props) {
    super(props);
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

    for (var i=0; i<words[cat_id].words.length; i++) {
      wordlist.push(words[cat_id].words[i]['English']);
      matches.push(words[cat_id].words[i]['Thai']);
    }

    [wordlist, matches] = cull_together(wordlist, matches, 10);
    [wordlist, matches] = copy_into_each_other(wordlist, matches);
    [wordlist, matches] = shuffle_together(wordlist, matches);

    this.state = {
      'wordlist': wordlist,
      'matches': matches,
      'numRows' : numRows,
      'numCols' : numCols,
      'matchedCards': []
    };
    this.matchHandler = this.matchHandler.bind(this);
  }

  matchHandler(word) {
    var matchedList = this.state.matchedCards;
    matchedList.push(word);
    for (var i=0; i<this.state.wordlist.length; i++) {
      if (this.state.wordlist[i] == word) {
        matchedList.push(this.state.matches[i]);
      }
    }
    this.setState(
      {
        'matchedCards': matchedList
      }
    );
  }

  render() {
    const { gridStyle, rowStyle } = styles;
    const { wordlist, matches, numRows, numCols, matchedCards } = this.state;

    var cards=[];
    for (var i=0; i<numRows * numCols; i++) {
      cards.push(<Card
        key={i}
        word={wordlist[i]}
        match={matches[i]}
        matchHandler={this.matchHandler}
        matched={matchedCards.includes(wordlist[i])}
      />)
    }

    var cardgrid = [];
    for (var i=0; i<numRows; i++) {
      var row = cards.slice(i*numCols, i*numCols + numCols);
      cardgrid.push(
        <View key={i} style={rowStyle}>
          {row}
        </View>
      );
    }

    return (
      <View style={gridStyle}>
        <Header headerText={this.props.category} />
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
