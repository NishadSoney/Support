import React from 'react';
import {View,Text,TouchableOpacity,StyleSheet, Alert} from 'react-native';
import {DrawerItems} from 'react-navigation-drawer';

import firebase from 'firebase';

export default class CustomSideBarMenu extends React.Component{
    render(){
        return(
        <View style = {styles.container}>
            <View style = {styles.DrawerItemsContainer}>
                <DrawerItems {...this.props} />
            </View>
            <View style = {styles.LogOutcontainer}>
                <TouchableOpacity
                style = {styles.logoutButton}
                onPress = {()=>{
                    this.props.navigation.navigate("WelcomeScreen"),
                    firebase.auth().signOut()
                }}>
                    <Text style = {styles.logouttext}>Log Out</Text>
                </TouchableOpacity>
            </View>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
     flex:1,
     backgroundColor:'#F8BE85',
     alignItems: 'center',
     justifyContent: 'center'
   },
   DrawerItemsContainer:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center'
   },
   LogOutcontainer:{
    alignItems: 'center',
    justifyContent: 'center',
    flex:1,
    padding:10,
   },
   logoutButton:{
        width:200,
        height:40,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:"#ff5722",
        shadowColor: "#000",
        shadowOffset: {
           width: 0,
           height: 1,
         }
    },
   logouttext :{
     textAlign:'center',
     fontSize:25,
     color : 'blue'
   },
})