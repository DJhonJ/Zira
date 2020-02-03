import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import PropTypes from 'prop-types';

class ListItem extends Component {
  render(){
    const { text, titulo, onPress, image } = this.props;

    return(
      <View style={styles.container}>
        <View>
          {

          }
        </View>
        <Text style={ styles.item } onPress={ onPress }>{ text }</Text>
      </View>
    )
  }
}

ListItem.PropTypes = {
  text: PropTypes.string,
  titulo: PropTypes.string
};

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#bebebe',
    padding: 5,
    marginVertical: 2,
    borderRadius: 4
  },
  item: {

  }
});

export default ListItem;
