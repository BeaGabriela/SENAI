import { useState, useEffect } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';

import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from '../../style/style'

export default function Login({ navigation }) {
    const [value1, setValue1] = useState('')
    const [value2, setValue2] = useState('')
    const [posts, setPosts] = useState([])
    let flag = false

    useEffect(() => { //Não pode esquecer de colocar o vetor para evitar um loop infinito.
        fetch('http://localhost:3000/logar')
            .then(res => { return res.json() })
            .then(data => {
                setPosts(data)
            })
    }, []);


    const salvar = async (data) => {
        await AsyncStorage.setItem('data', data);

    }

    return (
        <View style={{ backgroundColor: '#505050', height: '100%' }}>
            <View style={{ marginTop: '30%' }}>
                <View>
                    <TextInput style={styles.input} placeholder='Informe o email' value={value1} onChangeText={(val) => { setValue1(val) }} />
                    <TextInput style={styles.input} secureTextEntry={true} placeholder='Informe sua senha' value={value2} onChangeText={(val2) => { setValue2(val2) }} />
                    <TouchableOpacity value='Conectar' onPress={() => {
                    }}></TouchableOpacity>
                </View>
            </View>
        </View>
    )

}