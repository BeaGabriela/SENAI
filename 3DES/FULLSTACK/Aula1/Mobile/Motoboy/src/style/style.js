import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    //Home
    viewPrincioal: {
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: '#505050',
    },
    touch: {
        width: '42vw',
        height: '18vh',
        backgroundColor: '#EFEFEF',
        borderRadius: '12px',
        marginTop: '-70vh'
    },

    img2: {
        width: '60px',
        height: '60px',
        marginTop: '25px',
        marginLeft: '52px'
    },

    textVacinas: {
        fontSize: '15px',
        color: '#8A66FA',
        fontWeight: 'bold',
        marginTop: '20px',
        marginLeft: '20px'
    },

    //Historico
    cards: {
        height: '12vh',
        width: '90vw',
        backgroundColor: '#505050',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        marginTop: '20px',
        marginLeft: '20px',
        borderRadius: '10px',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 24,
    },
    text: {
        color: 'white',
        fontSize: '18px',
        paddingLeft: '10px',
        paddingRight: '10px',
        fontWeight: 'bold',
    },
    input: {
        height: '45px',
        width: '90vw',
        backgroundColor: 'white',
        borderRadius: '5px',
        marginTop: '20px',
        marginLeft: '22px',
        padding: '10px',
        fontSize: '15px',
        fontFamily: 'arial'
    },

    //Login
    img: {
        width: '60vw',
        height: '30vh',
        marginLeft: '20vw'
    },

    button: {
        height: '45px',
        width: '90vw',
        backgroundColor: '#8A66FA',
        color: 'white',
        textAlign: 'center',
        borderRadius: '5px',
        marginTop: '20px',
        fontSize: '18pt',
        marginLeft: '20px',
        paddingTop: '10px'
    },


    //Registro
    input2: {
        height: '55px',
        width: '75vw',
        backgroundColor: 'white',
        borderRadius: '5px',
        marginTop: '20px',
        marginLeft: '50px',
        padding: '10px',
        fontSize: '15px',
        fontFamily: 'arial'
    },

    btnRegistrar: {
        height: '55px',
        width: '75vw',
        backgroundColor: '#8A66FA',
        color: 'white',
        textAlign: 'center',
        borderRadius: '5px',
        marginTop: '20px',
        fontSize: '18pt',
        marginLeft: '50px',
        paddingTop: '10px'
    }

    
})