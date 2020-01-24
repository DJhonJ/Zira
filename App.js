import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, Alert } from 'react-native';
import Constants from 'expo-constants';

import Input from './src/components/Input.js';
import Item from './src/components/Item.js';

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

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      url: 'https://pokeapi.co/api/v2/pokemon',
      loading: true,
      prokemons: []
    }
  }

  //esta funcion se ejecuta despues de que se hallan  montado los componentes
  componentDidMount() {
    this.getPokemon();
  }

  getPokemon = () => {
    fetch(this.state.url)
      .then(response => response.json())
      .then(response => {

          this.setState({ pokemons: response.results, loading: false });
       })
  };

  render(){
    if(this.state.loading) {
      return(
        <View style={styles.container}>
          <Text>cargando...</Text>
        </View>
      )
    }

    return (
      <View style={styles.container}>
        <Text>Mostrando pokemons</Text>
        <FlatList
          data={this.state.pokemons}
          renderItem={({item}) => <Item text={item.name} onPress={ ()=> {Alert.alert(item.name);} } /> }
          keyExtractor={(item, index) => index.toString()}
          />
      </View>
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

export default App;
