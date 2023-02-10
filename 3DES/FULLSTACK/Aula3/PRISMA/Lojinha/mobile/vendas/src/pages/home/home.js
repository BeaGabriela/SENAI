import { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';

import styles from '../styles/style'

export default function home({ navigation }) {
    const [vendas, setVendas] = useState([])
    const [id_v, setIdV] = useState('')
    const [id_p, setIdP] = useState('')
    const [qtd, setQtd] = useState('')

    useEffect(() => {
        setInterval(() => {
            console.log('Atualizando lista')
            listarVendas()
        }, 900000)
    }, [])

    const listarVendas = () => {
        fetch('http://localhost:3000/vendas')
            .then(res => { return res.json() })
            .then(data => {
                setVendas(data)
            })
    }

    const cadastrar = () => {
        listarVendas()

        var json = {
            "id_vendedores": Number(id_v),
            "detalhes": [
                {
                    "id_produto": Number(id_p),
                    "quantidade": Number(qtd)
                }
            ]
        }

        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(json)
        }

        fetch('http://localhost:3000/vendas', options)
            .then(res => {
                if (res.status === 201) {
                    console.log('Cadastrado!')
                    window.location.reload()
                }
            })
    }


    return (
        <View style={styles.viewGeral}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.btn} onPress={() => {
                    navigation.navigate('Vendas')
                }}><Text>Listar</Text></TouchableOpacity>
            </View>
            <View style={styles.nav}>
                <Text style={styles.titulo}>Digite uma venda que deseja cadastrar: </Text>
                <TextInput style={styles.input} placeholderTextColor="#d3d3d3" placeholder='Digite o id do vendedor' value={id_v} onChangeText={(val) => { setIdV(val) }}></TextInput>
                <TextInput style={styles.input} placeholderTextColor="#d3d3d3" placeholder='Digite o id do produto' value={id_p} onChangeText={(val1) => { setIdP(val1) }}></TextInput>
                <TextInput style={styles.input} placeholderTextColor="#d3d3d3" placeholder='Digite a quantidade' value={qtd} onChangeText={(val2) => { setQtd(val2) }}></TextInput>
                <TouchableOpacity style={styles.btnCadastrar} onPress={() => { cadastrar() }}><Text>Cadastrar</Text></TouchableOpacity>
            </View>
        </View>
    )
}
