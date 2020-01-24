import React, { Component } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';

class Item extends Component {
  render(){
    const { text, onPress } = this.props;

    return(
      <View>
        <Text style={ styles.item } onPress={ onPress }>{ text }</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#bebebe',
    padding: 15,
    marginVertical: 2,
    borderRadius: 4,
  }
});

export default Item;
