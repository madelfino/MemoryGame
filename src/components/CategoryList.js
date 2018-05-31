import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, TouchableOpacity, Picker } from 'react-native';
import { Actions } from 'react-native-router-flux';

class CategoryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: this.props.categories[0],
      mode: 'script'
    };
  }

  render() {
    const {
      pickerStyle,
      pickerItemStyle,
      buttonStyle,
      buttonTextStyle,
      textStyle
    } = styles;
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
    categoryItems.push( <Picker.Item
      key={i}
      label='All'
      value='All'
      /> );
      i++;

    return (

      <View style={{flex: 1}}>
        <View style={{ backgroundColor: '#f8333c', flex: 1 }} />
        <View style={{ backgroundColor: '#f1fffa', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={textStyle}>Select Category:</Text>
        </View>
        <Picker
          style={pickerStyle}
          mode='dialog'
          selectedValue={this.state.category}
          onValueChange={ (value) => this.setState({ category: value }) }
        >
          {categoryItems}
        </Picker>
        <Picker
          style={{backgroundColor: '#f1fffa', flex: 1, justifyContent: 'center', alignItems: 'center'}}
          mode='dialog'
          selectedValue={this.state.mode}
          onValueChange={ (value) => this.setState({ mode: value }) }
        >
          <Picker.Item key='0' label="Thai Script" value="script" />
          <Picker.Item key='1' label="Transcription" value="transcription" />
        </Picker>
        <View style={{ backgroundColor: '#f8333c', flex: 1 }} />
        <TouchableOpacity
          style={buttonStyle}
          onPress={() => {
            Actions.game({ category: this.state.category, mode: this.state.mode });
          }}
        >
          <Text style={buttonTextStyle}>Play Game</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = {
  pickerStyle: {
    flex: 2,
    backgroundColor: '#235789',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#f1fffa'
  },
  buttonStyle: {
    flex: 1,
    height: 100,
    backgroundColor: '#333745',
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: 24,
    color: '#333745',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonTextStyle: {
    fontSize: 24,
    color: '#f1fffa',
    fontWeight: 'bold',
    textAlign: 'center',
  }
};

const mapStateToProps = state => {
  return {
    words: state.words,
    categories: state.categories,

  };
};

export default connect(mapStateToProps)(CategoryList);
