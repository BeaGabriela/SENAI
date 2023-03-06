import { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Modal } from 'react-native';
import { TextInput } from 'react-native-paper';

import styles from '../../styles/styleGeral'

import ButtonConectar from '../../../components/btnConectar/index';

export default function OperacoesListar({ navigation }) {
    const [operacao, setOperacao] = useState([])
    const [modalVisible, setModalVisible] = useState(false);
    const [value, setValue] = useState('')
    const [value1, setValue1] = useState('')
    const [value2, setValue2] = useState('')
    

    var usuario = JSON.parse(localStorage.getItem('user'))


    useEffect(() => {
        listarOperacao()
        setInterval(() => {
            console.log('Atualizando lista')
            listarOperacao()
        }, 5000)
    }, [])


    //LISTAR
    const listarOperacao = () => {
        fetch('http://localhost:3000/operacoes')
            .then(res => { return res.json() })
            .then(data => {
                setOperacao(data)
            })
    }

    const Concluir = (id, veiculo, motorista) => {
        listarOperacao()
        const options = {
            method: 'PUT',
            headers: {
              Authorization: 'Bearer ' + usuario.token
            }
          };
          
          fetch(`http://localhost:3000/operacoes/${id}/${veiculo}/${motorista}`, options)
            .then(response => response.status)
            .then(response => {
                if(response == 200){
                    console.log('ok')
                }
            })
            
        
    }

    const cadastrarOperacao = () => {
        listarOperacao()
        const options = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: 'Bearer '+ usuario.token
            },
            body: `{"veiculo":${Number(value)},"motorista":${Number(value1)},"descricao":"${value2}","data_retorno":null}`
          };
          
          fetch('http://localhost:3000/operacoes', options)
            .then(response => response.status)
            .then(response => {
                if(response == 201){
                    setModalVisible(!modalVisible)
                    setValue('')
                    setValue1('')
                    setValue2('')
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
                            <Text style={styles.textX}>X</Text>
                        </TouchableOpacity>
                        <TextInput style={styles.inputCadastrar} placeholder='Informe o id do veiculo' value={value} onChangeText={(val) => { setValue(val) }} />
                        <TextInput style={styles.inputCadastrar} placeholder='Informe o id do Motorista' value={value1} onChangeText={(val) => { setValue1(val) }} />
                        <TextInput style={styles.inputCadastrar} placeholder='Descrição' value={value2} onChangeText={(val) => { setValue2(val) }} />
                        <ButtonConectar value='Cadastrar' onPress={() => {
                            cadastrarOperacao()
                        }} />
                    </View>
                </View>
            </Modal>


            <View style={styles.headers}>
                <View style={styles.linha}>
                    <TouchableOpacity style={styles.btnRelatorio} onPress={() => {
                        navigation.navigate('Operacoes')
                    }}><Text>Home</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.btnRelatorio} onPress={() => {
                        setModalVisible(!modalVisible)
                    }}><Text>Novo+</Text></TouchableOpacity>
                </View>
            </View>

            <View>
                <Text style={styles.tituloMotorista}>Operações</Text>
                <TouchableOpacity style={styles.filtro}><Text>Filtro</Text></TouchableOpacity>
                <View style={styles.scroll_operacoes}>
                    <ScrollView style={styles.scrollView}>
                        <View style={styles.lista_operacoes}>
                            {
                                operacao.map((o, index) => {
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
                                })
                            }
                        </View>
                    </ScrollView>
                </View>
            </View>
        </View>
    )

}