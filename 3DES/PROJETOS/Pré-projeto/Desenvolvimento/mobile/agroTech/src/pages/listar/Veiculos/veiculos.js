import { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Modal, TextInput, Image } from 'react-native';

import styles from '../../styles/styleGeral'

import ButtonConectar from '../../../components/btnConectar/index';

export default function Veiculos({ navigation }) {
    const [veiculos, setVeiculos] = useState([])
    const [modalVisible, setModalVisible] = useState(false);
    const [value, setValue] = useState('')
    const [value1, setValue1] = useState('')
    const [filtro, setFiltro] = useState('')



    var usuario = JSON.parse(localStorage.getItem('user'))


    useEffect(() => {
        listarVeiculos()
        setInterval(() => {
            console.log('Atualizando lista')
            listarVeiculos()
        }, 5000)
    }, [])


    //LISTAR
    const listarVeiculos = () => {
        fetch('http://localhost:3000/veiculos')
            .then(res => { return res.json() })
            .then(data => {
                setVeiculos(data)
            })
    }



    const Excluir = (id) => {
        listarVeiculos()
        const options = {
            method: 'PUT',
            headers: {
                Authorization: 'Bearer ' + usuario.token
            }
        };

        fetch(`http://localhost:3000/veiculos/${id}`, options)
            .then(response => response.status)
            .then(response => {
                if (response == 200) {
                    window.location.reload();
                }
            })


    }

    const cadastrarVeiculo = () => {
        listarVeiculos()
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + usuario.token
            },
            body: `{"placa":"${value}","tipo":${Number(value1)}`
        };

        fetch('http://localhost:3000/veiculos', options)
            .then(response => response.status)
            .then(response => {
                if (response == 201) {
                    setModalVisible(!modalVisible)
                    setValue('')
                    setValue1('')

                }
            })
    }


    return (
        <View>
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
                        <TextInput style={styles.inputCadastrar} placeholder='Informe a placa do veiculo' value={value} onChangeText={(val) => { setValue(val) }} />
                        <TextInput style={styles.inputCadastrar} placeholder='Informe o tipo' value={value1} onChangeText={(val) => { setValue1(val) }} />
                        <ButtonConectar value='Cadastrar' onPress={() => {
                            cadastrarVeiculo()
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
                <Text style={styles.tituloMotorista}>Veiculos</Text>
                <TextInput placeholder='Placa' style={styles.filtro} value={filtro} onChangeText={(val) => { setFiltro(val) }} />
                <View style={styles.scroll_operacoes}>
                    <ScrollView style={styles.scrollView}>
                        <View style={styles.lista_operacoes}>
                            {
                                veiculos.map((v, index) => {
                                    if (v.placa.includes(filtro)) {
                                        if (v.uso == false) {
                                            return (
                                                <View style={styles.view_Funcionario} key={index}>
                                                    <Text style={styles.textAlinhado}>Id: {v.id}</Text>
                                                    <Text style={styles.textAlinhado}>Placa: {v.placa}</Text>
                                                    <Text style={styles.textAlinhado}>Tipo: {v.tipo}</Text>
                                                    <TouchableOpacity style={styles.buttonAtualizar} onPress={() => {
                                                        Excluir(v.id)
                                                    }}><Text>Excluir</Text></TouchableOpacity>
                                                </View>
                                            )

                                        } else {
                                            return (
                                                <View style={styles.view_Ocupada} key={index}>
                                                    <Text style={styles.textAlinhado}>Id: {v.id}</Text>
                                                    <Text style={styles.textAlinhado}>Placa: {v.placa}</Text>
                                                    <Text style={styles.textAlinhado}>Tipo: {v.tipo}</Text>
                                                    <TouchableOpacity style={styles.btnDesabilitado} onPress={() => {
                                                        console.log('Não é possivel excluir um veiculo em operação')
                                                    }}><Text>Excluir</Text></TouchableOpacity>
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