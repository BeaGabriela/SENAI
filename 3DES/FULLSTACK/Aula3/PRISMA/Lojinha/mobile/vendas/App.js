import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import home from './src/pages/home/home'
import Vendas from './src/pages/vendas/vendas'

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={home} />
        <Stack.Screen name="Vendas" component={Vendas} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}