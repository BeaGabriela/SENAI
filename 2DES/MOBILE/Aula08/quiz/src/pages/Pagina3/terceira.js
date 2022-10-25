import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { RadioButton } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';


import ButtonSalvar from '../../Componentes/ButtonComponents/ButtonSalvar'
import ButtonNext from '../../Componentes/ButtonComponents/ButtonNext'
import styles from '../style/styles'

export default function terceira({navigation }){
  const [checked, setChecked] = React.useState('first');

  const salvar = async () => {
    try {
      await AsyncStorage.setItem('pergunta3', checked);
      console.log(checked)
    } catch (err) {
      console.log(err)
    }
  }

  return(
    <View>
      <Text style={styles.text}>O que fazer hoje?</Text>
      <View>
        <Text>Estudar</Text>
      <RadioButton
        value="first"
        status={ checked === 'first' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('first')}
      />
      </View>
      <View>
        <Text>Dormir</Text>
       <RadioButton
        value="second"
        status={ checked === 'second' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('second')}
      />
      </View>
      <ButtonSalvar value="salvar" onPress={() => { salvar() }}/>
      <ButtonNext value="Next" onPress={() =>{ 
        salvar();
        navigation.navigate("Quarta", {"info":checked});
      }}/>
    </View>
  );
};
