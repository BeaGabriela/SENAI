import { NavigationContainer, StackRouter } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



const Tab = createBottomTabNavigator();

import Login from './src/pages/login/Login'

//import Home from './src/pages/home/OperacaoHome'
import Operacoes from './src/pages/home/OperacaoHome'
import Listar from './src/pages/listar/listar'
import Cadastrar from './src/pages/cadastrar/cadastrar'
import Alterar from './src/pages/alterar/alterar'
import Relatorios from './src/pages/relatorios/relatorios'

import HomeManutencao from './src/pages/home/ManutencaoHome';

import RelatorioOperacao from './src/pages/home/Relatorios/operacao';
import RelatorioManutencao from './src/pages/home/Relatorios/manutencao';

import Motoristas from './src/pages/listar/Motoristas/motoristas';

const SettingsStack = createNativeStackNavigator();


// function SettingsStackScreen() {
//   return (
//     <SettingsStack.Navigator>

//      
//       <SettingsStack.Screen  name="HomeManutencao" component={HomeManutencao} />
//       <SettingsStack.Screen  name="RelatorioOperacao" component={RelatorioOperacao} />
//       <SettingsStack.Screen  name="RelatorioManutencao" component={RelatorioManutencao} />
//     </SettingsStack.Navigator>
//   );
// }

// function Listar(){
//   return (
//     <SettingsStack.Navigator>
//       <SettingsStack.Screen  name="Home" component={Home} />
//     </SettingsStack.Navigator>
//   );
// }

const Home = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Operacoes" component={Operacoes} />
      <Tab.Screen name="Listar" component={Listar} />
      <Tab.Screen name="Cadastrar" component={Cadastrar} />
      <Tab.Screen name="Alterar" component={Alterar} />
      <Tab.Screen name="Relatorio" component={Relatorios} />
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>

      <SettingsStack.Navigator 
        screenOptions={{headerShown:false}}
      >
      <SettingsStack.Screen name="Home" component={Home} />
        <SettingsStack.Screen name="Login" component={Login} />
        {/* <SettingsStack.Screen name="Settings" component={SettingsStackScreen} />
        <Tab.Screen  name="Listar" component={Listar} />
        <Tab.Screen  name="Cadastrar" component={Cadastrar} />
        <Tab.Screen  name="Alterar" component={Alterar} />
        <Tab.Screen  name="Relatorio" component={Relatorios} /> */}
      </SettingsStack.Navigator>
    </NavigationContainer>
  )
}