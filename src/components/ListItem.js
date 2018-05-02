import React, { Component } from 'react';
import { View, Text } from 'react-native';

class ListItem extends Component {
  render() {

    return (
      <View>
        <Text>{this.props.category.category}</Text>
      </View>
    );
  }
}

export default ListItem;
