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
      loading: false,
      videos: []
    }
  }

  //esta funcion se ejecuta despues de que se hallan montado los componentes
  componentDidMount() {
    //this.buscador(this.state.value)
  }

  render(){
    return(
      <TouchableWithoutFeedback onPress={()=> Keyboard.dismiss()}>
        <View style={styles.container}>
          <View style={{ flex:0, alignItems: 'center', marginBottom: 10 }}>
            <Titulo>Soy el titulo</Titulo>
          </View>

          <Input value={this.state.value} typeInput="2" placeholder="buscar ..."
                   onChangeText={ (text) => { this.setState({ value: text }) } }
                   onSubmit={() => this.buscador() } />

          <Card load={this.state.loading} data={this.state.videos} />
        </View>
      </TouchableWithoutFeedback>
    );
  }

  buscador() {
    const key = 'AIzaSyA6vp-xcPCf1-1TtmHc49Sq9kwPv4RTaBA';
    let url = `https://www.googleapis.com/youtube/v3/search?key=${key}&part=snippet&type=video&q=${this.state.value}`;

    this.setState({ loading: true })

    fetch(url).then(response => response.json())
              .then(response => { this.setState({ videos: response.items, loading: false }) })
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
