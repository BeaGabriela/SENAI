import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { RadioButton } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';


import ButtonNext from '../../Componentes/ButtonComponents/ButtonNext'
import ButtonSalvar from '../../Componentes/ButtonComponents/ButtonSalvar'
import styles from '../style/styles'

export default function Primeira({ navigation }) {
  const [checked, setChecked] = React.useState('first');

  const salvar = async () => {
    try {
      await AsyncStorage.setItem('resps', checked);
    } catch (err) {
      console.log(err)
    }
  }

return (
  <View>
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
    <ButtonNext value="Next" onPress={() => {
      salvar(); 
      navigation.navigate("Second"); 
    }} />
  </View>
);
}
