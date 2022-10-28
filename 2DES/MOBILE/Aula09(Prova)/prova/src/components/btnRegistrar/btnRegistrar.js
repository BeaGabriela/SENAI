import { TouchableOpacity, Text } from "react-native";

import styles from "../../../src/style/style"

export default function ButtonRegistrar(props) {
    const { value, onPress} = props

    return(
        <TouchableOpacity style={styles.btnRegistrar} onPress={()=>{onPress()}}>
            <Text style={styles.text}>{value}</Text>
        </TouchableOpacity>
    )
}