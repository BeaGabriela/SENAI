import 'react-native-gesture-handler';
import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import Home from '../aula/src/pages/pagina1/pagina1'
import Notification from '../aula/src/pages/pagina2/pagina2'


const Drawer = createDrawerNavigator();


export default function App() {
  return (
    <NavigationContainer>
      
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Notification" component={Notification} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}