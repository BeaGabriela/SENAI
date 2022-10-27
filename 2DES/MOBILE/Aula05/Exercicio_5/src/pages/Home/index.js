import { ScrollView, View, Text, Touchable, Image } from 'react-native';
import { TouchableOpacity } from 'react-native';

import TelaCompromisso from '../../components/TelaCompromisso/index.js'
import styles from './style'


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
        <ScrollView style={styles.vision}>
            {
                data.map((item, index) => {
                    return (
                        <TouchableOpacity style={styles.vie} key={index}  onPress={() => { navigation.navigate('Descricao', { 'info': item.id }) }}  >
                            <Image source={require('../../../assets/' + item.tipo + '.png')} style={styles.img}/>
                            <View style={styles.geral}>
                                <Text style={styles.text}>{item.nome}</Text>
                                <Text style={styles.textinho}>{item.horario}</Text>
                                <Text style={{border: '1px solid green', width:'100vw', marginTop:'40px', marginRight: '90px'}}></Text>
                            </View>
                        </TouchableOpacity>
                       

                    )
                })
            }

        </ScrollView>
    )
}

