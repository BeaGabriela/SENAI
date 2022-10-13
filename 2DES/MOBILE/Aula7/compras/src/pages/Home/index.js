import { ScrollView, View, Text, TouchableOpacity, Image, StyleSheet, Button } from 'react-native';
import ButtonCarrinho from '../../Components/ButtonCarrinho';

export default function Home ({navigation}){
    const pizza = [
        { 
            'img' : 'https://cdn.e-konomista.pt/uploads/2020/03/pizza-bimby-.jpg',
            'Nome': 'Calabresa',
            'Descricao': 'Molho de Tomate, Calabresa, Queijo',
            'adicionar': 'https://th.bing.com/th/id/OIP.4G-vwUxG23uO8Nh89uQmpgHaHa?pid=ImgDet&w=980&h=980&rs=1'
        },
        {
            'img' : 'https://th.bing.com/th/id/OIP.AxHaVQ59M1oUYW4_E_ixswHaFS?pid=ImgDet&rs=1',
            'Nome': 'Marguerita',
            'Descricao': 'Molho de tomate, queijo, tomate, cebola, salsinha',
            'adicionar': 'https://th.bing.com/th/id/OIP.4G-vwUxG23uO8Nh89uQmpgHaHa?pid=ImgDet&w=980&h=980&rs=1'
        },

        {
            'img' : 'https://th.bing.com/th/id/R.d2c11fc8eedfb2bc401502ee4c1193be?rik=TTOMD%2bJpe5sURQ&riu=http%3a%2f%2fwww.blizzstatic.com%2fdynamicmedia%2fimage%2f115%2f5b05e33bcc149.jpg%3fw%3d1200%26zc%3d1&ehk=JuKc%2fmixOo4oKK4SuDy241m4MpHkPOj9IDzRsiuI%2f1c%3d&risl=&pid=ImgRaw&r=0',
            'Nome': 'Quatro Queijos',
            'Descricao': 'Molho de tomate, queijo',
            'adicionar': 'https://th.bing.com/th/id/OIP.4G-vwUxG23uO8Nh89uQmpgHaHa?pid=ImgDet&w=980&h=980&rs=1'
        },

        {
            'img' : 'https://portlandiapielady.com/wp-content/uploads/2020/05/Feature-1-scaled.jpg',
            'Nome': 'Portuguesa a moda brasileira',
            'Descricao': 'Molho de tomate, presunto, queijo, azeitona, cebola, tomate, pimentao, bacon',
            'adicionar': 'https://th.bing.com/th/id/OIP.4G-vwUxG23uO8Nh89uQmpgHaHa?pid=ImgDet&w=980&h=980&rs=1'
        }
    ]

    return (
        <View>
            {
                pizza.map((item, index) => {
                    return(
                        <ScrollView key={index}> 
                        <TouchableOpacity style={styles.container} key={index} >
                            <Image style={styles.img} source={item.img}/>
                            <View>
                            <Text style={styles.text1}>{item.Nome}</Text>
                            <Text style={styles.text}>{item.Descricao}</Text>
                            </View>
            
                            <TouchableOpacity>
                            <Image style={styles.img_add} source={item.adicionar} />
                            </TouchableOpacity>
                        </TouchableOpacity>
                        </ScrollView> 
                       
                    )
                })
            }
           
        </View>
        
    )


}

const styles = StyleSheet.create({
      img: {
        height: '80px',
        width: '80px',
        borderRadius: '50px'
      },
      img_add : {
        height: '20px',
        width: '20px'
      },
      container : {
        display: 'flex',
        flexDirection: 'row',
        padding: '10px',
        alignItems: 'center',
      },

      text : {
        fontSize: '12px',
        width: '60vw',
        margin: '10px'
      },
      text1: {
        margin: '2px',
        fontWeight: 'bold'
      },

      button1:{
        backgroundColor: 'black',
   
      }
    });
    