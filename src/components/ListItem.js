import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import PropTypes from 'prop-types';

class ListItem extends Component {
  render(){
    const { text, title, onPress, image, description } = this.props;

    return(
      <View style={styles.container}>
        <View>
          <Image style={ styles.image } source={{ uri: image }} />
        </View>

        <View>
          <Text style={ styles.title } onPress={ onPress }>{ title }</Text>
        </View>

        <View>
          <Text style={ styles.description } onPress={ onPress }>{ description }</Text>
        </View>

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
    flex: 1,
    backgroundColor: '#bebebe',
    padding: 5,
    marginVertical: 2,
    borderRadius: 4,
    flexDirection: 'row'
  },
  image: {
    width: 130,
    height: 80,
    marginRight: 5
  },
  description: {
    
  },
  title: {

  }
});

export default ListItem;
