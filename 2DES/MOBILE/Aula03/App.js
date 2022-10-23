import { useState } from 'react';
import { View, TouchableOpacity, Text, TextInput, StyleSheet } from 'react-native';


export default function App() {
  const [value, setValue] = useState("");
  const [value1, setValue1] = useState("");
  const [calc, setCalc] = useState("");
  const [res, setRes] = useState("");

  return (

    <View style={style.container} >
      <View>
        <Text>Digite um Número:</Text>
        <TextInput style={style.input} value={value} onChangeText={(val) => { setValue(val) }} />
        <Text>Digite outro Número:</Text>
        <TextInput style={style.input} value={value1} onChangeText={(val1) => { setValue1(val1) }} />
      </View>
      {/* onChangeText quando sofre uma alteração, ele se altera? */}
      <View style={style.botoes}>

        <TouchableOpacity style={style.button} onPress={() => {
          setCalc(Number(value) + Number(value1));
          
        }}>
          <Text style={style.sinais}>+</Text>
        </TouchableOpacity>

        <TouchableOpacity style={style.button} onPress={() =>{
          setCalc(Number(value) - Number(value1));
        }}>
          <Text style={style.sinais}>-</Text>
        </TouchableOpacity>


        <TouchableOpacity style={style.button} onPress={() => {
        setCalc(Number(value) / Number(value1));
        }}>
          <Text style={style.sinais}>/</Text>
        </TouchableOpacity>


        <TouchableOpacity style={style.button} onPress={() =>{
          setCalc(Number(value) * Number(value1));
        }}>
          <Text style={style.sinais}>*</Text>
        </TouchableOpacity>

      </View>

      <View>
        <TouchableOpacity style={style.calcular} onPress={() => {
          setRes(calc);
          }}>
          <Text>Calcular</Text>
        </TouchableOpacity>
        <View style={style.result}>
        <Text>O resultado final é: {res}</Text> 
        </View>
      </View>
      {/* <Text style={style.calc} >A calc do {value} com o {value1} é igual a: {calc}</Text> */}
    </View>

  );
}


const style = StyleSheet.create({
  container: {
    border: '1px solid black',
    flex: 1,
  },

  input: {
    border: '1px solid black',
  },

  button: {
    border: '2px solid black',
    width: '20px',
    margin: '10px'

  },

  botoes: {
    display: 'flex',
    flexDirection: 'row',
    margin: '10px'
  },

  sinais: {
    textAlign: 'center'
  },
  result: {
    border: '2px solid black',
    width: '60%',
    height: '30vh',
    textAlign: 'center',
    justifyContent: 'center',
  },
  calcular: {
    border: '1px solid black',
    width: '45vw',
    alignItems: 'center',
  },
  telas: {
    margin
  }

});