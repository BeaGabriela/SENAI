import {View, Text} from 'react-native';

export default  function Descricao({route}){
     var {descricao} = route.params

     return(
        <View>
            <Text>{descricao.imagem}</Text>
            <Text>Endereço: {descricao.endereco}</Text>
            <Text>Telefone: {descricao.telefone}</Text>
        </View>
     )
}
