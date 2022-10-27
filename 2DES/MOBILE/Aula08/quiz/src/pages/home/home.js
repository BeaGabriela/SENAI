import * as React from 'react';
import { View, Text, Button, TouchableOpacity, Image  } from 'react-native';
import ButtonNext from '../../Componentes/ButtonComponents/ButtonNext'

import styles from '../style/styles';

export default function Home({navigation }){
  const Icon = require('../../../assets/gato.gif');

  return(
    <View style={styles.fundo}>
        <Image style={styles.image} source={Icon}/>
        <Text style={styles.quiz}>Venha fazer o Quiz! Clique no botão abaixo.</Text>
      <ButtonNext value='Começar o Quiz' onPress={() =>{ navigation.navigate("Primeira") }}/>
    </View>
  );
};
