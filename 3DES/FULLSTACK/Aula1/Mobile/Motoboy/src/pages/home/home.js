import { useState, useEffect } from 'react';
import { View, Text, Button, TouchableOpacity, Image, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


import styles from '../../style/style'

export default function Home() {
    const [entregadores, setEntregadores] = useState([])

    useEffect( () => {  //Não pode esquecer de colocar o vetor para evitar um loop infinito.
        listarPedidos()
    }, [])

    const listarPedidos = async () => {
        let id = await AsyncStorage.getItem("data");
        fetch('http://localhost:3000/pedido/' + id)
            .then(res => { return res.json()})
            .then(data => {
                console.log(data)
                setEntregadores(data)
            })
    }

    return (
        <View style={styles.view_Principal}>
            {
                entregadores.map((item, index) => {
                    var datas = item.data.toLocaleString('pt-BR', { timeZone: 'UTC' }).split('T')[0]
                    
                    return (
                        <View style={styles.view_geral}>
                            <View style={styles.view_coznha}>
                                <Text>A caminho!</Text>
                                <Text>Entregador: {item.id_entregador}</Text>
                            </View>
                            <View>
                                <View>
                                    <Text>Id: {item.id_pedido}</Text>
                                    <Text>Cliente: {item.cliente}</Text>
                                    <Text>Endereço: {item.endereco}</Text>
                                    <Text>Horario: {item.hora_pedido}</Text>
                                    <Text>Produto: {item.produto}</Text>
                                    <Text>Data: {datas}</Text>
                                    <Text>Entrega: {item.hora_entrega}</Text>
                                </View>
                                <TouchableOpacity>Pedido Entregue</TouchableOpacity>
                            </View>
                        </View>
                    )
                })
            }
        </View>
    )

}