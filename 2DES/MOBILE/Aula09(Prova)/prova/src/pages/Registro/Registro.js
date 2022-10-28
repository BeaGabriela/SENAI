import { useState } from 'react';
import { View, Image, TextInput, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from '../../style/style'
import ButtonRegistrar from '../../components/btnRegistrar/btnRegistrar';



export default function Registro({ route }) {
    const [value1, setValue1] = useState('')
    const [value2, setValue2] = useState('')
    const [value3, setValue3] = useState('')
    const [value4, setValue4] = useState('')

    var dados = {
        'PET': value1,
        'Veterinário': value2,
        'Vacina': value3,
        'Data': value4
    }


    const salvar = async () => {
        try {
            await AsyncStorage.setItem('data', JSON.stringify(dados) );
            console.log(dados)    
        } catch (err) {
            console.log(err)
        }
    }
   
   

    console.log(dados)

    return (
        <View style={{ backgroundColor: '#505050', height: '100%' }}>
            <View>
                <TextInput style={styles.input2} placeholder='Nome do pet' value={value1} onChangeText={(val) => { setValue1(val) }} placeholderTextColor={"#00000077"} />
                <TextInput style={styles.input2} placeholder='Nome do médico veterinário' value={value2} onChangeText={(val2) => { setValue2(val2) }} placeholderTextColor={"#00000077"} />
                <TextInput style={styles.input2} placeholder='Nome da vacina' value={value3} onChangeText={(val3) => { setValue3(val3) }} placeholderTextColor={"#00000077"} />
                <TextInput style={styles.input2} placeholder='Data da aplicação' value={value4} onChangeText={(val4) => { setValue4(val4) }} placeholderTextColor={"#00000077"} />
                <ButtonRegistrar value='Registrar' onPress={() => { salvar() }} />
            </View>
        </View>
    )

 

}