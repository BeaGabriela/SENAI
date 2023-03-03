import { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';

import styles from '../../styles/styleGeral'

export default function RelatorioManutencao({ navigation }) {
    const [manutencao, setManutencao] = useState([])

    var usuario = localStorage.getItem('user')
    

    useEffect(() => {
        setInterval(() => {
            console.log('Atualizando lista')
            listarManutencao()
        }, 5000)
    }, [])


    const listarManutencao = () => {
        fetch('http://localhost:3000/operacoes')
            .then(res => { return res.json() })
            .then(data => {
                setManutencao(data)
            })
    }

    console.log(manutencao)
    

        // const concluir = (id, veiculo, motorista) => {
        //     listarOperacoes(),
        //     console.log(id, veiculo, motorista)

        //     const options = {
        //         method: 'PUT',
        //         headers: {
        //           Authorization: 'Bearer ' + usuario.token
        //         }
        //       };
              
        //       fetch(`http://localhost:3000/operacoes/${id}/${veiculo}/${motorista}`, options)
        //         .then(response => response.status)
        //         .then(response => {
        //             if(response === 200){
        //                 console.log('ok')
        //             }
        //         })
        // }

    return (
        <View >
            <View style={styles.headers}>
                <View style={styles.linha}>
                    <TouchableOpacity style={styles.btnRelatorio} onPress={()=>{
                        navigation.navigate('Home')
                    }}><Text>Manutenções</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.btnRelatorio} onPress={() => {
                        navigation.navigate('RelatorioManutencao')
                    }}><Text>Relátorios</Text></TouchableOpacity>
                </View>
            </View>

            <View>
                <Text style={styles.titulo}>Relatório de Manutenções</Text>
                <View>
                    {
                        manutencao.map((o, index) => {
                            return (
                                <ScrollView style={styles.view_Principal} key={index}>
                                    <Text>Id: {o.id}</Text>
                                    <Text>Veiculo: {o.veiculo}</Text>
                                    <Text>Motorista: {o.motorista}</Text>
                                    <Text>Data_saida: {o.data_saida}</Text>
                                    <Text>Descrição: {o.descricao}</Text>
                                    <Text>Data Retorno: {o.data_retorno}</Text>
                                    <TouchableOpacity style={styles.buttonAtualizar} onPress={() => {
                                        concluir(o.id, o.veiculo, o.motorista)
                                    }}><Text>Concluir</Text></TouchableOpacity>
                                </ScrollView>
                            )
                        })
                    }

                </View>
            </View>
        </View>
    )

}