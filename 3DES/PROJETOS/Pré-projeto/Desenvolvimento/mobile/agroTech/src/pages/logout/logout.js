import { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { RadioButton, TextInput } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from '../.././pages/styles/styleGeral'
import ButtonConectar from '../../components/btnConectar/index';

export default function LogOut({ navigation }) {
    return (
        <TouchableOpacity onPress={() => {
            localStorage.removeItem('user')
            navigation.navigate('Login')
        }
        }
        >LogOut</TouchableOpacity>
    )

}