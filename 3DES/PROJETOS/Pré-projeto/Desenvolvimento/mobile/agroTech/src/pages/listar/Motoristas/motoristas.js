import { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';

import styles from '../../styles/styleGeral'

export default function Motoristas({ navigation }) {
    const [motoristas, setMotoristas] = useState([])

    var usuario = JSON.parse(localStorage.getItem('user'))
    

    useEffect(() => {
        setInterval(() => {
            console.log('Atualizando lista')
            listarMotoristas()
        }, 5000)
    }, [])


    //lISTAR
    const listarMotoristas = () => {
        fetch('http://localhost:3000/motoristas')
            .then(res => { return res.json() })
            .then(data => {
                setMotoristas(data)
            })
    }

    

    return (
        <View>
            <View style={styles.headers}>
                <View style={styles.linha}>
                    <TouchableOpacity style={styles.btnRelatorio} onPress={()=>{
                        navigation.navigate('CriarMotorista')
                    }}><Text>Novo+</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.btnRelatorio} onPress={() => {
                        navigation.navigate('ExcluirMotorista')
                    }}><Text>Excluir</Text></TouchableOpacity>
                </View>
            </View>

            <View>
                <Text style={styles.titulo}>Motoristas</Text>
                <View>
                    {
                        motoristas.map((o, index) => {
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