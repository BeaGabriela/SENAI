import { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';

import styles from '../styles/styleGeral'

export default function HomeManutencao({ navigation }) {
    const [manutencao, setManutencao] = useState([])

    var usuario = JSON.parse(localStorage.getItem('user'))


    useEffect(() => {
        listarManutencao()
        setInterval(() => {
            console.log('Atualizando lista')
            listarManutencao()
        }, 5000)
    }, [])


    const listarManutencao = () => {
        fetch('http://localhost:3000/manutencao')
            .then(res => { return res.json() })
            .then(data => {
                setManutencao(data)
            })
    }

    console.log(manutencao)

    const concluir = (id, veiculo) => {
        listarManutencao(),
            console.log(id, veiculo)

        const options = {
            method: 'PUT',
            headers: {
                Authorization: 'Bearer ' + usuario.token
            }
        };

        fetch(`http://localhost:3000/manutencao/${id}/${veiculo}`, options)
            .then(response => response.status)
            .then(response => {
                if (response === 200) {
                    console.log('ok')
                }
            })
    }

    return (
        <View>
            <View style={styles.headers}>
                <View style={styles.linha}>
                    <TouchableOpacity style={styles.btnRelatorio} onPress={() => {
                        navigation.navigate('RelatorioManutencao')
                    }}><Text>Relátorios</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.btnRelatorio} onPress={() => {
                        navigation.navigate('Home')
                    }}><Text>Home</Text></TouchableOpacity>
                </View>
            </View>

            <Text style={styles.titulo}>Manutencao em andamento</Text>
            <View style={styles.scroll_operacoes}>
                <ScrollView style={styles.scrollView}>
                    <View style={styles.lista_operacoes}>
                        {
                            manutencao.map((o, index) => {
                                return (
                                    <View style={styles.view_Principal} key={index}>
                                        <Text>Id: {o.id}</Text>
                                        <Text>Veiculo: {o.veiculo}</Text>
                                        <Text>Data inicio: {o.data_inicio}</Text>
                                        <Text>Valor: {o.valor}</Text>
                                        <Text>Descrição: {o.descricao}</Text>
                                        <Text>Data Fim: {o.data_fim}</Text>
                                        <TouchableOpacity style={styles.buttonAtualizar} onPress={() => {
                                            concluir(o.id, o.veiculo)
                                        }}><Text>Concluir</Text></TouchableOpacity>
                                    </View>
                                )
                            })
                        }

                    </View>
                </ScrollView>
            </View>
        </View>
    )

}