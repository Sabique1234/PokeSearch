import React from 'react';
import {View, Text, Image} from 'react-native';
import {Button} from 'native-base';

var img=require('../assets/P6.webp');

class Landing extends React.Component {
   render(){
       return(
           <View>
               <Image style={styles.img}source={img}/>
               
               <View style={styles.viewStyle}>
               <Text style={styles.textStyle}>WELCOME!</Text>
               
               <Button block={true} 
               style={styles.buttonStyle}
               onPress={()=>{
                   this.props.switchScreen("Search")
               }}>


                   <Text style={styles.buttonText}>START SEARCHING</Text>
            </Button>



               </View>
           </View>
       )
   }
}

const styles={

    viewStyle:{

    width:100,
    marginLeft:100,
    marginRight:200,
    marginTop:-1500,
    backgroundcolor:'red'
    },

   textStyle:{
       width:250,
    marginLeft:-70,
    marginRight:60,
    marginTop:350,
    backgroundcolor:'blue'
   },

   buttonStyle:{
       width:200,
       marginLeft:-120,
       marginTop:700,
    margin:10
   },


   buttonText:{
     color:'white'
   },

   img:{
    width:300,height:150,marginTop:290,marginLeft:-60,marginRight:2000
   }

}

export default Landing;

//width:300,height:150,marginTop:2,marginLeft:1,marginRight:2000