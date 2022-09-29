import { TouchableOpacity, Text, TextInput, StyleSheet } from "react-native";

export default function TelaLoginn(props) {
    const { value1, value2, onPress } = props;

    return (
        <TouchableOpacity onPress={()=>{onPress()}}>
            <Text>{value1}</Text>
            <Text>{value2}</Text>
        </TouchableOpacity>
    )

  
}