import React from 'react';
import {StyleSheet, View, Text, TextInput, Pressable, KeyboardAvoidingView, Platform} from 'react-native'
import { globalStyle } from './styles/global';


export default function PurpleButton(params){
  return (
    <Pressable style={styles.loginButton} onPress={params.onPress}>
      <Text style={styles.loginText}>{params.text}</Text>
    </Pressable>
  );

}

const styles = StyleSheet.create({
  loginButton:{
    width:'100%',
    height:50,
    backgroundColor:'#5800FF',
    borderRadius:60,
    justifyContent:'center',
    alignItems:'center'
  },
  loginText:{
    color:'#fff',
    fontSize: 20,
    fontFamily: 'Gugi-Regular'
  },
});