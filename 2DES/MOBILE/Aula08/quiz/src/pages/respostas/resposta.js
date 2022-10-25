import * as React from 'react';
import { View, Text, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import ButtonNext from '../../Componentes/ButtonComponents/ButtonNext'
import ButtonSalvar from '../../Componentes/ButtonComponents/ButtonSalvar'
import styles from '../style/styles'

export default function resposta({ routes }){
    const [lida, setLida] = React.useState("");


  
  const ler = async () => {
    try {
      let p1 = await AsyncStorage.getItem('pergunta1');
      let p2 = await AsyncStorage.getItem('pergunta2');
      let p3 = await AsyncStorage.getItem('pergunta3');
      let p4 = await AsyncStorage.getItem('pergunta4');
      let p5 = await AsyncStorage.getItem('pergunta5');
      if(p1 == 'first' ? setLida('Parabens') : setLida(lida + 'A resposta correta era Elvis Presley')){

      }
      if(p2 == 'second' ? setLida('Parabens') : setLida(lida + 'A resposta correta era 1945')){

      }
      if(p3 == 'first' ? setLida('Parabens') : setLida(lida + 'Deu ruim Pergunta 3')){

      }
      if(p4 == 'second' ? setLida('Parabens') : setLida(lida + 'Deu ruim Pergunta 4')){

      }
      if(p5 == 'first' ? setLida('Parabens') : setLida(lida + 'Deu ruim Pergunta 5'))
    
      console.log(lida)
    } catch (err) {
      console.log(err)
    }
  }

  return(
    <View>
        <Text>{lida}</Text>
      <ButtonSalvar value="Ler" onPress={() => { ler() }}/>
      <ButtonNext value="Next" onPress={() =>{ navigation.navigate("Home")}}/>
    </View>
  );
};
