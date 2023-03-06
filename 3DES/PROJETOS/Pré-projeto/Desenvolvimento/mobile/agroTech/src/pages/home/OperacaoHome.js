import { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Modal } from 'react-native';

import styles from '../styles/styleGeral'

export default function Operacoes({ navigation }) {
    const [operacoes, setOperacoes] = useState([])
    const [modalVisible, setModalVisible] = useState(false);

    var usuario = JSON.parse(localStorage.getItem('user'))


    useEffect(() => {
        listarOperacoes()
        setInterval(() => {
            console.log('Atualizando lista')
            listarOperacoes()
        }, 5000)
    }, [])


    const listarOperacoes = () => {
        fetch('http://localhost:3000/operacoes')
            .then(res => { return res.json() })
            .then(data => {
                setOperacoes(data)
            })
    }


    const concluir = (id, veiculo, motorista) => {
        listarOperacoes(),
            console.log(id, veiculo, motorista)

        const options = {
            method: 'PUT',
            headers: {
                Authorization: 'Bearer ' + usuario.token
            }
        };

        fetch(`http://localhost:3000/operacoes/${id}/${veiculo}/${motorista}`, options)
            .then(response => response.status)
            .then(response => {
                console.log(response)
                if (response == 200) {
                    console.log('ok')
                } else {
                    console.log('deu ruim');
                }
            })
            .catch(err => console.error(err));
    }

    return (
        <View >
            <View style={styles.headers}>
                <View style={styles.linha}>
                    <TouchableOpacity style={styles.btnRelatorio} onPress={() => {
                        navigation.navigate('RelatorioOperacao')
                    }}><Text>Relátorios</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.btnRelatorio} onPress={() => {
                        navigation.navigate('HomeManutencao')
                    }}><Text>Manutenções</Text></TouchableOpacity>
                </View>
            </View>

            <View>
                <Text style={styles.titulo}>Operações em andamento</Text>
                <View style={styles.scroll_operacoes}>
                    <ScrollView style={styles.scrollView}>
                        <View style={styles.lista_operacoes}>
                            {
                                operacoes.map((o, index) => {
                                    return (
                                        <View style={styles.view_Principal} key={index}>
                                            <Text>Id: {o.id}</Text>
                                            <Text>Veiculo: {o.veiculo}</Text>
                                            <Text>Motorista: {o.motorista}</Text>
                                            <Text>Data_saida: {o.data_saida}</Text>
                                            <Text>Descrição: {o.descricao}</Text>
                                            <Text>Data Retorno: {o.data_retorno}</Text>
                                            <TouchableOpacity style={styles.buttonAtualizar} onPress={() => {
                                                concluir(o.id, o.veiculo, o.motorista)
                                            }}><Text>Concluir</Text></TouchableOpacity>
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