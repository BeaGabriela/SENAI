import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { RadioButton } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';


import ButtonNext from '../../Componentes/ButtonComponents/ButtonNext'
import styles from '../style/styles'

export default function Primeira({ navigation }) {
  const [checked, setChecked] = React.useState('');
  const [validar, setValidar] = React.useState('');
  

  const salvar = async () => {
    try {
      await AsyncStorage.setItem('resps', checked);
    } catch (err) {
      console.log(err)
    }
  }

  // const acertou = ()=>{
  //   console.log(checked ==='first')
  //   if(checked === 'first'){
  //     setValidar('Parabés! Você acertou!')
  //   }else{
  //     setValidar('Sinto muito. Não é essa a resposta.')
  //   }
  // }

  return (
    <View style={styles.fundo}>
      <Text style={styles.text}>Quem é considerado o Rei do Rock?</Text>
      <View>
        <Text style={styles.respostas}>Elvis Presley</Text>
        <RadioButton
          value="first"
          status={checked === 'first' ? 'checked' : 'unchecked'}
          onPress={() => setChecked('first')}
        />
      </View>
      <View>
        <Text>Micheal Jackson</Text>
        <RadioButton
          value="second"
          status={checked === 'second' ? 'checked' : 'unchecked'}
          onPress={() => setChecked('second')}
        />
      </View>
      {/* <Text style={styles.text}>{validar}</Text>
      <TouchableOpacity style={styles.validar} onPress={acertou} >Validar</TouchableOpacity> */}
      <ButtonNext value="Next" onPress={() => {
        salvar();
        navigation.navigate("Second");
      }} />
    </View>
  );
}
