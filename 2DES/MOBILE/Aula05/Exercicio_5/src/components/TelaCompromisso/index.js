import { TouchableOpacity, Text, Image, StyleSheet } from "react-native";

export default function TelaCompromisso(props) {
    const { value1, value2, onPress } = props;

    return (
        <TouchableOpacity onPress={()=>{onPress()}}>
            <Image />
            <Text >{value1}</Text>
            <Text>{value2}</Text>
        </TouchableOpacity >
    )

  
}


