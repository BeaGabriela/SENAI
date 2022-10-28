import { useState } from 'react';
import { View, Text, Button, TouchableOpacity, Image } from 'react-native';
import { RadioButton, TextInput } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from '../../style/style'
import ButtonConectar from '../../components/ButtonConectar/index';

export default function Login({ navigation }) {
    const [value1, setValue1] = useState('')
    const [value2, setValue2] = useState('')
    let flag = false
    const img = require('../../../assets/assets/dog.png')

    const data = [
        {
            "email": "fulano@gmail.com",
            "senha": "umdoistresquatro",
        },
        {
            "email": "beltrano@ig.com.br",
            "senha": "s3nh4",
        }
    ]

    return (
        <View style={{ backgroundColor: '#505050', height: '100%' }}>
            <View style={{ marginTop: '30%' }}>
                <Image source={{ uri: img }} style={styles.img} />
                <View>
                    <TextInput style={styles.input} placeholder='Informe o email' value={value1} onChangeText={(val) => { setValue1(val) }} />
                    <TextInput style={styles.input} secureTextEntry={true} placeholder='Informe sua senha' value={value2} onChangeText={(val2) => { setValue2(val2) }} />
                    <ButtonConectar value='Conectar' onPress={() => {
                        data.map((item, index) => {
                            if (value1 == item.email && value2 == item.senha) {
                                flag = true
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

