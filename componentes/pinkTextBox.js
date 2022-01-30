import React, {useState} from 'react';
import {StyleSheet, View, Text, TextInput, Pressable, KeyboardAvoidingView, Platform} from 'react-native'
import { globalStyle } from './styles/global';


export default function PinkTextBox(params){

  const [text, setText] = useState('');

  return (
      <TextInput
      style={styles.inputbox}
      placeholder={params.text}
      placeholderTextColor={'#E900FF'}
      secureTextEntry={params.secure}
      >
        {text}
      </TextInput>
  );
  
}

const styles = StyleSheet.create({
  inputbox:{
    width:'100%',
    height:50,
    borderWidth: 2,
    borderColor:'#E900FF',
    borderRadius:60,
    padding:10,
    fontFamily: 'Gugi-Regular',
    marginBottom: 20,
    backgroundColor:'#000',
    color:'#34C6AD'
  }
});