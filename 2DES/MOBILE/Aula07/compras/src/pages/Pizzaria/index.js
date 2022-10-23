import {View, Text, Image} from 'react-native'

export default function Pizzaria({route}){
    const {info} = route.params

    return(
        <View>
            <Image source={{uri:info.img}}/>
            <Text>{info.Nome}</Text>
            
        </View>
    )
}