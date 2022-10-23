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

  const cadastrar = () => {
    let Nfunc = {
      'nome': nome,
      'cargo': cargo
    }
    setLista([...lista, Nfunc]); //A ',' funciona para: Pegar todos os caracteres do vetor, e adicona mais um valor.
  //  console.log(...lista, {"nome": 'teste', "cargo": 'Programador'});
   //... -> Desmembra um vetor. Separa em objetos distintos. Funciona em Javascript.
    }
  }

  return (
    <View style={styles.container}>
      <Textinput placeholder="Nome do funcionario" onChangeText={(val) =>{setNome(val) }} /> 
      <Textinput placeholder="Cargo do funcionario" onChangeText={(val) =>{setCargo(val)}}/>
      <Button title='Cadastrar Funcionario'></Button>
      <ScrollView>
    {
      lista.map(funcionario => {
        return(
          <View>
            <Text>{funcionario.nome}</Text>
            <Text>{funcionario.cargo}</Text>
          </View>
        )
      })
    }
      </ScrollView>
    </View>
  );
