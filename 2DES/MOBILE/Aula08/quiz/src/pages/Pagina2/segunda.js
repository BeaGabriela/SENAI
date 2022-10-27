import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { RadioButton } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

import ButtonNext from '../../Componentes/ButtonComponents/ButtonNext'
import ButtonSalvar from '../../Componentes/ButtonComponents/ButtonSalvar'
import styles from '../style/styles'

export default function Second({ navigation }) {
  const [checked, setChecked] = React.useState('');
  const [validar, setValidar] = React.useState('');

  const salvar = async () => {
    try {
      let resps = await AsyncStorage.getItem('resps');

      await AsyncStorage.setItem('resps', resps + ";" + checked);
      //console.log(checked)
    } catch (err) {
      console.log(err)
    }
  }

  // const acertou = ()=>{
  //   console.log(checked ==='second')
  //   if(checked === 'second'){
  //     setValidar('Parabés! Você acertou!')
  //   }else{
  //     setValidar('Sinto muito. Não é essa a resposta.')
  //   }
  // }

  return (
    <View>
      <Text style={styles.text}>Quando acabou a II Guerra Mundial?</Text>
      <View>
        <Text>Em 1930</Text>
        <RadioButton
          value="first"
          status={checked === 'first' ? 'checked' : 'unchecked'}
          onPress={() => setChecked('first')}
        />
      </View>
      <View>
        <Text>Em 1945</Text>
        <RadioButton
          value="second"
          status={checked === 'second' ? 'checked' : 'unchecked'}
          onPress={() => setChecked('second')}
        />
      </View>
      {/* <Text style={styles.text}>{validar}</Text>
      <TouchableOpacity style={styles.validar} onPress={acertou} >Validar</TouchableOpacity> */}
      <ButtonNext value="Next" onPress={() => { salvar(); navigation.navigate("Terceira") }} />
    </View>
  );
};
