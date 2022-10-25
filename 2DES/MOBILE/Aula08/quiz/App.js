import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/pages/home/home';
import Primeira from './src/pages/Pagina1/primeira'
import Second from './src/pages/Pagina2/segunda'
import Terceira from './src/pages/Pagina3/terceira'
import Quarta from './src/pages/Pagina4/quarta'
import Quinta from './src/pages/Pagina5/quinta'
import resposta from './src/pages/respostas/resposta';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Primeira" component={Primeira} />
      <Stack.Screen name="Second" component={Second} />
      <Stack.Screen name="Terceira" component={Terceira} />
      <Stack.Screen name="Quarta" component={Quarta} />
      <Stack.Screen name="Quinta" component={Quinta} />
      <Stack.Screen name="resposta" component={resposta} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}