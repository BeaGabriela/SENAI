import { NavigationContainer, StackRouter } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Tab = createBottomTabNavigator();

import Login from './src/pages/login/login'

const SettingsStack = createNativeStackNavigator();

// const Home = () => {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="Operacoes" component={Operacoes} />
//       <Tab.Screen name="Menu" component={Listar} />
//       <Tab.Screen name="Relatorio" component={Relatorios} /> 
//       <Tab.Screen name="LogOut" component={LogOut} /> 
//     </Tab.Navigator>
//   )
// }

export default function App() {
  return (
    <NavigationContainer>
      <SettingsStack.Navigator
        screenOptions={{ headerShown: false }}
      >
         <SettingsStack.Screen name="Login" component={Login} />
         {/* <SettingsStack.Screen name="Home" component={Home} />
        <SettingsStack.Screen name="HomeManutencao" component={HomeManutencao} />
        {/* <SettingsStack.Screen name="RelatorioOperacao" component={RelatorioOperacao} />  */}
        {/* <SettingsStack.Screen name="RelatorioManutencao" component={RelatorioManutencao} /> 
        <SettingsStack.Screen name="Motoristas" component={Motoristas} />
        <SettingsStack.Screen name="Funcionario" component={Funcionario} />
        <SettingsStack.Screen name="OperacoesListar" component={OperacoesListar} />
        <SettingsStack.Screen name="ManutencaoListar" component={ManutencaoListar} />
        <SettingsStack.Screen name="Veiculos" component={Veiculos} />
        <SettingsStack.Screen name="RelatorioVeiculos" component={RelatorioVeiculos} />  */}
      </SettingsStack.Navigator>
    </NavigationContainer>
  )
}