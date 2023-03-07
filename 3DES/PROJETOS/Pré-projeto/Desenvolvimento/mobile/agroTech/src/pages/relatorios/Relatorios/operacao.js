import { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Modal, TextInput } from 'react-native';

import styles from '../../styles/styleGeral'

export default function RelatorioOperacao({ navigation }) {
    const [operacoes, setOperacoes] = useState([])
    const [modalVisible, setModalVisible] = useState(false);
    const [filtro, setFiltro] = useState('');

    var usuario = localStorage.getItem('user')


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



    return (
        <View >
            <Modal
                animationType="slide"
                transparent={false}
                visible={modalVisible}>
                <View style={styles.centeredView}>
                    <Text style={styles.Alerta}>Gráfico</Text>
                    <TouchableOpacity style={styles.btnFechar} onPress={() => { setModalVisible(!modalVisible) }}>
                        <Text style={styles.textX}>X</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
            <View style={styles.headers}>
                <View style={styles.linha}>
                    <TouchableOpacity style={styles.btnRelatorio} onPress={() => {
                        navigation.navigate('Home')
                    }}><Text>Menu</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.btnRelatorio} onPress={() => {
                        setModalVisible(!modalVisible)
                    }}><Text>Relatórios</Text></TouchableOpacity>
                </View>
            </View>

            <View>
                <Text style={styles.tituloMotorista}>Operações</Text>
                <TextInput placeholder='Data' style={styles.filtro} value={filtro} onChangeText={(val) => { setFiltro(val) }} />
                <View style={styles.scroll_operacoes}>
                    <ScrollView style={styles.scrollView}>
                        <View style={styles.lista_operacoes}>
                            {
                                operacoes.map((o, index) => {
                                    if (o.data_saida.includes(filtro)) {
                                        return (
                                            <View style={styles.view_Principal} key={index}>
                                                <Text>Id: {o.id}</Text>
                                                <Text>Veiculo: {o.veiculo}</Text>
                                                <Text>Motorista: {o.motorista}</Text>
                                                <Text>Data saida: {o.data_saida}</Text>
                                                <Text>Descrição: {o.descricao}</Text>
                                                <Text>Data Retorno: {o.data_retorno}</Text>

                                                <TouchableOpacity style={styles.buttonAtualizar} onPress={() => {
                                                    Concluir(o.id, o.veiculo, o.motorista)
                                                }}><Text>Concluir</Text></TouchableOpacity>
                                            </View>
                                        )
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