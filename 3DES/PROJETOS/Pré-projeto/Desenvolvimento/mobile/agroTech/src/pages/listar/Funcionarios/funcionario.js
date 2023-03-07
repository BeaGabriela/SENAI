import { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Modal,TextInput, Image } from 'react-native';


import styles from '../../styles/styleGeral'

import ButtonConectar from '../../../components/btnConectar/index';

export default function Funcionario({ navigation }) {
    const [funcionario, setFuncionario] = useState([])
    const [modalVisible, setModalVisible] = useState(false);
    const [value, setValue] = useState('')
    const [value1, setValue1] = useState('')
    const [value2, setValue2] = useState('')
    const [value3, setValue3] = useState('')
    const [value4, setValue4] = useState('')
    const [filtro, setFiltro] = useState('')

    var usuario = JSON.parse(localStorage.getItem('user'))


    useEffect(() => {
        listarFuncionario()
        setInterval(() => {
            console.log('Atualizando lista')
            listarFuncionario()
        }, 5000)
    }, [])


    //LISTAR
    const listarFuncionario = () => {
        fetch('http://localhost:3000/usuario')
            .then(res => { return res.json() })
            .then(data => {
                setFuncionario(data)
            })
    }

    const Excluir = (id) => {
        listarFuncionario()
        const options = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + usuario.token
            },
        };

        fetch(`http://localhost:3000/usuario/${id}`, options)
            .then(response => response.status)
            .then(response => {
                if (response == 200) {
                    setModalVisible(!modalVisible)
                }
            })
    }

    const cadastrarMotoristas = () => {
        listarFuncionario()
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + usuario.token
            },
            body: `{"nome":"${value}","email":"${value1}","senha":"${value2}","funcao":"${value3}","nivel":${value4}}`
        };

        fetch('http://localhost:3000/usuarioCreate', options)
            .then(response => response.status)
            .then(response => {
                if(response == 201){
                    setModalVisible(!modalVisible)
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
                    <TextInput placeholder='Data' style={styles.filtro} value={filtro} onChangeText={(val) => { setFiltro(val) }} />
                    <View style={styles.modalView}>
                    <TouchableOpacity style={styles.btnFechar} onPress={() => { setModalVisible(!modalVisible) }}>
                            <Image style={styles.textX} source={require('../../../../assets/sair.png')}/>
                        </TouchableOpacity>
                        <TextInput style={styles.inputCadastrar} placeholder='Informe o Nome' value={value} onChangeText={(val) => { setValue(val) }} />
                        <TextInput style={styles.inputCadastrar} placeholder='Informe o Email' value={value1} onChangeText={(val) => { setValue1(val) }} />
                        <TextInput style={styles.inputCadastrar} placeholder='Informe o Senha' value={value2} onChangeText={(val) => { setValue2(val) }} />
                        <TextInput style={styles.inputCadastrar} placeholder='Informe o Função' value={value3} onChangeText={(val) => { setValue3(val) }} />
                        <TextInput style={styles.inputCadastrar} placeholder='Informe o Nivel' value={value4} onChangeText={(val) => { setValue4(val) }} />
                        <ButtonConectar value='Cadastrar' onPress={() => {
                            cadastrarMotoristas()
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

                <Text style={styles.tituloMotorista}>Funcionários</Text>
                <TextInput placeholder='Nome' style={styles.filtro} value={filtro} onChangeText={(val) => { setFiltro(val) }} />
                <View style={styles.scroll_operacoes}>
                    <ScrollView style={styles.scrollView}>
                        <View style={styles.lista_operacoes}>
                            {
                                funcionario.map((f, index) => {
                                    if(f.nome.includes(filtro)){
                                    return (
                                        <View style={styles.view_Funcionario} key={index}>
                                            <Text>Nome: {f.nome}</Text>
                                            <Text>Email: {f.email}</Text>
                                            <Text>Senha: {f.senha}</Text>
                                            <Text>Função: {f.funcao}</Text>
                                            <Text>Nivel: {f.nivel}</Text>

                                            <TouchableOpacity style={styles.buttonAtualizar} onPress={() => {
                                                Excluir(f.id)
                                            }}><Text>Excluir</Text></TouchableOpacity>
                                        </View>
                                    )
                                        }
                                })
                            }
                        </View>
                    </ScrollView>
                
            </View>
        </View>
    )

}