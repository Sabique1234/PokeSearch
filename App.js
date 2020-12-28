import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, Image, Platform} from 'react-native';
import {Button} from 'native-base';
import Landing from './src/Landing';
import Search from './src/Search';



export default class App extends React.Component {

  state={currentScreen:"Landing"}


  switchScreen=(currentScreen)=>{
    this.setState({currentScreen})
  }
  renderScreen=()=>{

   
    if(this.state.currentScreen==="Landing"){
      return(
        <Landing switchScreen={this.switchScreen}/>
        
      );
    }
    if(this.state.currentScreen==="Search"){
      return(
          <Search/>
      );
    }
  }


  render(){

  return (
    
    <View style={styles.container}>

     {this.renderScreen()}

      <StatusBar style="auto" />

    </View>
  );
  }
}
 




const styles={
  container:{
  flex:1,
  marginTop:Platform.OS==='android'?350:0,
  align:'centre',
  marginLeft:125
},
}






/*<Image
/source={require("./assets/P1.png")}
style={{width:100, height:70}}
/>

<Image
 source={require("./assets/P2.png")}
 style={{width:100, height:40}}
/>*/