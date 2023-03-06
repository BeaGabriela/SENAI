import { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from '../styles/styleGeral'

export default function Listar({ navigation }) {

    return (
        <View style={styles.viewHome}>
            <View style={styles.linha}>
                <TouchableOpacity style={styles.buttonClicavel} onPress={() => {navigation.navigate('Motoristas')}}><Text style={styles.textBtn}>Motoristas</Text></TouchableOpacity>
                <TouchableOpacity style={styles.buttonClicavel} onPress={() => {navigation.navigate('Funcionario')}}><Text style={styles.textBtn}>Funcionários</Text></TouchableOpacity>
            </View>
            <View style={styles.linha}>
                <TouchableOpacity style={styles.buttonClicavel} onPress={() => {navigation.navigate('OperacoesListar')}}><Text style={styles.textBtn}>Operações</Text></TouchableOpacity>
                <TouchableOpacity style={styles.buttonClicavel} onPress={() => {navigation.navigate('ManutencaoListar')}}><Text style={styles.textBtn}>Manuteções</Text></TouchableOpacity>
            </View>
            <View style={styles.viewAlone} >
                <TouchableOpacity style={styles.buttonClicavel} onPress={() => {navigation.navigate('Veiculos')}}><Text style={styles.textBtn}>Veiculos</Text></TouchableOpacity>
            </View>
        </View>
    )

}