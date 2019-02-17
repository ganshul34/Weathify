import React from 'react';
import { StyleSheet, 
  Text, 
  View,
  KeyboardAvoidingView,
  TextInput,
   } from 'react-native';
import { Platform } from 'expo-core';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state={text: 'Search Location' };
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={[styles.largeText,styles.text]}> San Franscisco</Text>
        <Text style={[styles.largeText,styles.text]}>Light Cloud</Text>
        <Text style={[styles.largeText,styles.text]}>24°</Text>
        <TextInput 
        style={styles.TextInput}
        autoCorrect={false}
        placeholder="Search any Location"
        placeholderTextColor="white"
        clearButtonMode="always"
        />
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
  TextInput:{
    backgroundColor: '#666',
    color: 'white',
    height:40,
    width:300,
    marginTop:20,
    marginHorizontal:20,
    paddingHorizontal:10,
    alignSelf: 'center',

  },
});
