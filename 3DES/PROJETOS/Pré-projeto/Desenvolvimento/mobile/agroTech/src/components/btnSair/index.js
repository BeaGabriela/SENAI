import { TouchableOpacity, Text } from "react-native";

import styles from "../../pages/styles/styleGeral"

export default function ButtonSair(props) {
    const { value, onPress} = props

    return(
        <TouchableOpacity style={styles.buttonSair} onPress={()=>{onPress()}}>
            <Text style={styles.text}>{value}</Text>
        </TouchableOpacity>
    )
}