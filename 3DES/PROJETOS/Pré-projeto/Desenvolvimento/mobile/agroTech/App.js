import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

import Login from './src/pages/login/Login'

import Home from './src/pages/home/home'
import Listar from './src/pages/listar/listar'
import Cadastrar from './src/pages/cadastrar/cadastrar'
import Alterar from './src/pages/alterar/alterar'
import Relatorios from './src/pages/relatorios/relatorios'


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Tab.Screen  name="Home" component={Home} />
        <Tab.Screen  name="Listar" component={Listar} />
        <Tab.Screen  name="Cadastrar" component={Cadastrar} />
        <Tab.Screen  name="Alterar" component={Alterar} />
        <Tab.Screen  name="Relatorio" component={Relatorios} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}