import { View, Text, StyleSheet, Image, TextInput, Button, TouchableOpacity } from 'react-native';

export default function App() {
  // const nomes = ['Fulano', 'Beltrano', 'Ciclano', 'Tobias', 'Jurelson', 'Josefina']
  const func = [
    {
      'img': "https://th.bing.com/th/id/OIP.V0lOa_0dCA2k2dvZHSZeNwHaHv?pid=ImgDet&rs=1",
      'nome': 'Fulano',
      'cargo': 'Gerente'
    },
    {
      'img': 'https://cdn1.iconfinder.com/data/icons/business-users/512/circle-512.png',
      'nome': 'Beltrano',
      'cargo': 'Administrador'
    },
    {
      'img': 'https://th.bing.com/th/id/OIP.j885Ad5jyXEGH_eARVeEKAHaHv?pid=ImgDet&rs=1',
      'nome': 'Ciclano',
      'cargo': 'Gestor'
    },
    {
      'img': 'https://th.bing.com/th/id/OIP.3hKUR1gjCOBVf-clx4IZdwHaHa?pid=ImgDet&w=512&h=512&rs=1',
      'nome': 'Tobias',
      'cargo': 'Motorista'
    }

  ]

  // const imgHamster = require('./assets/hamster.jpg')
  // const imgHamster2 = require('./assets/hm.jpg')
  // const imgHamster3 = require('./assets/hm3.jpg')
  // const lix =  require('./assets/lix.jpg')

  

  const onPress = () => setCount(prevCount => prevCount + 1);
  return (
    <View>
      <View style={style.container}>
        {
          func.map(user => {
            return (
              <TouchableOpacity onPress={onPress}>
              <View style={style.acesso} onPress ={login} >
                <Image source={user.img} style={{ width: '30px', height: '20px' }} />
                <Text>{ '   ' + user.nome + " - " + user.cargo}</Text>
              </View>
              </TouchableOpacity>
            )
          })
        }
      </View>
    </View>
  );



  function login(){
    return(
    <View>
      <View style={style.container}>
        <Image source={user.img}/>
        <Text>Bem vindo a tela de Login!</Text>

      </View>
    </View>
    )
  }

 
  
  // return (
  //   //Tem que ter uma View para o todo campo.
  //   // uri é para pegar a imagem do google pelo link. 
  //   //source é quando há uma imagem em uma das páginas.
  //   <View style={style.container}> 
  //     <View style={style.primeira}>
  //     <Text>Bem vindo</Text>
  //     <TextInput style={style.input} placeholder='Email' multiline={true} numberOfLines={2}/>
  //     <Button title='Cadastrar' style={style.button}/>
  //     <TouchableOpacity style={style.btnexclui}>
  //       <Image style={{width: '30px', height: '20px'}} source={lix}/>
  //       <Text>Apagar Registros</Text>
  //     </TouchableOpacity>
  //     {

  //       nomes.map(usuarios => {
  //         return(
  //           <Text>{usuarios.nome + " - " + usuarios.matricula}</Text>
  //         )
  //       })
  //       // nomes.map(nome =>{  //O forEach percorre mas não retorna nada. Diferente do map qur percorre e retorna.
  //       // return(
  //       //   <Text>{nome}</Text>
  //       // )
  //       // })
  //     }
  //     <Image source={imgHamster2}  style={style.img2}/>

  //     </View>
  //     <View style={style.segunda}>
  //       <Text>Animaizinhos fofos:</Text>
  //       <Image style={style.img} source={imgHamster}/>
  //       <Image source={imgHamster3}  style={style.img}/>
  //       <Image source={{uri: 'https://noticiarmoz.com/wp-content/uploads/2020/09/1599672669_301_O-cachorrinho-sempre-tropeca-patologia-ou-falta-de-jeito.jpg'}} style={style.img} /> 
  //       <Image source={{uri: 'https://i.pinimg.com/originals/72/5b/17/725b171084d3ec11d55845661dd7d667.jpg'}} style={style.img} />
  //       <Image source={{uri: 'https://th.bing.com/th/id/OIP.GWPGzMfCB-g6Jm01o3zdewHaFE?pid=ImgDet&rs=1'}} style={style.img} />

  //     </View>
  //   </View>
  // );
}


const style = StyleSheet.create({
  container: {
    // flex: , //Utilizando o display, o 1 representa o peso da View. 1 EU ESTOU USANDO 100% DA MINHA TELA. 
    alignItems: 'center'
    // justifyContent: 'center',
  },
  acesso: {
    border : '1px solid black',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '15px',
    padding: '10px',
    borderRadius : '8px',
    flexDirection: 'row'
  }

 
  // primeira: {
  //   flex: 1,
  //   backgroundColor: '#D3F3F3'
  // },
  // segunda: {
  //   flex: 1,
  //   backgroundColor: '#E2F3dF'
  // },
  // img: {
  //   height: '20%',
  //   borderRadius: '20%',
  //   border: '1px solid black'
  // },
  // img2: {
  //   height: '30%',
  //   width: '90%',
  //   borderRadius: '20%',
  //   border: '1px solid black',
  //   alignItems: 'center'

  // },
  // input: {
  //   borderBottomWidth: '1px',
  //   borderBottomColor: 'gray',
  //   padding: '1px'
  // },



  // btnexclui: {
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   backgroundColor: '#E66464',
  //   border: '2px solid #F62121',
  //   borderRadius: '5px'
  // }

});



// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
