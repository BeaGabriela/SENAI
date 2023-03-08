import { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import styles from '../styles/styleGeral'

export default function Relatorios({ navigation }) {

    return (
        <View style={styles.viewHome}>
            <Image style={styles.person} source={require('../../../assets/relatorio.png')}/>
            <Text style={styles.textSubTitulo}>Escolha um relatório: </Text>
            <View style={styles.linha}>
                <TouchableOpacity style={styles.buttonClicavel} onPress={() => {
                    navigation.navigate('RelatorioManutencao')
                }}><Text style={styles.textBtn}>Manuteções</Text></TouchableOpacity>
                <TouchableOpacity style={styles.buttonClicavel} onPress={() => {
                    navigation.navigate('RelatorioVeiculos')
                }}><Text style={styles.textBtn}>Veiculos</Text></TouchableOpacity>
            </View>
        </View>
    )

}