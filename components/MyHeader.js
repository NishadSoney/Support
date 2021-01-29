import React from 'react';
import {Text,View,StyleSheet,TouchableOpacity} from 'react-native';
import {Header} from 'react-native-elements';

const MyHeader = props=>{
    return(
        <View style = {{marginTop:-30}}>
        <Header 
        centerComponent = {{text:props.title,style:{
            color:'cyan',
            fontWeight:'bold',
            fontSize:15,
        }}}
        backgroundColor = 'red'/>
        </View>
    );
}

export default MyHeader;