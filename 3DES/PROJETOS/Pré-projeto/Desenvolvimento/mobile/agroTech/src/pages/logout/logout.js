import { useState } from 'react';
import { View, Text, TouchableOpacity, Image, Modal } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from '../.././pages/styles/styleGeral'
import ButtonSair from '../../components/btnSair/index';

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
                                AsyncStorage.removeItem('user')
                                navigation.navigate('Login')
                                location.reload()
                            }}><Text>Sim</Text></TouchableOpacity>
                            <TouchableOpacity style={styles.botaoEscolher} onPress={() => {
                                setModalVisible(!modalVisible)
                            }}><Text>Não</Text></TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
            <Image style={styles.personduvidaSaida}
                            source={require('../../../assets/duvida.png')} />
            <ButtonSair style={styles.btnConectarSair} value='Sair' onPress={() => {
                setModalVisible(!modalVisible)
            }} />


        </View>

    )

}