import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, Alert, Keyboard, TouchableWithoutFeedback } from 'react-native';
import Constants from 'expo-constants';

import Input from '../Input.js';
import Titulo from '../Titulo.js';
import Card from '../Card.js';

class Home extends Component {
  static navigationOptions = {
    headerShown: false
  };

  constructor(props){
    super(props);

    this.state = {
      value: '',
      loading: false
    }
  }

  //esta funcion se ejecuta despues de que se hallan  montado los componentes
  componentDidMount() {
  }

  render(){
    return(
      <TouchableWithoutFeedback onPress={()=> Keyboard.dismiss()}>
        <View style={styles.container}>
          <View style={{ flex:0, alignItems: 'center', marginBottom: 10 }}>
            <Titulo>Soy el titulo</Titulo>
          </View>

          <Input value={this.state.value} typeInput="2" placeholder="buscar ..."
                   onChangeText={ (text) => { this.setState({ value: text }) } } />

          <Card />
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
