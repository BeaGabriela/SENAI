import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const [info, setInfo] = useState("")
  const [cargo, setCargo] = useState("")
  const [salario, setSalario] = useState("")
  const [lida, setLida] = useState("")

  const salvar = async () => {
    try {
      await AsyncStorage.setItem('data', info);
      await AsyncStorage.setItem('cargo', cargo);
      await AsyncStorage.setItem('salario', salario);

      let informacoes = {
        'nome' : info,
        'cargo': cargo,
        'salario': salario
      }
      await AsyncStorage.setItem('informacoes', JSON.stringify(informacoes));
      setInfo("");
      setCargo("");
      setSalario("");

    } catch (err) {
      console.log(err)
    }
  }


  const ler = async () => {
    try {
     let data = await AsyncStorage.getItem('informacoes');
      setLida(data)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <View style={styles.container}>
      <TextInput value={info} placeholder='Nome' onChangeText={(val) => { setInfo(val) }} />
      <TextInput value={cargo} placeholder='Cargo' onChangeText={(val1) => { setCargo(val1) }} />
      <TextInput value={salario} placeholder='Salário' onChangeText={(val2) => { setSalario(val2) }} />
      <Button title='Salvar' onPress={() => { salvar() }} />
      <Button title='Ler' onPress={() => { ler() }} />
      <Text>{lida}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


// nome
// cargo
// salario
