import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';

import Input from './src/components/Input.js';

class App extends Component {
  render(){
    return (
      <View style={styles.container}>
        <Text>Comenzando con zira.</Text>
        <Input styleInput="2" />
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
