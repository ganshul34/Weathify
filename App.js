import React from 'react';
import { StyleSheet, 
  Text, 
  View,
  KeyboardAvoidingView,
  ImageBackground,
  TextInput,
   } from 'react-native';
import { Platform } from 'expo-core';
import SearchInput from './components/SearchInput';
import getImageForWeather from './utils/getImageForWeather';

export default class App extends React.Component {
  
  render() {
    const location = 'San Francisco';

    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
      <ImageBackground
      source={getImageForWeather('Clear')}
      style={styles.imageContainer}
      imageStyle={styles.image}
      >
      <View style={styles.detailsContainer}>
        <Text style={[styles.largeText,styles.text]}> 
        San Franscisco
        </Text>
        <Text style={[styles.largeText,styles.text]}>
        Light Cloud
        </Text>
        <Text style={[styles.largeText,styles.text]}>
        24°
        </Text>
        <SearchInput placeholder="Search any city"/>
      </View>
        </ImageBackground>
          
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
  imageContainer:{
    flex:1,
  },
  image:{
    flex:1,
    width:null,
    height:null,
    resizeMode: 'cover',
  },
  detailsContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
    paddingHorizontal: 20,
    },
    textStyle: {
      textAlign: 'center',
      fontFamily: Platform.OS === 'ios' ? 'AvenirNext-Regular' : 'Roboto',
      color: 'white',
      },
  
  largeText:{
    fontSize: 44, 
  },
  smallText:
  {
    fontSize:18,
  },
  
});
