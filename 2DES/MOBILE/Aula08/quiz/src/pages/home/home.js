import * as React from 'react';
import { View, Text, Button, TouchableOpacity, Image  } from 'react-native';
import ButtonNext from '../../Componentes/ButtonComponents/ButtonNext'

export default function Home({navigation }){
  const Icon = require('../../../assets/gato.gif');

  return(
    <View>
        <Image style={{width: '90vw', height: '40vh'}} source={Icon}/>
        <Text style={{ }}>Venha fazer o Quiz!</Text>
      <ButtonNext value='Começar o Quiz' onPress={() =>{ navigation.navigate("Primeira") }}/>
    </View>
  );
};
