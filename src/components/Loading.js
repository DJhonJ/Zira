import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Loading extends React.Component {
  render(){
      return(
        <View style={styles.container}>
          <Text>cargando ...</Text>
        </View>
      )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default Loading;
