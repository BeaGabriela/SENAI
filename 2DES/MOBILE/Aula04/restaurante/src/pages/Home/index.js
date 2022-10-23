import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native'

export default function Home({ navigation }) {
    const restaurantes = [
        {
            'nome': 'Mypizzaql',
            'nota': 4,
            'imagem': '',
            'endereco': 'Rua duzentos e dois, centro',
            'telefone': '19 98987-6543'
        },
        {
            'nome': 'Rsstaurante',
            'nota': 3.5,
            'imagem': '',
            'endereco': 'Avenida Boulervar dreams',
            'telefone': '19 97612-4562'
        },
        {
            'nome': 'Elias-sanduiches',
            'nota': 5,
            'descricao': {
                'imagem': '',
                'endereco': 'Rua elficarno 123',
                'telefone': '19 92345-6523'
            }
        }
    ]

    return (
        <View style={styles.container}>
            {
                restaurantes.map((res, indice) => {
                    return (
                        <TouchableOpacity onPress={() => { navigation.navigate('Descricao', {'descricao': restaurantes.descricao })}}>
                            <Text>{res.nome}</Text>
                            <Text>{res.nota}</Text>
                        </TouchableOpacity>
                    )
                })
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
})