import { View, Text, ScrollView } from 'react-native'

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
        chamados.forEach((item, i) => {
            if (item.user_id == info) {
                item.chamados.map((chamado, indice) => {
                    return (
                        <View>
                            <Text>Titulo:{chamado.titulo}</Text>
                            <Text>Descrição:{chamado.descricao}</Text>
                        </View>
                    )
                })
            }
        })
    
    )
}