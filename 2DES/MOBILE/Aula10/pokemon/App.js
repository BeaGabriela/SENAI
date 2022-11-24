import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity } from 'react-native';


export default function App() {
  const [posts, setPosts] = useState() //O useState não pode começar vazio. Por ser leitor de vetor, tem de ter um vetor.
  const [numero, setNumero] = useState(null)


  const procurar = (numero) => {
    //useEffect(() => { //Não pode esquecer de colocar o vetor para evitar um loop infinito.
      fetch(`https://pokeapi.co/api/v2/pokemon/${numero}`)
        .then(res => { return res.json() })
        .then(pokemon => {
          setPosts(pokemon)
        })
    //}, [])
  }

  return (
    //Criar um textInput para receber um valor, e setar esse valor no fetch. Assim, ele procura de acordo com o parametro.
    <View style={styles.container}>
      {
        (posts !== undefined) ?
          <View>
            <Text>{posts.name}</Text>
            {<Image style={styles.img} source={{ uri: posts.sprites.front_default }} />}
          </View>
          :
          <View>
            <Text>Carregando...</Text>
          </View>
      }
      <Text>Digite um número para procurar um Pokemon:</Text>
      <TextInput style={styles.input} onChangeText={(v) => { setNumero(v) }}></TextInput>
      <TouchableOpacity style={styles.btn} onPress={() => {
        // fetch(`https://pokeapi.co/api/v2/pokemon/${numero}`)
        //   .then(res => { return res.json() })
        //   .then(pokemon => {
        //     setPosts(pokemon)
        //   })
        procurar(numero);
      }}>
        <Text style={styles.txt}>Procurar</Text>
      </TouchableOpacity>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    backgroundColor: '#85EBE5'
  },

  img: {
    width: '80px',
    height: '85px'
  },

  input: {
    borderRadius: '5px',
    border: '1px solid black'
  },

  btn: {
    borderRadius: '8px',
    backgroundColor: '#ffffff',
    width: '19vw',
    height: '4vh',
  },

  txt: {
    textAlign: 'center',
    paddingTop: '8px',
    color: '#00CED1'
  }







});