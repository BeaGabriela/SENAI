import { View, Text, ScrollView } from 'react-native'
import styles from '../../style/index.js'
import ItemLista from '../../Componentes/ItemLista/index.js'

export default function Home({ route }) {
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
        // chamados.map((item, i) => {
        //     if (item.user_id == info) {
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
        // })
        chamados[info - 1].chamados.map((item, index) => {
            return (
                <View style={styles.compromissos} key={index}>
                    <Text>Titulo:{item.titulo}</Text>
                    <Text>Descrição:{item.descricao}</Text>
                </View>
            )
        })
    )
}