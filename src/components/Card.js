import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native'

import ListItem from './ListItem.js';

const data = [
  {
    name: 'uno',
    image: 'https://via.placeholder.com/150/92c952'
  },
  {
    name: 'dos',
    image: 'https://via.placeholder.com/150/771796'
  },
  {
    name: 'tres',
    image: 'https://via.placeholder.com/150/d32776'
  }
];

class Card extends React.Component {

  render() {
    return(
      <View style={ styles.container }>
        <FlatList
        style={ styles.card }
        data={data}
        renderItem={ ({item}) => <ListItem image={item.image} title={item.name} description={item.name} /> }
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
