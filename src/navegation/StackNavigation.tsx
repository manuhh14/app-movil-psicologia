
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../screens/LoginScreen';
import { RegistroScree } from '../screens/RegistroScree';
import { HomeScreen } from './HomeScreen';


export type RootStackParams = {
    Home: undefined
    Login: undefined,
    Registro: undefined,
}

const Stack= createStackNavigator<RootStackParams>();



export const StackNavigator=()=> {
  return (
   <Stack.Navigator screenOptions={{
    headerShown: true,
    headerStyle: {
        elevation: 0,
        shadowColor: 'transparent'
    }
   }}> 


        <Stack.Screen  name='Home' component={HomeScreen}/>
        <Stack.Screen  name='Login' component={LoginScreen}/>
        <Stack.Screen name='Registro' component={RegistroScree}/>
        
   </Stack.Navigator>
  );
}