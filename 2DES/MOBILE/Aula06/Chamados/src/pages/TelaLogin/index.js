import{ ScrollView, Image, View, Text, TextInput, Button } from 'react-native'
import ButtonEntrar from '../../Componentes/ButtonLogin/index.js'
import { useState } from 'react'
import style from '../../style/index.js';

export default function TelaLogin({navigation}){
    const [value, setValue] = useState("");
    const [value1, setValue1] = useState("");
    const users = [
        {
            "id": 1,
            "email": "user01@empresa.com",
            "senha": "teste1234",
        },
        {
            "id": 2,
            "email": "user02@empresa.com",
            "senha": "1234teste",
        }
    ]

    const img = require(' ../../../assets/logo.png')
    const funcao = ()=>{
       let flag = false
        users.forEach(usuario => {
            if(value == usuario.email && value1 == usuario.senha){
                flag = true
               navigation.navigate('Home', {'info': usuario.id})
            }
        })
        if(!flag) console.log('Erro')
    }
    
    return(
        <View >
            <View style={style.div}>
            <Image style={style.img} source={{uri:img}}/>
            <TextInput style={style.input} placeholder='Email'  value={value} onChangeText={(val) => { setValue(val) }}  placeholderTextColor='grey'/>
            <TextInput  style={style.input} placeholder='Senha' value={value1} onChangeText={(val1) => { setValue1(val1) }} placeholderTextColor='grey'/>
            </View>
           <ButtonEntrar  onPress={funcao} value='Login'/>
        </View>         
    )

   

}
