import { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Modal } from 'react-native';
import { TextInput } from 'react-native-paper';

import styles from '../../styles/styleGeral'

import ButtonConectar from '../../../components/btnConectar/index';

export default function Motoristas({ navigation }) {
    const [motoristas, setMotoristas] = useState([])
    const [modalVisible, setModalVisible] = useState(false);
    const [value, setValue] = useState('')

    var usuario = JSON.parse(localStorage.getItem('user'))


    useEffect(() => {
        listarMotoristas()
        setInterval(() => {
            console.log('Atualizando lista')
            listarMotoristas()
        }, 5000)
    }, [])


    //LISTAR
    const listarMotoristas = () => {
        fetch('http://localhost:3000/motorista')
            .then(res => { return res.json() })
            .then(data => {
                setMotoristas(data)
            })
    }

    const Excluir = (id) => {
        listarMotoristas()
        const options = {
            method: 'DELETE',
            headers: {
                Authorization: 'Bearer ' + usuario.token
            }
        };

        fetch(`http://localhost:3000/motorista/${id}`, options)
            .then(response => response.status)
            .then(response => {
                if (response == 200) {
                    console.log('ok')
                }
            })
    }

    const cadastrarMotoristas = () => {
        listarMotoristas()
        const options = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + usuario.token
            },
            body: `{"nome":"${value}","ocupado":false}`
          };
          
          fetch('http://localhost:3000/motorista', options)
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
                    <View style={styles.modalView}>
                    <TouchableOpacity style={styles.btnFechar} onPress={() => { setModalVisible(!modalVisible) }}>
                            <Text style={styles.textX}>X</Text>
                        </TouchableOpacity>
                        <TextInput style={styles.inputCadastrar} placeholder='Informe o nome' value={value} onChangeText={(val) => { setValue(val) }} />
                       <ButtonConectar value='Cadastrar' onPress={() => {
                        cadastrarMotoristas()
                       }}/>
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
                <Text style={styles.tituloMotorista}>Motoristas</Text>
                <TouchableOpacity style={styles.filtro}><Text>Filtro</Text></TouchableOpacity>
                <View style={styles.scroll_operacoes}>
                    <ScrollView style={styles.scrollView}>
                        <View style={styles.lista_operacoes}>
                            {
                                motoristas.map((m, index) => {
                                    return (
                                        <View style={styles.view_Motoristas} key={index}>
                                            <Text>Id: {m.id}</Text>
                                            <Text>Nome: {m.nome}</Text>
                                            {/* <Text>Ocupado: {m.ocupado}</Text> */}
                                            <TouchableOpacity style={styles.buttonAtualizar} onPress={() => {
                                                Excluir(m.id)
                                            }}><Text>Excluir</Text></TouchableOpacity>
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