import { View, Text, TouchableOpacity } from 'react-native'
import ButtonCadastrar from '../../components/buttonCadastrar/index.js';


export default function Descricao({ route }) {
    const { info } = route.params

    const data = [
        {
            "id_compromisso": 1,
            "descricao": "- Entrega da Atividade.\n- Matéria Nova.",
            "observacoes": "",
        },
        {
            "id_compromisso": 4,
            "descricao": "",
            "observacoes": "Não esquecer a carteirinha !!!",
        },
        {
            "id_compromisso": 3,
            "descricao": "- Pão.\n- Presunto.\n- Queijo.",
            "observacoes": "Ver se o sabão está em promoção e levar uma caixa.",
        },
        {
            "id_compromisso": 2,
            "descricao": "Consulta de retorno.",
            "observacoes": "Levar os exames.",
        },
    ]
    return (
        <View>
            {
                data.map((item, indice) => {
                    if (item.id_compromisso === info) {
                        return (
                            <View key={indice}>
                                <Text>{item.id}</Text>
                                <Text>{item.descricao}</Text>
                                <Text>Observações:</Text>
                                <Text>{item.observacoes}</Text>
                                <ButtonCadastrar value='Finalizar Compromisso'  />
                            </View>
                        )
                    }
                })
            }

        </View >
    )
}