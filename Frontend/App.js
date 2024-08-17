import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/Screens/Login/LoginScreen';
import CadastroScreen from './src/Screens/Cadastro/CadastroScreen';
import HomeScreen from './src/Screens/Home/HomeScreen';
import SplashSaudacao from './src/Screens/Splashes/SplashSaudacao';
import Q1 from './src/Screens/Quizes/Q1';
import Q2 from './src/Screens/Quizes/Q2';
import Q3 from './src/Screens/Quizes/Q3';
import Q4 from './src/Screens/Quizes/Q4';
import Q5 from './src/Screens/Quizes/Q5';
import Q6 from './src/Screens/Quizes/Q6';
import Q7 from './src/Screens/Quizes/Q7';
import ProfileScreen from './src/Screens/Profile/ProfileScreen';
import SplashCoresP from './src/Screens/Splashes/SplashCoresP';
import SplashAnimais from './src/Screens/Splashes/SplashAnimais';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen}  options={{ headerShown: false }} />
        <Stack.Screen name="SplashSaudacao" component={SplashSaudacao} options={{ headerShown: false }}/>
        <Stack.Screen name="Cadastro" component={CadastroScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Q1" component={Q1} options={{ headerShown: false }} />
        <Stack.Screen name="Q2" component={Q2} options={{ headerShown: false }} />
        <Stack.Screen name="Q3" component={Q3} options={{ headerShown: false }} />
        <Stack.Screen name="Q4" component={Q4} options={{ headerShown: false }} />
        <Stack.Screen name="Q5" component={Q5} options={{ headerShown: false }} />
        <Stack.Screen name="Q6" component={Q6} options={{ headerShown: false }} />
        <Stack.Screen name="Q7" component={Q7} options={{ headerShown: false }} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SplashCoresP" component={SplashCoresP} options={{ headerShown: false }}/>
        <Stack.Screen name="SplashAnimais" component={SplashAnimais} options={{ headerShown: false }}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
