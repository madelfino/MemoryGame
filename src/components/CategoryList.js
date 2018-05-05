import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Button, Picker } from 'react-native';
import { Actions } from 'react-native-router-flux';

class CategoryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: this.props.categories[0]
    };
  }

  render() {
    const categoryItems = [];
    var i=0;
    for (id in this.props.categories) {
      var category = this.props.categories[i];
      categoryItems.push( <Picker.Item
        key={i}
        label={category}
        value={category}
        /> );
        i++;
    }

    return (
      <View style={{flex: 1, backgroundColor: 'powderblue'}}>
      <Picker
        style={styles.pickerStyle}
        textStyle={{
          fontSize: 36,
        }}
        itemStyle={styles.pickerItemStyle}
        selectedValue={this.state.category}
        onValueChange={ (value) => this.setState({ category: value }) }
      >
        {categoryItems}
      </Picker>
        <Button
          title="Play Game"
          onPress={() => { Actions.game({ category: this.state.category }); }}
        />
      </View>
    );
  }
}

const styles = {
  pickerStyle: {
    flex: 1,
  },
  pickerItemStyle: {
    fontSize: 48,
    color: 'red',
  },
};

const mapStateToProps = state => {
  return {
    words: state.words,
    categories: state.categories,
  };
};

export default connect(mapStateToProps)(CategoryList);
