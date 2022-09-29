import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from './src/pages/Home/index.js'
import TelaLogin from './src/pages/TelaLogin/index.js'

const Stack = createNativeStackNavigator();

export default function () {
  return(
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name='TelaLogin' component={TelaLogin}/>
      <Stack.Screen name='Home' component={Home}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}