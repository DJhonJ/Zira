import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import PropTypes from 'prop-types';

class ListItem extends Component {
  render(){
    const { text, title, onPress, image, autor } = this.props;

    return(
      <View style={styles.container}>
        <View>
          <Image style={ styles.image } source={{ uri: image }} />
        </View>

        <View>
          <View style={{  }}>
            <Text style={ styles.title } onPress={ onPress }>{ title }</Text>
          </View>

          <View style={{marginTop: 7}}>
            <Text style={ styles.autor } onPress={ onPress }>{ autor }</Text>
          </View>
        </View>

      </View>
    )
  }
}

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
    marginRight: 5,
    marginVertical: 5
  },
  autor: {
    fontSize: 13,
    fontWeight: 'bold'
  },
  title: {
    fontSize:15,
    flexGrow: 1,
    width: 250,
    flexWrap: 'wrap'
  }
});

export default ListItem;
