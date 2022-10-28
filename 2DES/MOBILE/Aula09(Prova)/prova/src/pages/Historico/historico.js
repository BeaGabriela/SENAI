import { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from '../../style/style'
import ButtonRegistrar from '../../components/btnRegistrar/btnRegistrar';



export default function Historico({ navigation, route }) {
    const [value, setValue] = useState("");
    const [animais, setAnimais] = useState([
        {
            'PET': 'bichano',
            'Veterinário': 'fulano',
            'Vacina': 'vacinarous',
            'Data': '27/10/2022'

        },
        {
            'PET': 'fofurinha',
            'Veterinário': 'beltrano',
            'Vacina': 'vacininha',
            'Data': '28/09/2022'

        },
        {
            'PET': 'raivoso',
            'Veterinário': 'Maluquino',
            'Vacina': 'Astravac',
            'Data': '27/10/2022'

        }
    ])

    const ler = async () => {
        try {
            let data = await AsyncStorage.getItem("data");
            animais.push(JSON.parse(data))
            console.log(...animais)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <View style={{ backgroundColor: '#505050', height: '100vh' }}>

            <TextInput placeholder='Digite para buscar...' placeholderTextColor={'grey'} style={styles.input} value={value} onChangeText={(val) => { setValue(val) }} />
            <View>
                {
                    animais.map((item, index) => {
                        if (item.PET.includes(value) || item.Veterinário.includes(value) || item.Vacina.includes(value) || item.Data.includes(value)) {
                            return (
                                <View style={{ marginTop: '20px' }} >
                                    <View style={styles.cards}>
                                        <Text style={styles.text}>PET: {item.PET}</Text>
                                        <Text style={styles.text}>Veterinário: {item.Veterinário}</Text>
                                        <Text style={styles.text}>Vacina: {item.Vacina}</Text>
                                        <Text style={styles.text}>Data: {item.Data}</Text>
                                    </View>
                                </View>
                            )
                        }
                    })
                }
                <ButtonRegistrar value='atualizar' onPress={ler}/>
            </View>
        </View>
    )
}