import { useState, useEffect } from 'react';
import { View, Text, Button, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { AsyncStorage } from 'react-native';
import style from '../../style/style';

import styles from '../../style/style'

export default function Home({ navigation }) {
    const [entregadores, setEntregadores] = useState([])
    const [e, setE] = useState('')


    useEffect(() => { //Não pode esquecer de colocar o vetor para evitar um loop infinito.
        fetch('http://localhost:3000/pedido')
            .then(res => { return res.json() })
            .then(data => {
                setEntregadores(data)
            })
    }, [])


    return (
        <View>
            {
                entregadores.map((item, index) => {
                    const data = async () => {
                        await AsyncStorage.getItem("data");
                       console.log(data)
                    }
                    if (item.id_entregador == e.id_entregadores) {
                        return (
                            <View style={styles.viewPrincioal}>
                                <View>
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
                                        <Text>Data: {item.data}</Text>
                                        <Text>Entrega: {item.hora_entrega}</Text>
                                    </View>
                                    <TouchableOpacity>Pedido Entregue</TouchableOpacity>
                                </View>
                            </View>
                        )
                    }


                })
            }


        </View>
    )

}