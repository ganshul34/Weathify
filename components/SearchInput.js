import React, { Component } from 'react';
import { StyleSheet, TextInput,View } from 'react-native'

export default class SearchInput extends React.Component{
    render() {
     return(
        <View style={styles.container}>
        <TextInput 
        style={styles.TextInput}
        autoCorrect={false}
        placeholder={this.props.placeholder}
        underlineColorAndroid="White"
        placeholderTextColor="white"
        clearButtonMode="always"
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
container: {
    height: 40,
    marginTop: 20,
    backgroundColor: '#666',
    marginHorizontal: 40,
    paddingHorizontal: 10,
    borderRadius: 5,
},
textInput:{
    flex: 1,
    color: 'white',
},
});
