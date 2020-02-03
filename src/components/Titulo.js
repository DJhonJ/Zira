import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Titulo extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    return(
      <Text style={styles.text}>
        {this.props.children}
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 40
  }
});

export default Titulo;
