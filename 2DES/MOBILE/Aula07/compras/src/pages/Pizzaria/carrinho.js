import { View, Text, Image, TouchableOpacity } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react'

export default function Pizzaria({ navigation }) {
    const [carrinho, setCarrinho] = useState([])


    const getData = async () => {
        try {
            const value = await AsyncStorage.getItem('carrinho')

            setCarrinho(JSON.parse(value))
        } catch (e) {
            //error
        }
    }

    if (carrinho.length == 0) getData()
    return (
        <View>
            {
                carrinho.map((pizza, indice) => {
                    return (
                        <View>
                            <Image source={{ uri: pizza.img }} style={{ width: '70px', height: '70px' }} key={indice} />
                            <View>
                                <Text>{pizza.nome}</Text>
                                <Text>{pizza.descricao}</Text>
                            </View>
                            <TouchableOpacity onPress={() => {
                                let tempArr = new Array(...carrinho)
                                tempArr.splice(indice, 1)
                                if(tempArr.length == 0 ) navigation.navigate("home")
                                setCarrinho(tempArr)
                            }}>
                                <Image source={removerIcon} style={{ width: '40px', height: '40px' }} />
                            </TouchableOpacity>
                        </View>
                    )
                })
            }
        </View>
    )
}