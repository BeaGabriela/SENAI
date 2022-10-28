import { useState } from 'react';
import { View, Text, Button, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { RadioButton } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from '../../style/style'


export default function Home({ navigation }) {
const img = require('../../../assets/assets/vacinacao.png')
const img2 = require('../../../assets/assets/arquivo.png')

    return (
        <View style={styles.viewPrincioal}>
            <TouchableOpacity style={styles.touch} onPress={() => { navigation.navigate("Historico") }}>
                <Image source={{ uri: img2 }} style={styles.img2} />
                <Text style={styles.textVacinas}>Histórico de Vacinas</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.touch} onPress={() => { navigation.navigate("Registro")}}>
                <Image source={{ uri: img }} style={styles.img2} />
                <Text style={styles.textVacinas}>Registrar Vacina</Text>
            </TouchableOpacity>
        </View>
    )

}