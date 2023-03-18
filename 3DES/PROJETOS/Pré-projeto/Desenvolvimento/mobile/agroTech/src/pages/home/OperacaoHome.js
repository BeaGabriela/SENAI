import { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Modal, TextInput, Image } from 'react-native';

import styles from '../styles/styleGeral'
import ButtonConectar from '../../components/btnConectar/index';

export default function Operacoes({ navigation }) {
    const [operacoes, setOperacoes] = useState([])
    const [modalVisible, setModalVisible] = useState(false);
    const [value, setValue] = useState('');
    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');
    const [filtro, setFiltro] = useState('');

    var usuario = JSON.parse(localStorage.getItem('user'))


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


    const concluir = (id, veiculo, motorista) => {
        listarOperacoes(),
            console.log(id, veiculo, motorista)

        const options = {
            method: 'PUT',
            headers: {
                Authorization: 'Bearer ' + usuario.token
            }
        };

        fetch(`http://localhost:3000/operacoes/${id}/${veiculo}/${motorista}`, options)
            .then(response => response.status)
            .then(response => {
                console.log(response)
                if (response == 200) {
                    console.log('ok')
                } else {
                    console.log('deu ruim');
                }
            })
            .catch(err => console.error(err));
    }

    const cadastrarOperacao = () => {
        listarOperacoes()
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + usuario.token
            },
            body: `{"veiculo":${Number(value)},"motorista":${Number(value1)},"descricao":"${value2}","data_retorno":null}`
        };

        fetch('http://localhost:3000/operacoes', options)
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
                            <Image style={styles.textX} source={require('../../../assets/sair.png')}/>
                        </TouchableOpacity>
                        <TextInput style={styles.inputModal} placeholder='Informe o id do veiculo' value={value} onChangeText={(val) => { setValue(val) }} />
                        <TextInput style={styles.inputModal} placeholder='Informe o id do Motorista' value={value1} onChangeText={(val) => { setValue1(val) }} />
                        <TextInput style={styles.inputModal} placeholder='Descrição' value={value2} onChangeText={(val) => { setValue2(val) }} />
                        <ButtonConectar value='Cadastrar' onPress={() => {
                            cadastrarOperacao()
                        }} />
                    </View>
                </View>
            </Modal>

            <View style={styles.headers}>
                <View style={styles.linha}>
                    <TouchableOpacity style={styles.btnRelatorio} onPress={() => {
                        navigation.navigate('HomeManutencao')
                    }}><Text>Manutenções</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.btnRelatorio} onPress={() => {
                        setModalVisible(!modalVisible)
                    }}><Text>Novo+</Text></TouchableOpacity>
                </View>
            </View>

            <View>
                <Text style={styles.titulo}>Operações em andamento</Text>
                <TextInput placeholder='Data' style={styles.filtro} value={filtro} onChangeText={(val) => { setFiltro(val) }} />
                <View style={styles.scroll_operacoes}>
                    <ScrollView style={styles.scrollView}>
                        <View style={styles.lista_operacoes}>
                            {
                                operacoes.map((o, index) => {
                                    if(o.data_saida.includes(filtro)){
                                    if (o.data_retorno == null) {
                                        return (
                                            <View style={styles.view_Principal} key={index}>
                                                <Image style={styles.caminhao} source={require('../../../assets/caminhao.gif')}/>
                                                <Text>Id: {o.id}</Text>
                                                <Text>Veiculo: {o.veiculo}</Text>
                                                <Text>Motorista: {o.motorista} - {o.motoristas.nome}</Text>
                                                <Text>Data saida: {o.data_saida}</Text>
                                                <Text>Descrição: {o.descricao}</Text>
                                                <Text>Data Retorno: {o.data_retorno}</Text>

                                                <TouchableOpacity style={styles.buttonAtualizar} onPress={() => {
                                                    concluir(o.id, o.veiculo, o.motorista)
                                                }}><Text>Concluir</Text></TouchableOpacity>
                                               
                                            </View>
                                        )
                                    }else{
                                        return (
                                            <View style={styles.View_Andamento} key={index}>
                                                <Image style={styles.caminhao} source={require('../../../assets/ok.gif')} />
                                                <Text>Id: {o.id}</Text>
                                                <Text>Veiculo: {o.veiculo}</Text>
                                                <Text>Motorista: {o.motorista} - {o.motoristas.nome}</Text>
                                                <Text>Data saida: {o.data_saida}</Text>
                                                <Text>Descrição: {o.descricao}</Text>
                                                <Text>Data Retorno: {o.data_retorno}</Text>

                                                <TouchableOpacity style={styles.btnDesabilitado} onPress={() => {
                                                   console.log('Não é possivel concluir uma operação que ja foi concluida')
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