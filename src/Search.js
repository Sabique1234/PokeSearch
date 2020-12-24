import React from 'react';
import {View, Text} from 'react-native';

export default class Search extends React.Component{
  render(){
      return(
        <View style={styles.container}>
        <Text style={styles.textStyle}>SEARCH HERE...</Text>

        </View>
      )
  }
}

const styles={

    container:{
        flex:1
    },

    textStyle:{
        marginTop:200,
        marginLeft:200,
        color:'orange',
        width:20,
        height:20
    }

}