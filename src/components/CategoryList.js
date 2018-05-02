import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView, Text } from 'react-native';
import ListItem from './ListItem';

class CategoryList extends Component {
  componentWillMount() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(this.props.words);
  }

  renderRow(category) {
    return <ListItem category={category} />;
  }

  render() {
    return (
      <ListView
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}

const mapStateToProps = state => {
  return { words: state.words };
};

export default connect(mapStateToProps)(CategoryList);
