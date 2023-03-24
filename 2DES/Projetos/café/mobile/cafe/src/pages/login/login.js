import { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { RadioButton, TextInput } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from '../.././styles/stylesGeral'
import ButtonConectar from '../../components/btnConectar/index';

export default function Login({ navigation }) {
    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('')

    function validar() {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: `{"email":"${value1}","senha":"${value2}"}`
        };

        fetch('http://localhost:3000/usuario/login', options)
            .then((response) => {
                if (response.status != 200) {
                    window.location.reload()
                } else {
                    return response.json()
                }
            })
            .then((resp) => {
                if (value1.length == 0 && value2 == 0) {
                    console.log('preencher')
                } else if (value1 != undefined && value2 != undefined) {
                        AsyncStorage.setItem('user', JSON.stringify(resp))
                        navigation.navigate('Home')
                
                }
            })
    }




    return (
        <View style={styles.view}>
            <View style={styles.headers}>
                <Text style={styles.textTitulo}>Café</Text>
                {/* <Image style={styles.office} source={require('../../../assets/office.png')} /> */}
                <View style={styles.view_main}>
                    <TextInput style={styles.inputCadastrar} placeholder='Informe o email' value={value1} onChangeText={(val) => { setValue1(val) }} />
                    <TextInput style={styles.inputCadastrar} secureTextEntry={true} value={value2} onChangeText={(val1) => { setValue2(val1) }} placeholder='Informe sua senha' />
                    <ButtonConectar value="Acessar" onPress={() => { validar() }} />
                </View>
            </View>
        </View>
    )

}