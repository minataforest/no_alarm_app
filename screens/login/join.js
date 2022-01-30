import React from 'react';
import 'react-native-gesture-handler';
import {StyleSheet, View, Text, ScrollView, Keyboard, KeyboardAvoidingView, Platform, TouchableWithoutFeedback} from 'react-native'
import { globalStyle } from '../../styles/global';
import PinkTextBox from '../../componentes/pinkTextBox';
import PurpleButton from '../../componentes/purpleButton';
import { TextInput } from 'react-native-gesture-handler';
import YellowTextLine from '../../componentes/yellowTextLine';

export default function JoinScreen({navigation}){
  return (
      <View style={[globalStyle.bgBlack, globalStyle.container]}>
      <View style={[globalStyle.bgBlack, globalStyle.container]}>
        <ScrollView style={{width:'100%'}} contentContainerStyle={{flexGrow:1}} keyboardShouldPersistTaps={'handled'}>
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : undefined} 
        style={{flex:1, alignItems:'center'}}>
          <View style={styles.innerContainer}>
            <Text style={styles.pageSubject}>회원가입</Text>
            <Text style={styles.subjectText}>아이디</Text>
            <YellowTextLine text="아이디를 입력해주세요" secure={false}/>
            <Text style={styles.subjectText}>비밀번호</Text>
            <TextInput></TextInput>
            <Text style={styles.subjectText}>비밀번호 확인</Text>
            <TextInput></TextInput>
            <Text style={styles.subjectText}>닉네임</Text>
            <TextInput></TextInput>
            <PinkTextBox text={'아이디를 입력하세요...'} secure={false}/>
            <PinkTextBox text={'비밀번호를 입력하세요...'} secure={true}/>
          
            <PurpleButton text={'로그인'}/>

          </View>
          
        </KeyboardAvoidingView>
        </ScrollView>
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
  pageSubject:{
    color:'#E900FF',
    fontSize: 25,
    fontFamily: 'Gugi-Regular'
  },
  subjectText:{
    color:'#34C6AD',
    fontSize: 13,
    fontFamily: 'Gugi-Regular',
    alignSelf:'flex-start',
    marginTop: 10
  }
});