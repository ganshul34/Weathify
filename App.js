import React from 'react';
import { StyleSheet, 
  Text, 
  View,
  KeyboardAvoidingView,
  TextInput,
   } from 'react-native';
import { Platform } from 'expo-core';
import SearchInput from './components/SearchInput'
export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state={text: 'Search Location' };
  }
  render() {
    return (
      <KeyboardAvoidingView style={styles.container}>
        <Text style={[styles.largeText,styles.text]}> San Franscisco</Text>
        <Text style={[styles.largeText,styles.text]}>Light Cloud</Text>
        <Text style={[styles.largeText,styles.text]}>24°</Text>
        <SearchInput placeholder="Search any city"/>  
      </KeyboardAvoidingView>
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
    /*
    ...Platform.select({
      ios: {
        fontFamily: '',
      },
      android: {
        fontFamily: '',
      },

    }),
     */
  },
  largeText:{
    fontSize: 44, 
  },
  smallText:
  {
    fontSize:18,
  },
  
});
