import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import ButtonCadastrar from '../../components/buttonCadastrar';

export default function Home({ navigation }) {
    const img = require('../../../assets/imag.png')
   
    const restaurantes = [
        {
            'nome': 'Mypizzaql',
            'nota': 4,
            'descricao': {
                'imagem': 'https://i.pinimg.com/originals/6b/3f/24/6b3f24ea152ef3ceca7ecad61222d263.jpg',
                'endereco': 'Rua duzentos e dois, centro',
                'telefone': '19 98987-6543'
            }
        },
        {
            'nome': 'Rsstaurante',
            'nota': 3.5,
            'descricao': {
                'imagem': 'https://image.freepik.com/fotos-gratis/restaurante_23-2148014999.jpg',
                'endereco': 'Avenida Boulervar dreams',
                'telefone': '19 97612-4562'
            }
        },
        {
            'nome': 'Elias-sanduiches',
            'nota': 5,
            'descricao': {
                'imagem': 'https://th.bing.com/th/id/OIP.RRtLI9rekzGWSkl-g0JeUAHaEK?pid=ImgDet&w=1920&h=1080&rs=1',
                'endereco': 'Rua elficarno 123',
                'telefone': '19 92345-6523'
            }
        }
    ]

    return (
        <View style={styles.container}>
            {
                restaurantes.map((res) => {
                    return (
                        <View>
                        <TouchableOpacity key={index} onPress={() => { navigation.navigate("Descricao", { "descricao": res.descricao }) }}>
                            <Text>{res.nome}</Text>
                            <Text>{res.nota}<Image source={img} style={{width: 12, height: 12}}/></Text>
                        </TouchableOpacity>
                        
                        </View>
                    )
                })
            }
            <ButtonCadastrar value='Cadastro' onPress={funcao()}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        textAlign: 'center'
    },
    img: {
        width: '12px',
        height: '12px',
        margin: '5px'
    }
})