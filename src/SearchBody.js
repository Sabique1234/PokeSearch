import React,{Component} from 'react';
import {View, Image, ScrollView, Text, Dimensions} from 'react-native';
import {List, ListItem} from 'native-base';

var height = Dimensions.get('window').height;
var width =  Dimensions.get('window').width;

export default class SearchBody extends React.Component{
  render(){
      var pokemon = this.props.data;
      if(!pokemon){
          return
          <View>
          </View>    
      }

      return(
       <Image style={styles.backgroundImage}

       source={{uri:"http://pokemongolive.com/img/posts/raids_loading.png"}} >

           <ScrollView style={{flex:1}}>

           <Text style={styles.header}>
            #{pokemon.id}-{pokemon.name.toUpperCase()}
           </Text>

           <View style={styles.viewStyle}>

           <Image source={{uri:pokemon.sprites.front_default}}
           style={styles.img}></Image>

           </View>

           <View style={styles.info}>

           <ListItem itemDivider>
               <Text style={{fontWeight:'bold'}}> Size </Text>
           </ListItem>

           <ListItem>
               <Text> WEIGHT-{pokemon.weight}Kilogram </Text>
           </ListItem>

           <ListItem>
               <Text> HEIGHT-{pokemon.height/10}Metre </Text>
           </ListItem>

           <ListItem itemDivider>
               <Text style={{fontWeight:'bold'}}> Abilities </Text>
           </ListItem>

           <List dataArray={pokemon.abilities}
           renderRow={(item)=>
           <ListItem>
               <Text>{item.ability.name}</Text>
           </ListItem>}>
           </List>


           </View>

           </ScrollView>

       </Image>
      )
  }
}

const styles={

  backgroundImage:{
    width:200,
    height:200,
    marginTop:200,
    marginLeft:200,
    alignItems:'centre', 
    justifyContent:'centre',
},

  info:{
    width:20,
    height:20,
    marginTop:200,
    marginLeft:200,
    alignItems:'centre', 
    justifyContent:'centre',
  },

  header:{
    width:20,
    height:20,
    marginTop:200,
    marginLeft:200,
    alignItems:'centre', 
    justifyContent:'centre',
    backgroundcolor:'cyan',
  },

  viewStyle:{
    width:20,
    height:20,
    marginTop:200,
    marginLeft:200,
    alignItems:'centre', 
    justifyContent:'centre',
    backgroundcolor:'blue'
  },
  

}