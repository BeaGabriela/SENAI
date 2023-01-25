import { useState, useEffect } from 'react';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import {  TextInput } from 'react-native-paper';
import {AsyncStorage} from 'react-native';

import styles from '../../style/style'
import ButtonConectar from '../../components/Button/button';

export default function Login({ navigation }) {
    const [value1, setValue1] = useState('')
    const [value2, setValue2] = useState('')
    const [posts, setPosts] = useState([])
    let flag = false

    useEffect(() => { //Não pode esquecer de colocar o vetor para evitar um loop infinito.
        fetch('http://localhost:3000/entregadores')
          .then(res => { return res.json() })
          .then(data => {
            setPosts(data)
          })
      }, [])

    return (
        <View style={{ backgroundColor: '#505050', height: '100%' }}>
            <View style={{ marginTop: '30%' }}>
                <View>
                    <TextInput style={styles.input} placeholder='Informe o email' value={value1} onChangeText={(val) => { setValue1(val) }} />
                    <TextInput style={styles.input} secureTextEntry={true} placeholder='Informe sua senha' value={value2} onChangeText={(val2) => { setValue2(val2) }} />
                    <ButtonConectar value='Conectar' onPress={() => {
                        posts.map((post, index) => {
                            if (value1 == post.email && value2 == post.senha) {
                                console.log(post)
                                flag = true
                               async () =>{
                                await AsyncStorage.setItem('data', post.id_entregador);
                               
                               }
                                navigation.navigate('Home')
                            }
                        })
                        if (!flag) console.log('Erro')
                    }} />
                </View>
            </View>
        </View>
    )

}