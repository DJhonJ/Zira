import React, { Component } from 'react';
import { TextInput, View, StyleSheet, Text } from 'react-native';

import theme from '../config/colors.js';

class Input extends Component {
  render() {
    const { styleInput } = this.props;

    return (
      <View>
        <TextInput style={ styleInput == '2' ? styles.input2 : styles.input  } placeholder="hola" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    color: 'black',
    minHeight: 40,
    borderBottomWidth: 1,
    borderColor: theme.gray1
  },
  input2: {
    borderColor: theme.primary,
    borderRadius: 5,
    borderWidth: 1,
    padding: 7,
    paddingLeft: 13
  }
});

export default Input;
