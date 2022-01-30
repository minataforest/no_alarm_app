import React from 'react';
import 'react-native-gesture-handler';
import {StyleSheet, View, Text, Image, Pressable, KeyboardAvoidingView, Platform, ImageBackground} from 'react-native'
import { globalStyle } from '../../styles/global';
import PinkTextBox from '../../componentes/pinkTextBox';
import PurpleButton from '../../componentes/purpleButton';

export default function LoginScreen({navigation}){
  return (
    <View style={[globalStyle.bgBlack, globalStyle.container]}>
      <View style={[globalStyle.bgBlack, globalStyle.container]}>
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : undefined} 
        style={{flex:1, alignItems:'center'}} keyboardVerticalOffset={44}>
          <ImageBackground  source={require('../../assets/images/loginbg.png')} 
          style={{width:'100%', height:300, position:'absolute', top: 0}}
          imageStyle={{resizeMode:'contain', alignSelf:'flex-start'}} />

          <View style={styles.innerContainer}>
            <PinkTextBox text={'아이디를 입력하세요...'} secure={false}/>
            <PinkTextBox text={'비밀번호를 입력하세요...'} secure={true}/>
          
            <PurpleButton text={'로그인'} onPress={()=>{console.log('로그인')}}/>
            <Pressable style={styles.linkText}>
              <Text style={styles.linkText}>비밀번호를 잊으셨나요?</Text>
            </Pressable>
            <Pressable style={styles.linkText} onPress={()=>{navigation.navigate('Join')}}>
              <Text style={styles.linkText}>회원가입</Text>
            </Pressable>
          </View>
          
        </KeyboardAvoidingView>
      </View>
    </View>
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