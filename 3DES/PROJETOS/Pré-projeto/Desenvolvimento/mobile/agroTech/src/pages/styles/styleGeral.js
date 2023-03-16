import { StyleSheet } from 'react-native';
import { shadow } from 'react-native-paper';

export default StyleSheet.create({
    //Login
    view: {
        backgroundColor: '#fff',
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

    textAlinhado: {
        color: '#000',
        fontSize: '18px',
        paddingLeft: '10px',
        paddingRight: '10px',
        paddingBottom: '6px',
    },

    textSubTitulo: {
        color: '#000',
        fontSize: '18px',
        paddingLeft: '28vw',
        paddingRight: '10px',
        paddingBottom: '1vh',
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
        marginLeft: '5vw',
        paddingTop: '10px'
    },

    buttonSair: {
        height: '45px',
        width: '80vw',
        backgroundColor: '#57d131',
        color: 'white',
        textAlign: 'center',
        borderRadius: '25px',
        marginTop: '20px',
        fontSize: '18pt',
        marginLeft: '10vw',
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

    inputModal:{
        borderRadius: '25px',
        boxShadow: '2px 2px 2px #57d131',
        width: '70vw',
        marginTop: '1vh',
        marginLeft: '2vw',
        padding: '2vh'
    },

    //Home
    buttonClicavel: {
        height: '15vh',
        width: '40vw',
        backgroundColor: '#f5f5f5',
        color: '#fff',
        textAlign: 'center',
        borderRadius: '25px',
        border: '1px solid #f5f5f5',
        boxShadow: '2px 2px 2px 2px #57d131 ',
        marginTop: '20px',
        fontSize: '18pt',
        marginLeft: '23px',
        paddingTop: '10px'
    },

    textBtn: {
        textAlign: 'center',
        paddingTop: '5vh',
        fontSize: "12pt"
    },

    linha: {
        display: 'flex',
        flexDirection: 'row',
    },

    viewAlone: {
        marginLeft: '22vw'
    },

    viewHome: {
        backgroundColor: '#fff',
        height: '100%',
        paddingTop: '10vh'
    },

    office:{
        height: "25vh",
        width: "40vh",
        marginLeft:"10vw",
        marginTop: "10vh",
        marginBottom: "-15vh"

    },

    person:{
        height: "28vh",
        width: "70vw",
        marginLeft:"14vw",
        marginTop: "-9vh",
        marginBottom: "2vh"

    },

    btnRelatorio: {
        height: '5vh',
        width: '35vw',
        backgroundColor: '#fff',
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

    btnDesabilitado: {
        height: '30px',
        width: '30vw',
        backgroundColor: '#a9a9a9',
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
        height: '26vh',
        width: '80vw',
        borderRadius: '25px',
        textAlign: 'center',
        paddingTop: '2vh',
        alignItems: 'center',
        backgroundColor: "#fff"
    },

    textX: {
        height: "3vh",
        width: "6vw",
    },

    caminhao:{
        height: "4vh",
        width: "8vw",
        marginLeft: "60vw"
        

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
        height: '16vh',
        width: '50vw',
        borderRadius: '25px',
        textAlign: 'center',
        paddingTop: '2vh',
        alignItems: 'center'
    },

    view_OcupadaMotorista: {
        boxShadow: '2px 2px 2px 2px #a9a9a9',
        height: '12vh',
        width: '50vw',
        borderRadius: '25px',
        textAlign: 'center',
        paddingTop: '2vh',
        alignItems: 'center'
    },

    View_Andamento: {
        boxShadow: '2px 2px 2px 2px #a9a9a9',
        height: '25vh',
        width: '80vw',
        borderRadius: '25px',
        textAlign: 'center',
        paddingTop: '2vh',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
    },

    view_Funcionario: {
        boxShadow: '2px 2px 2px 2px #57d131',
        height: '24vh',
        width: '50vw',
        borderRadius: '25px',
        textAlign: 'center',
        paddingTop: '2vh',
        alignItems: 'center'
    },

    view_Ocupada:{
        boxShadow: '2px 2px 2px 2px #a0a0a0',
        height: '24vh',
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
        marginLeft: '12vw',
        border: '1px solid #57d131',
        width: '80vw',
        borderRadius: '25px',
        marginTop: '2vh',
        padding: '1vh',
        marginBottom: '1vh',
    },
    input: {
        width: '45vw',
    },

    modalViewSaida: {
        margin: 20,
        marginTop: '10vh',
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 60,
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

    botoesEscolha:{
        display: 'flex',
        flexDirection: "row",
        gap: "15px",
        width: "60vw",
        height: "15vh"
    },

    botaoEscolher:{
        height: "5vh",
        width: "25vw",
        textAlign: "center",
        boxShadow: "2px 2px 2px 2px #57d131",
        borderRadius: "8px",
        marginTop: "12vh",
        marginLeft: "1vw",
        paddingTop: "1vh"
    },
    personSaida:{
        height: "28vh",
        width: "65vw",
        marginLeft:"10vw",
        marginTop: "-5vh",
        marginBottom: "-9.5vh",
        borderRadius: "8px",

    },

    personduvidaSaida:{
        height: "28vh",
        width: "65vw",
        marginLeft:"16vw",
        marginTop: "5vh",
        marginBottom: "5vh",
        borderRadius: "9px",

    },
   
})