
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet,} from 'react-native';
import Home from './pages/Home';
import Page from './pages/Page';
import Local from './pages/PagesList/Local';
import List from './components/List';
import Apresentacao from './pages/PagesList/Apresentacao'
import Historia from './pages/PagesList/Historia'

const Stack = createNativeStackNavigator();

function App() {
  return (
    
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Page" component={Page} />
        
        <Stack.Screen name="Local">
          { (props) => 
          <Local 
            tema={"Localização"} 
            texto1={"O Teatro Arthur Azevedo localiza-se na cidade de São Luís, no estado do Maranhão, no Brasil."}
            texto2={"Endereço: R. do Sol, S/n - Centro, São Luís - MA, 65010-120"}
            imageOn={true}
          />}
        </Stack.Screen>
        <Stack.Screen name="Apresentacao" component={Apresentacao} />
        <Stack.Screen name="Historia" component={Historia} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App

