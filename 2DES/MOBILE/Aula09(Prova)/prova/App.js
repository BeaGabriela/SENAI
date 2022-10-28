import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import Home from './src/pages/Home/Home'
import Historico from './src/pages/Historico/historico'
import Login from './src/pages/Login/Login'
import Registro from './src/pages/Registro/Registro'


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Registro" component={Registro} />
        <Stack.Screen name="Historico" component={Historico} />


      </Stack.Navigator>
    </NavigationContainer>
  )
}
