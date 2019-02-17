import React from 'react';
import { StyleSheet, 
  Text, 
  View,
  KeyboardAvoidingView,
  TextInput,
   } from 'react-native';
import { Platform } from 'expo-core';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={[styles.largeText,styles.text]}> San Franscisco</Text>
        <Text style={[styles.largeText,styles.text]}>Light Cloud</Text>
        <Text style={[styles.largeText,styles.text]}>24°</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle:{
    textAlign: 'center',
    fontFamily: Platform.OS==='ios'? 'AvenirNext-Regular' : 'Roboto'
  },
  largeText:{
    fontSize: 44, 
  },
  smallText:
  {
    fontSize:18,
  },
});
