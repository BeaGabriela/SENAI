import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { RadioButton } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

import ButtonNext from '../../Componentes/ButtonComponents/ButtonNext'
import ButtonSalvar from '../../Componentes/ButtonComponents/ButtonSalvar'
import styles from '../style/styles'

export default function Second({navigation }){
  const [checked, setChecked] = React.useState('first');

  const salvar = async () => {
    try {
      await AsyncStorage.setItem('pergunta2', checked);
      console.log(checked)
    } catch (err) {
      console.log(err)
    }
  }

  return(
    <View>
      <Text style={styles.text}>Quando acabou a II Guerra Mundial?</Text>
      <View>
        <Text>Em 1930</Text>
      <RadioButton
        value="first"
        status={ checked === 'first' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('first')}
      />
      </View>
      <View>
        <Text>Em 1945</Text>
       <RadioButton
        value="second"
        status={ checked === 'second' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('second')}
      />
      </View>
      <ButtonSalvar value="salvar" onPress={() => { salvar() }}/>
      <ButtonNext value="Next" onPress={() =>{ navigation.navigate("Terceira")}}/>
    </View>
  );
};
