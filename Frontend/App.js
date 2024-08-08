import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/Screens/Login/LoginScreen';
import CadastroScreen from './src/Screens/Cadastro/CadastroScreen';
import HomeScreen from './src/Screens/Home/HomeScreen';
import SplashSaudacao from './src/Screens/Splashes/SplashSaudacao';


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen}  options={{ headerShown: false }} />
        <Stack.Screen name="SplashSaudacao" component={SplashSaudacao} />
        <Stack.Screen name="Cadastro" component={CadastroScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
