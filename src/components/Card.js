import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native'

import ListItem from './ListItem.js';

const data = [
  {
    name: 'ea molestias quasi exercitationem repellat qui ipsa sit aut',
    image: 'https://via.placeholder.com/150/92c952',
    autor: 'autor 1'
  },
  {
    name: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    image: 'https://via.placeholder.com/150/771796',
    autor: 'autor 2'
  },
  {
    name: 'dolorem eum magni eos aperiam quia',
    image: 'https://via.placeholder.com/150/d32776',
    autor: 'autor 3'
  }
];

class Card extends React.Component {

  render() {
    return(
      <View style={ styles.container }>
        <FlatList
        style={ styles.card }
        data={data}
        renderItem={ ({item}) => <ListItem image={item.image} title={item.name} autor={item.autor} /> }
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
