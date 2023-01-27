import { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';

import styles from '../style/style.new'

export default function Nova({ }) {
    const [neww, setNew] = useState([])
    const [value, setValue] = useState('')

    useEffect(() => {
        setInterval(() => {
            console.log('Atualizando lista')
            cadastrar()
        }, 1500)
    }, [])


    const cadastrar = () => {
        fetch('http://localhost:3000/cadastrar')
            .then(res => { return res.json() })
            .then(data => {
                setNew(data)
            })
    }

    const cadastrarNova = () => {
        cadastrar()
        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: `{"descricao": "${value}"}`
        };

        fetch('http://localhost:3000/cadastrar', options)
            .then(res => {
                if (res.status === 201) {
                    console.log('Cadastrado!')
                    window.location.reload()
                }
            })
    }

    return (
        <View style={styles.viewPrincipalNova}>
            <Text style={styles.titulo}>Digite a tarefa que deseja programar: </Text>
            <TextInput style={styles.input} placeholder='Digite a tarefa' value={value} onChangeText={(val) => { setValue(val) }}></TextInput>
            <TouchableOpacity style={styles.button} onPress={() => {
                cadastrarNova()
            }}>Adicionar</TouchableOpacity>

        </View>
    )

}
