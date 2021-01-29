import React from 'react';
import {Text,View,StyleSheet,TouchableOpacity} from 'react-native';

export default class ReceiverDetailsScreen extends React.Component{
    render(){
        return(
            <View style = {styles.container}>
                <Text>Receiver Details</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignSelf:'center',
        justifyContent:'center',
        marginTop:150,
    },
})