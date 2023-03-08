import { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { RadioButton, TextInput } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from '../.././pages/styles/styleGeral'
import ButtonConectar from '../../components/btnConectar/index';

export default function Login({ navigation }) {
    const [value1, setValue1] = useState('mario@gmail.com');
    const [value2, setValue2] = useState('mario123')
    const flag = false

    function validar(){
        const options = {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json'
            },
            body: `{"email":"${value1}","senha":"${value2}"}`
        };
    
        fetch('http://localhost:3000/usuario/login', options)
            .then(response => response.json())
            .then(response =>{
                if(value1 != undefined && value2 != undefined){
                    if(response.niveis.nivel == 'Gerencial'){
                        localStorage.setItem('user', JSON.stringify(response))
                        navigation.navigate('Home')
                    }
                }
            })
            
    }

    return (
        <View style={styles.view}>
            <View style={styles.headers}>
                <Text style={styles.textTitulo}>AgroTech</Text>
                <Image style={styles.office} source={require('../../../assets/office.png')}  />
                <View style={styles.view_main}>
                    <TextInput style={styles.inputCadastrar}  placeholder='Informe o email' value={value1} onChangeText={(val) => { setValue1(val) }} />
                    <TextInput style={styles.inputCadastrar}  value={value2} onChangeText={(val1) => { setValue2(val1) }} placeholder='Informe sua senha'  />
                    <ButtonConectar value="Acessar" onPress={() => {validar()}}/>
                </View>
            </View>
        </View>
    )

}