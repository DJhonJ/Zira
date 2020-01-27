import React, { Component } from 'react';
import { TextInput, View, StyleSheet, Text, Alert } from 'react-native';

import theme from '../config/colors.js';

class Input extends Component {
  render() {
    const { typeInput, placeholder, onSubmit, value, onChangeText } = this.props;

    return (
      <View>
        <TextInput style={ typeInput == '2' ? styles.input2 : styles.input  } placeholder={placeholder}
                   onSubmitEditing={ onSubmit } value={value} onChangeText={ onChangeText }
         />
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
