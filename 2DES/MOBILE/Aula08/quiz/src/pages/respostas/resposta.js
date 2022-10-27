import * as React from 'react';
import { View, Text, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import ButtonNext from '../../Componentes/ButtonComponents/ButtonNext'
import ButtonSalvar from '../../Componentes/ButtonComponents/ButtonSalvar'
import styles from '../style/styles'
import { TextInput } from 'react-native-paper';

export default function resposta({ routes }) {
  const [lida, setLida] = React.useState([]);
  var vetor = ['first', 'second', 'first', 'second', 'first'] //Precisa percorrer o vetor para comparar.

  const ler = async () => {
    try {
      let resps = await AsyncStorage.getItem("resps");
      setLida(resps.split(';'))
    } catch (err) {
      console.log(err)
    }
  }

  if (lida.length === 0) ler()

  return (
    <View>
      {
        lida.map((r, index) => {
          return (
            <Text key={index}>Questão {index + 1} : {(r === vetor[index]) ? "Acertou" : 'Errou'}</Text>
          )
        })
      }
       </View>
  )
};
