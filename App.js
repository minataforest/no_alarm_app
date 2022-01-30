import React from 'react';
import 'react-native-gesture-handler';
import {StyleSheet, View, Text, Image, Pressable, KeyboardAvoidingView, Platform, ImageBackground} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'; 
import { globalStyle } from './styles/global';
import LoginScreen from './screens/login/login';
import JoinScreen from './screens/login/join';


export default function App(){
  
  const Stack = createStackNavigator();

  return (
      <NavigationContainer>
        <Stack.Navigator
        screenOptions={{
          headerStyle: {backgroundColor:'#000', elevation: 0, shadowOpacity: 0, borderBottomWidth: 0,},
          headerTintColor:'#FFC600',
          title: ''
        }}
        >
          <Stack.Screen name='Login' component={LoginScreen} />
          <Stack.Screen name='Join' component={JoinScreen} />
        </Stack.Navigator>
      </NavigationContainer>
  );

}

const styles = StyleSheet.create({
  innerContainer:{
    width:'80%',
    justifyContent:'flex-end',
    alignItems:'center',
    flex: 1,
    marginBottom: 50,
  },
  loginButton:{
    width:'100%',
    height:50,
    backgroundColor:'#5800FF',
    borderRadius:60,
    justifyContent:'center',
    alignItems:'center'
  },
  loginText:{
    color:'#000',
    fontSize: 20,
    fontFamily: 'Gugi-Regular'
  },
  linkText:{
    color:'#FFC600',
    fontSize: 13,
    fontFamily: 'Gugi-Regular',
    alignSelf:'flex-end',
    marginTop: 10
  }
});