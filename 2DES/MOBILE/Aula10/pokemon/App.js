import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button, Image } from 'react-native';


export default function App() {
  const [posts, setPosts] = useState() //O useState não pode começar vazio. Por ser leitor de vetor, tem de ter um vetor.
  const [numero, setNumero] = useState('') 

  useEffect(() => { //Não pode esquecer de colocar o vetor para evitar um loop infinito.
    fetch('https://pokeapi.co/api/v2/pokemon/40')
      .then(res => { return res.json() })
      .then(pokemon => {
        // console.log(pokemon)
        setPosts(pokemon)
      })
  })

  return (
    //Criar um textInput para receber um valor, e setar esse valor no fecth. Assim, ele prociura de acordo com o parametro.
    <View style={styles.container}>
     
      {
        (posts !== undefined) ?
          <View>
            <Text>{posts.name}</Text>
            <Image style={styles.img} source={{ uri: posts.sprites.front_default}} />
          </View>
          :
          <View>
            <Text>Carregando...</Text>
          </View>
      }
      {/* {
        posts.results.map((post, index) => {
          return(
            <View key={index}>
              <Text>{post.name}</Text>
              <Image style={styles.img} source={{uri:post.url}} />

            </View>
          )
        })
      } */}
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: '50px',
    height: '50px'

  }
});