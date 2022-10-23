import { useState } from 'react';
import { View, TouchableOpacity, Textinput, ScrollView, Text } from 'react-native';

//useState --> é como um gatilho, toda vez que ele sofrer uma alteração, ele vai recarregar uma página.
export default function App() {
  const [nome, setNome] = useState(""); //nome - get, e o setNome é o set, sendo assim, ele que vai ser responsavel por modificar o nome.
  const [cargo, setCargo] = useState(""); //Aqui funciona igual ao nome
  const [lista, setLista] = useState([
    {
      "nome": "Fulano",
      "cargo": "Programador"
    },
    {
      "nome": "Beltrano",
      "cargo": "Analista"
    }
  ]);

  return (
    <View style={styles.container}>
      <Textinput placeholder="Nome do funcionario" onChangeText={(val) =>{setNome(val) }} /> 
      
      <Textinput placeholder="Cargo do funcionario" onChangeText={(val) =>{setCargo(val)}}/>
      <Button title='Cadastrar Funcionario'></Button>
      <ScrollView>
    {
      lista.map((funcionario, indice))
    }
      </ScrollView>
    </View>
  );
};