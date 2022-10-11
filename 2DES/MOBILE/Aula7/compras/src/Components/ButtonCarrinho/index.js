import {TouchableOpacity, Text, StyleSheet} from 'react-native'

export default function ButtonCarrinho(props) {
    const { value, onPress} = props

    return(
        <TouchableOpacity style={styles.button} onPress={()=>{onPress()}}>
            <Text style={styles.text}>{value}</Text>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    button: {
    textAlign: 'center',
    backgroundColor: 'grey',
    borderRadius: '5px',
    height:'30px',
    width: '80vw',
    margin: '30px' 
    },

    text: {
        color: 'white',
    }


})