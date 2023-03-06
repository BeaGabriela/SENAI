import { StyleSheet } from 'react-native';
import { shadow } from 'react-native-paper';

export default StyleSheet.create({
    //Login
    view: {
        backgroundColor: '#f5f5f5',
        height: '100%',
    },
    headers: {
        height: '16vh',
        backgroundColor: "#57d131",
        borderBottomRightRadius: "50%",
        borderBottomLeftRadius: "50%"
    },

    view_main: {
        boxShadow: '2px 2px 2px 2px #57d131',
        height: '40vh',
        width: '92vw',
        borderRadius: '25px',
        textAlign: 'center',
        marginTop: '20vh',
        marginLeft: "4vw",
        paddingTop: '5vh'

    },

    text: {
        color: 'white',
        fontSize: '18px',
        paddingLeft: '10px',
        paddingRight: '10px',
        fontWeight: 'bold',
    },

    textTitulo: {
        color: 'white',
        fontSize: '18px',
        paddingTop: '5vh',
        paddingRight: '3vw',
        textAlign: 'center',
        fontWeight: 'bold',
    },

    button: {
        height: '45px',
        width: '80vw',
        backgroundColor: '#57d131',
        color: 'white',
        textAlign: 'center',
        borderRadius: '25px',
        marginTop: '20px',
        fontSize: '18pt',
        marginLeft: '23px',
        paddingTop: '10px'
    },

    input: {
        borderRadius: '25px',
        width: '75vw',
        marginTop: '20px',
        marginLeft: '9vw',

    },

    inputCadastrar: {
        borderRadius: '25px',
        width: '75vw',
        marginTop: '2vh',
        marginLeft: '6vw',
    },

    //Home
    buttonClicavel: {
        height: '15vh',
        width: '40vw',
        backgroundColor: '#57d131',
        color: '#fff',
        textAlign: 'center',
        borderRadius: '25px',
        border: '1px solid #f5f5f5',
        boxShadow: '2px 2px 2px #f5f5f5 ',
        marginTop: '20px',
        fontSize: '18pt',
        marginLeft: '23px',
        paddingTop: '10px'
    },

    textBtn: {
        color: "#f5f5f5",
        textAlign: 'center',
        paddingTop: '5vh',
        fontSize: "12pt",
        fontWeight: "bold",
    },

    linha: {
        display: 'flex',
        flexDirection: 'row',
    },

    viewAlone: {
        marginLeft: '22vw'
    },

    viewHome: {
        backgroundColor: '#f5f5f5',
        height: '100%',
        paddingTop: '10vh'
    },

    btnRelatorio: {
        height: '5vh',
        width: '35vw',
        backgroundColor: '#f5f5f5',
        color: '#fff',
        textAlign: 'center',
        borderBottomRightRadius: "50%",
        borderBottomLeftRadius: "50%",
        border: '1px solid #57d131',
        marginTop: '15px',
        fontSize: '18pt',
        marginLeft: '43px',
        paddingTop: '10px'
    },
    buttonAtualizar: {
        height: '30px',
        width: '30vw',
        backgroundColor: '#57d131',
        color: 'white',
        textAlign: 'center',
        borderRadius: '25px',
        marginTop: '8px',
        fontSize: '18pt',
        paddingTop: '3px'
    },

    btnFechar: {
        marginLeft: '70vw',

    },

    titulo: {
        fontSize: '18pt',
        marginLeft: '14vw',
        marginTop: "2vh",
        color: "#57d131",
        fontWeight: 'bold'
    },
    Alerta: {
        fontSize: '18pt',
        marginLeft: '11vw',
        marginTop: "12vh",
        color: "#f5f5f5",
        fontWeight: 'bold'
    },

    view_Principal: {
        boxShadow: '2px 2px 2px 2px #57d131',
        height: '23vh',
        width: '80vw',
        borderRadius: '25px',
        textAlign: 'center',
        paddingTop: '2vh',
        alignItems: 'center'
    },


    textX: {
        fontSize: '18pt',
    },
    centeredView: {
        height: "100vh",
        backgroundColor: '#57d131',
    },

    modalView: {
        margin: 20,
        marginTop: '10vh',
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    scroll_operacoes: {
        height: '60vh',
    },

    lista_operacoes: {
        flex: 1,
        gap: '25px',
        alignItems: 'center',
        padding: '25px',
    },

    view_Motoristas: {
        boxShadow: '2px 2px 2px 2px #57d131',
        height: '12vh',
        width: '50vw',
        borderRadius: '25px',
        textAlign: 'center',
        paddingTop: '2vh',
        alignItems: 'center'
    },

    view_Funcionario: {
        boxShadow: '2px 2px 2px 2px #57d131',
        height: '20vh',
        width: '50vw',
        borderRadius: '25px',
        textAlign: 'center',
        paddingTop: '2vh',
        alignItems: 'center'
    },

    tituloMotorista: {
        fontSize: '18pt',
        textAlign: "center",
        marginTop: '2vh',
        color: "#57d131",
        fontWeight: 'bold'
    },
    filtro: {
        textAlign: "center",
        marginLeft: '80vw',
        border: '1px solid',
        width: '15vw',
        borderRadius: '25px',
    },
    input: {
        width: '45vw',
    }
})