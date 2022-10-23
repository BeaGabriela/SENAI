import {View, Text, Image, StyleSheet } from 'react-native';

export default  function Descricao({route}){
     var {descricao} = route.params;

       
     return(
        <View>
            <Image style={style.img} source={{uri: descricao.imagem}}/>
            <Text style={style.text1}>Endereço: {descricao.endereco}</Text>
            <Text style={style.text2}>Telefone: {descricao.telefone}</Text>
        </View>
     );
}

const style = StyleSheet.create({
    img: {
        width: '50%',
        height: '100%',
        margin: '80px'
    },
    text1: {
        marginTop: '-70px',
        textAlign: 'center'
    },
    text2: {
        marginTop: '-5px',
        marginRight : '86px',
        textAlign: 'center'
    }
})