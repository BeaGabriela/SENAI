import { ScrollView, View, Text, Touchable, Image } from 'react-native';
import { TouchableOpacity } from 'react-native';

import TelaCompromisso from '../../components/TelaCompromisso/index.js'



export default function Home({ navigation }) {
    const data = [
        {
            "id": 1,
            "tipo": 2,
            "nome": "Escola",
            "horario": "07:30 - 11:30"
        },
        {
            "id": 2,
            "tipo": 1,
            "nome": "Consulta Médica",
            "horario": "13:00 - 13:40"
        },
        {
            "id": 3,
            "tipo": 3,
            "nome": "Ir ao mercado",
            "horario": "16:30 - 17:00"
        },
        {
            "id": 4,
            "tipo": 4,
            "nome": "Ir ao cinema",
            "horario": "20:00 - 22:30"
        },
    ]
    return (
        <ScrollView>
            {
                data.map((item, index) => {
                    return (
                        <TelaCompromisso value1={item.nome} value2={item.horario} key={index} onPress={() => { navigation.navigate('Descricao', { 'info': item.id }) }} />

                    )
                })
            }

        </ScrollView>
    )
}

