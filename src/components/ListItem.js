import React, { Component } from 'react';
import { View, Text } from 'react-native';

class ListItem extends Component {
  render() {
    var wordlist = [];
    for (var i=0; i<this.props.category.words.length; i++) {
      wordlist.push(<Text id={i*2}>{this.props.category.words[i]['English']}</Text>);
      wordlist.push(<Text id={i*2+1}>{this.props.category.words[i]['Thai']}</Text>);
    }

    return (
      <View>{wordlist}</View>
    );
  }
}

export default ListItem;
