import React, { Component } from 'react';
import { StyleSheet, TextInput,View } from 'react-native'

export default class SearchInput extends React.Component{
  constructor(props){
    super(props);
    this.state={
      text: '' 
    };
  }
  handleChangeText= (newLocation) => {
        this.props.location=newLocation;
  }  
  render() {
    const { placeholder } = this.props;
    const { text } = this.state;
     return(
        <View style={styles.container}>
        <TextInput 
        style={styles.TextInput}
        value={ text }
        autoCorrect={false}
        placeholder={placeholder}
        underlineColorAndroid="White"
        placeholderTextColor="white"
        onChangeText={this.handleChangeText}
        clearButtonMode="always"
        onSubmitEditing={this.handleSubmitEditing
    }
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
    color: '#000',
},
});
