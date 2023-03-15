import { useState } from 'react';
import { View, Text, TouchableOpacity, Image, Modal } from 'react-native';
import { RadioButton, TextInput } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from '../.././pages/styles/styleGeral'
import ButtonConectar from '../../components/btnConectar/index';

export default function LogOut({ navigation }) {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View>
            <Modal
                animationType="slide"
                transparent={false}
                visible={modalVisible}>
                <View style={styles.centeredView}>
                    <Text style={styles.Alerta}>Tem certeza que deseja sair dessa conta?</Text>
                    <View style={styles.modalViewSaida}>
                        <Image style={styles.personSaida}
                            source={require('../../../assets/saida.png')} />
                        <View style={styles.botoesEscolha}>
                            <TouchableOpacity style={styles.botaoEscolher} onPress={() => {
                                localStorage.remove('user')
                                navigation.navigate('Login')
                            }}><Text>Sim</Text></TouchableOpacity>
                            <TouchableOpacity style={styles.botaoEscolher} onPress={() => {
                                setModalVisible(!modalVisible)
                            }}><Text>Não</Text></TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
            <ButtonConectar style={styles.btnConectarSair} value='Sair' onPress={() => {
                setModalVisible(!modalVisible)
            }} />


        </View>

    )

}