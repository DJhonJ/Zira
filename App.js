import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Constants from 'expo-constants';

import Input from './src/components/Input.js';

const datos = [
  {
    name: 'pedro',
    age: 10
  },
  {
    name: 'lisa',
    age: 4
  }
];

class Item extends Component {
  render(){
    return(
      <View>
      </View>
    )
  }
}

class App extends Component {
  render(){
    return (
      <View style={styles.container}>
        <Text>Mostrando un lista</Text>
        <FlatList
          data={datos}
          renderItem={({item}) => <Text>{ item.name }</Text> }/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: Constants.statusBarHeight,
    padding: 20
  },
});

export default App;
