import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { RadioButton } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';


import ButtonSalvar from '../../Componentes/ButtonComponents/ButtonSalvar'
import ButtonNext from '../../Componentes/ButtonComponents/ButtonNext'
import styles from '../style/styles'

export default function Quinta({ navigation }) {
  const [checked, setChecked] = React.useState('first');

  const salvar = async () => {
    try {
      let resps = await AsyncStorage.getItem('resps');

      await AsyncStorage.setItem('resps', resps + ";" + checked);
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <View>
      <Text style={styles.text}>Já leu hoje?</Text>
      <View>
        <Text>Sim</Text>
        <RadioButton
          value="first"
          status={checked === 'first' ? 'checked' : 'unchecked'}
          onPress={() => setChecked('first')}
        />
      </View>
      <View>
        <Text>Não</Text>
        <RadioButton
          value="second"
          status={checked === 'second' ? 'checked' : 'unchecked'}
          onPress={() => setChecked('second')}
        />
      </View>
      <ButtonNext value="Next" onPress={() => { salvar(); navigation.navigate("resposta") }} />
    </View>
  );
};
