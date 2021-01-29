import React from 'react';
import {Text,View,StyleSheet,TouchableOpacity,KeyboardAvoidingView,TextInput,Alert} from "react-native";
import MyHeader from '../components/MyHeader'

import firebase from 'firebase';
import db from '../config';

export default class BookRequestScreen extends React.Component{
    constructor(){
        super();
        this.state = {
            userId:firebase.auth().currentUser.email,
            bookName:"",
            reasonToRequest:"",
        }
    }

    createUniqueId(){
        return Math.random().toString(36).substring(7)
    }

    addUserRequest=(bookName,reasonToRequest)=>{
        var userId = this.state.userId
        var randomRequestId = this.createUniqueId()
        db.collection("Requested_Books").add({
            "userId":userId,
            "bookName":bookName,
            "reasonToRequest":reasonToRequest,
            "requestId": randomRequestId,
        })
        this.setState({
            bookName:"",
            reasonToRequest:"",
        })
        return Alert.alert("Book Requested Successfully!")
    }

    render(){
        return(
            <View style = {{marginTop:150,textAlign:'center'}}>
                <MyHeader title = "Request Book"/>
                <KeyboardAvoidingView style = {styles.keyboardStyle}>
                <TextInput
                style = {styles.formTextInput}
                placeholder = "Book Name"
                onChangeText={(text)=>{
                    this.setState({
                        bookName:text
                    })
                }}/>
                <TextInput
                style = {styles.formTextInput}
                placeholder = "Enter a Reason"
                multiline = {true}
                onChangeText = {(text)=>{
                    this.setState({
                        reasonToRequest:text
                    })
                }}/>
                <TouchableOpacity 
                style = {styles.button}
                onPress = {()=>{
                    
                }}>
                    <Text>Request</Text>
                </TouchableOpacity>
                </KeyboardAvoidingView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    keyBoardStyle : {
        flex:1,
        alignItems:'center',
        justifyContent:'center'
      },
      formTextInput:{
        
        marginTop:20,
        alignSelf:'center',
        borderColor:'pink',
        borderRadius:10,
        borderWidth:1,
        textAlign:'center',
        padding:10,
        width:"75%",
        height:55,
      },
      button:{
        width:"75%",
        height:50,
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center',
        borderRadius:10,
        backgroundColor:"red",
        shadowColor: "white",
        shadowOffset: {
           width: 0,
           height: 8,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,
        elevation: 16,
        marginTop:20
        },
})
