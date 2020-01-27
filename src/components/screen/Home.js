import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, Alert, Keyboard, TouchableWithoutFeedback } from 'react-native';
import Constants from 'expo-constants';

import Input from '../Input.js';
import Item from '../Item.js';

class Home extends Component {
  static navigationOptions = {
    headerShown: false
  };

  constructor(props){
    super(props);

    this.state = {
      value: ''
    }
  }

  //esta funcion se ejecuta despues de que se hallan  montado los componentes
  componentDidMount() {
  }

  render(){
    return(
      <TouchableWithoutFeedback onPress={()=> Keyboard.dismiss()}>
        <View style={styles.container}>
            <Input value={this.state.value} typeInput="2" placeholder="buscar ..."
                   onChangeText={ (text) => { this.setState({ value: text }) } } />
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginVertical: Constants.statusBarHeight,
    padding: 10
  }
});

export default Home;
