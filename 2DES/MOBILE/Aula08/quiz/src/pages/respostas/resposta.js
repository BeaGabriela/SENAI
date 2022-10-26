import * as React from 'react';
import { View, Text, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import ButtonNext from '../../Componentes/ButtonComponents/ButtonNext'
import ButtonSalvar from '../../Componentes/ButtonComponents/ButtonSalvar'
import styles from '../style/styles'
import { TextInput } from 'react-native-paper';

export default function resposta({ routes }) {
  const [lida, setLida] = React.useState("");
  var vetor = ['first', 'second', 'first', 'second', 'first'] //Precisa percorrer o vetor para comparar.
  var posicao = ['1', '2', '3', '4', '5']

  const ler = async () => {
    //Arrumar essa parte do index e da comparaçção
    try {
      let resps = await AsyncStorage.getItem("resps");
      let res = resps.split(";");
      res.map((r, index) =>{
        if(r[index]== vetor[index])
        console.log('w')
        return(
        
          <View>
            
          </View>
        )
      })

    } catch (err) {
      console.log(err)
    }
  }

  return (
    <View>
      <Text>{lida}</Text>
      <ButtonSalvar value="Ler" onPress={() => { ler() }} />
      <ButtonNext value="Next" onPress={() => { navigation.navigate("Home") }} />
    </View>
  );
};
