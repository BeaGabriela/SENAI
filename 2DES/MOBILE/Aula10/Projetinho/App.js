import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button, Image } from 'react-native';


export default function App() {
  const [posts, setPosts] = useState([]) //O useState não pode começar vazio. Por ser leitor de vetor, tem de ter um vetor.

  useEffect(() => { //Não pode esquecer de colocar o vetor para evitar um loop infinito.
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => { return res.json() })
      .then(data => {
        setPosts(data)
      })
  }, [])

  return (
    <View style={styles.container}>
      {
        posts.map((post, index) => {
          return (
            <View key={index}>
              <Text>{post.title}</Text>
              <Image style={styles.img}
               source={{uri: post.url}} />
            </View>
          )
        })
      }
    </View>
  );
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
    height: '50px',
  

  }
});
