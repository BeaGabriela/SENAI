import { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Modal, ScrollView, TextInput } from 'react-native';

import styles from '../../styles/styleGeral'

export default function RelatoriosVeiculos({ navigation }) {
    const [veiculos, setVeiculos] = useState([])
    const [modalVisible, setModalVisible] = useState(false);
    const [data, setDate] = useState('');

    var usuario = localStorage.getItem('user')


    useEffect(() => {
        listarVeiculos()
        setInterval(() => {
            console.log('Atualizando lista')
            listarVeiculos()
        }, 5000)
    }, [])


    const listarVeiculos = () => {
        fetch('http://localhost:3000/veiculos')
            .then(res => { return res.json() })
            .then(data => {
                setVeiculos(data)
            })
    }



    return (
        <View style={styles.view}>
            <View style={styles.headers}>
                <View style={styles.linha}>
                    <TouchableOpacity style={styles.btnRelatorio} onPress={() => {
                        navigation.navigate('Home')
                    }}><Text>Menu</Text></TouchableOpacity>
                </View>
            </View>

            <View>
                <Text style={styles.tituloMotorista}>Veiculos</Text>
                <TextInput placeholder='filtrar por data' style={styles.filtro} onChangeText={(val) => { setDate(val) }} />
                <View style={styles.scroll_operacoes}>
                    <ScrollView style={styles.scrollView}>
                        <View style={styles.lista_operacoes}>
                            {
                                veiculos.map((v, index) => {
                                    return (
                                        <View style={styles.view_Motoristas} key={index}>
                                            <Text>Id: {v.id}</Text>
                                            <Text>Placa: {v.placa}</Text>
                                            <Text>Tipo: {v.tipo} - {v.tipos.tipo}</Text>
                                            <Text>Modelo: {v.modelo}</Text>

                                        </View>
                                    )

                                })
                            }
                        </View>
                    </ScrollView>
                </View>
            </View>
        </View>
    )

}