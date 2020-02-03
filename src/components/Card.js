import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native'

import ListItem from './ListItem.js';

const data = [
  {
    name: 'uno',
    image: ''
  },
  {
    name: 'dos',
    image: 'https://facebook.github.io/react-native/img/tiny_logo.png'
  },
  {
    name: 'tres',
    image: ''
  }
];

class Card extends React.Component {

  render() {
    return(
      <View style={ styles.container }>
        <FlatList
        data={data}
        renderItem={ ({item}) => <ListItem image={item.image} text={item.name} /> }
        keyExtractor={item => item.name}
         />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 7
  },
  card: {

  }
});

export default Card;
