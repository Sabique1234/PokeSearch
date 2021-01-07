import React from 'react';
import {View, Image} from 'react-native';

class PokeLoader extends React.Component{
 render(){
     return(
         <View style={{flex:1}}>

             <Image source={{uri:
                "https://media.tenor.com/images/39d6060576a516f1dd437eafccafbdb1/tenor.gif"}}
                style={styles.img}>                   
             </Image>

         </View>
     );
 }
}

const styles={

    img:{

        justifyContent:'center',
        alignItems:'center',
        width:20,
        height:20
    }
}

export default PokeLoader;