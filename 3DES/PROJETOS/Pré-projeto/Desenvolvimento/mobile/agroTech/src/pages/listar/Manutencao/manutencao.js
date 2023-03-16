import { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Modal, TextInput, Image } from 'react-native';


import styles from '../../styles/styleGeral'

import ButtonConectar from '../../../components/btnConectar/index';

export default function ManutencaoListar({ navigation }) {
    const [manutencao, setManutencao] = useState([])
    const [modalVisible, setModalVisible] = useState(false);
    const [filtro, setFiltro] = useState('')
    const [value, setValue] = useState('')
    const [value1, setValue1] = useState('')
    const [value2, setValue2] = useState('')


    var usuario = JSON.parse(localStorage.getItem('user'))


    useEffect(() => {
        listarManutencao()
        setInterval(() => {
            console.log('Atualizando lista')
            listarManutencao()
        }, 5000)
    }, [])


    //LISTAR
    const listarManutencao = () => {
        fetch('http://localhost:3000/manutencao')
            .then(res => { return res.json() })
            .then(data => {
                setManutencao(data)
            })
    }

    const Concluir = (id, veiculo) => {
        listarManutencao()
        const options = {
            method: 'PUT',
            headers: {
                Authorization: 'Bearer ' + usuario.token
            }
        };

        fetch(`http://localhost:3000/manutencao/${id}/${veiculo}`, options)
            .then(response => response.status)
            .then(response => {
                if (response == 200) {
                    console.log('ok')
                }
            })


    }

    const cadastrarManutencao = () => {
        listarManutencao()
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + usuario.token
            },
            body: `{"veiculo":${Number(value)},"valor":${value1},"descricao":"${value2}","data_retorno":null}`
        };

        fetch('http://localhost:3000/manutencao', options)
            .then(response => response.status)
            .then(response => {
                if (response == 201) {
                    setModalVisible(!modalVisible)
                    setValue('')
                    setValue1('')
                    setValue2('')
                }
            })
    }


    return (
        <View style={styles.view}>
            <Modal
                animationType="slide"
                transparent={false}
                visible={modalVisible}>
                <View style={styles.centeredView}>
                    <Text style={styles.Alerta}>Digite as informações abaixo:</Text>
                    <View style={styles.modalView}>
                    <TouchableOpacity style={styles.btnFechar} onPress={() => { setModalVisible(!modalVisible) }}>
                            <Image style={styles.textX} source={require('../../../../assets/sair.png')}/>
                        </TouchableOpacity>
                        <TextInput style={styles.inputCadastrar} placeholder='Informe o id do veiculo' value={value} onChangeText={(val) => { setValue(val) }} />
                        <TextInput style={styles.inputCadastrar} placeholder='Informe o valor' value={value1} onChangeText={(val) => { setValue1(val) }} />
                        <TextInput style={styles.inputCadastrar} placeholder='Descrição' value={value2} onChangeText={(val) => { setValue2(val) }} />
                        <ButtonConectar value='Cadastrar' onPress={() => {
                            cadastrarManutencao()
                        }} />
                    </View>
                </View>
            </Modal>


            <View style={styles.headers}>
                <View style={styles.linha}>
                    <TouchableOpacity style={styles.btnRelatorio} onPress={() => {
                        navigation.navigate('Home')
                    }}><Text>Home</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.btnRelatorio} onPress={() => {
                        setModalVisible(!modalVisible)
                    }}><Text>Novo+</Text></TouchableOpacity>
                </View>
            </View>

            <View>
                <Text style={styles.tituloMotorista}>Manutenções</Text>
                <TextInput placeholder='data' style={styles.filtro} value={filtro} onChangeText={(val) => { setFiltro(val) }} />
                <View style={styles.scroll_operacoes}>
                    <ScrollView style={styles.scrollView}>
                        <View style={styles.lista_operacoes}>
                            {
                                manutencao.map((m, index) => {
                                    if (m.data_inicio.includes(filtro)) {
                                        var valor = m.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
                                        if (m.data_fim == null) {
                                            return (
                                                <View style={styles.View_Andamento} key={index}>
                                                    <Text>Id: {m.id}</Text>
                                                    <Text>Veiculo: {m.veiculo} - {m.veiculos.placa}</Text>
                                                    <Text>Data Inicio: {m.data_inicio}</Text>
                                                    <Text>Valor: {valor}</Text>
                                                    <Text>Descrição: {m.descricao}</Text>
                                                    <Text>Data Fim: {m.data_fim}</Text>

                                                    <TouchableOpacity style={styles.buttonAtualizar} onPress={() => {
                                                        Concluir(m.id, m.veiculo)
                                                    }}><Text>Concluir</Text></TouchableOpacity>
                                                </View>
                                            )

                                        } else {
                                            return (
                                                <View style={styles.view_Principal} key={index}>
                                                    <Text>Id: {m.id}</Text>
                                                    <Text>Veiculo: {m.veiculo} - {m.veiculos.placa}</Text>
                                                    <Text>Data Inicio: {m.data_inicio}</Text>
                                                    <Text>Valor: {valor}</Text>
                                                    <Text>Descrição: {m.descricao}</Text>
                                                    <Text>Data Fim: {m.data_fim}</Text>

                                                    <TouchableOpacity style={styles.btnDesabilitado} onPress={() => {
                                                   console.log('Não é possivel concluir uma manutencao que ja foi concluida')
                                                }}><Text>Concluir</Text></TouchableOpacity>
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