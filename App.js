import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, Image, Platform} from 'react-native';
import {Button} from 'native-base';
import Landing from './src/Landing';
import Search from './src/Search';



export default function App() {
  return (
    
    <View style={styles.container}>


      <Landing/>
      <Search/>


      <Text style={styles.text}>HELLO POKEMON</Text>
      <Button/>
        
    


      <StatusBar style="auto" />
    </View>
  );
}
 




const styles={
  
  container:{
  flex:1,
  marginTop:Platform.OS==='android'?350:0,
  align:'centre',
  marginLeft:125
},
text:{
  marginLeft:10,
  marginTop:-200
}

}






/*<Image
/source={require("./assets/P1.png")}
style={{width:100, height:70}}
/>

<Image
 source={require("./assets/P2.png")}
 style={{width:100, height:40}}
/>*/