import React from 'react';
import {View, Text, Alert} from 'react-native';
import {Icon, Input, Button, Header, Item} from 'native-base';
import PokeLoader from './PokeLoader';
import SearchBody from './SearchBody';
import axios from 'axios';

export default class Search extends React.Component{
   state={pokeSearch:"",
   onCall:true,
   data:{}}
  searchPoke=()=>{
    this.setState({
      onCall:true
    });
    if(this.state.pokeSearch===""){
      return;
    }
    var self = this;
    axios.get("http://pokeapi.co/api/v2/pokemon/"+this.state.pokeSearch.toLowerCase())
      .then(function(reponse){
        console.log(response.data);
        self.setState({data:response.data});
        self.setState({onCall:false});
      })
      .catch(function(error){
        console.log(error);
        Alert.alert("DATA NOT FOUND!");
      })
  }

  renderBody=()=>{
    if(this.state.onCall){
      return(
        <PokeLoader/>
      )
    }
    else{
      return(
        <SearchBody data={this.state.data}/>
      )
    }
  }

  render(){
      return(
        <View style={{flex:1}}>
         
        <Header
          searchBar
          rounded>

        <Item>
          <Icon style={styles.icon}name="ios-search" onPress={this.searchPoke}>
          </Icon>

          <Input style={styles.input} value={this.searchPoke.pokeSearch}
          placeHolder="Search Here..." onChangeText={(pokeSearch)=>this.setState({pokeSearch})} >
          </Input>

        </Item>
        </Header>

        {this.renderBody()}


        </View>
      )
  }
}

const styles={

    icon:{
      marginTop:-400,
      marginLeft:0,
    },
    input:{
      marginTop:-600,
      marginRight:-100,
      marginLeft:200,
      width:20,
      length:1000,
    }

}

