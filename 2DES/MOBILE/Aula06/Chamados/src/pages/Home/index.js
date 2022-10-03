import { View, Text, ScrollView, TextInput, Button } from 'react-native'
import ItemLista from '../../Componentes/ItemLista/index.js'
import styles from '../../style/index.js';
import { useState } from 'react'

export default function Home({ route }) {
    const [value, setValue] = useState("");
    const { info } = route.params;
    const chamados = [
        {
            "user_id": 1,
            "chamados": [
                {
                    "titulo": "Manutenção de Roteador",
                    "descricao": "Cliente reclamou que está sem internet, possível troca"
                },
                {
                    "titulo": "Mudança de Endereço",
                    "descricao": "Fazer a instalação na nova instalação"
                },
                {
                    "titulo": "Recolher equipamento",
                    "descricao": "Assinatura Cancelada, recolher os equipamentos da instalação"
                }
            ]
        },
        {
            "user_id": 2,
            "chamados": [
                {
                    "titulo": "Recolher equipamento",
                    "descricao": "Assinatura Cancelada, recolher os equipamentos da instalação"
                },
                {
                    "titulo": "Mudança de Endereço",
                    "descricao": "Fazer a instalação na nova instalação"
                },
                {
                    "titulo": "Manutenção de Roteador",
                    "descricao": "Cliente reclamou que está sem internet, possível troca"
                }
            ]
        }
    ]

    return (
        <ScrollView>
            <TextInput placeholder="" style={styles.linha} value={value} onChangeText={(val) => { setValue(val) }} />
            <ScrollView>
                {
                    chamados[info - 1].chamados.map((item, index) => {
                        if (item.titulo.includes(value)) {
                            return (
                                <View>
                                    <ItemLista value1={item.titulo} value2={item.descricao} key={index} />
                                </View>
                            )
                        }
                    })
                }
            </ScrollView>
        </ScrollView>
    )
}

/*
{/* // chamados.map((item, i) => { */
/* //     if (item.user_id == info) { */
//         return (
//             <View>
//                 {
//                     item.chamados.map((chamado, indice) => {
//                         return (
//                             <View>
//                                 <Text>Titulo:{chamado.titulo}</Text>
//                                 <Text>Descrição:{chamado.descricao}</Text>
//                             </View>
//                         )
//                     })
//                 }
//             </View>
//         )
//     }
// }) */}