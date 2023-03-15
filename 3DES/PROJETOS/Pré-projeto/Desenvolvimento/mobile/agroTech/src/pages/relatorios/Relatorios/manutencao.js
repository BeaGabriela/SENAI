import { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Modal, TextInput } from 'react-native';

import styles from '../../styles/styleGeral'

export default function RelatorioManutencao({ navigation }) {
    const [manutencao, setManutencao] = useState([])
    const [modalVisible, setModalVisible] = useState(false);
    const [value, setValue] = useState("");

    var usuario = localStorage.getItem('user')


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



    return (
        <View style={styles.view}>
            {/* <Modal
                animationType="slide"
                transparent={false}
                visible={modalVisible}>
                <View style={styles.centeredView}>
                    <Text style={styles.Alerta}>Gráfico</Text>
                    <TouchableOpacity style={styles.btnFechar} onPress={() => { setModalVisible(!modalVisible) }}>
                        <Text style={styles.textX}>X</Text>
                    </TouchableOpacity>
                </View>
            </Modal> */}
            <View style={styles.headers}>
                <View style={styles.linha}>
                    <TouchableOpacity style={styles.btnRelatorio} onPress={() => {
                        navigation.navigate('Home')
                    }}><Text>Menu</Text></TouchableOpacity>
                    {/* <TouchableOpacity style={styles.btnRelatorio} onPress={() => {
                        setModalVisible(!modalVisible)
                    }}><Text>Gráfico</Text></TouchableOpacity> */}
                </View>
            </View>

            <View>
                <Text style={styles.tituloMotorista}>Manutenções</Text>
                <TextInput placeholder='Digite uma data' style={styles.filtro} value={value} onChangeText={(val) => { setValue(val) }} />
                <View style={styles.scroll_operacoes}>
                    <ScrollView style={styles.scrollView}>
                        <View style={styles.lista_operacoes}>
                            {
                                manutencao.map((m, index) => {
                                    if (m.data_inicio.includes(value)) {
                                        if (m.data_fim != null) {
                                            var valor = m.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
                                            return (
                                                <View style={styles.view_Principal} key={index}>
                                                    <Text>Id: {m.id}</Text>
                                                    <Text>Veiculo: {m.veiculo}</Text>
                                                    <Text>Data Inicio: {m.data_inicio}</Text>
                                                    <Text>Valor: {valor}</Text>
                                                    <Text>Descrição: {m.descricao}</Text>
                                                    <Text>Data Fim: {m.data_fim}</Text>
                                                </View>
                                            )
                                        }
                                    }
                                })
                            }
                        </View>
                    </ScrollView>
                </View>
            </View>
        </View>
    )

}