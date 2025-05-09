
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../screens/LoginScreen';
import { RegistroScree } from '../screens/RegistroScree';

const Stack= createStackNavigator();

export const StackNavigator=()=> {
  return (
   <Stack.Navigator screenOptions={{
    headerShown: true,
    headerStyle: {
        elevation: 0,
        shadowColor: 'transparent'
    }
   }}>
        <Stack.Screen  name='Login' component={LoginScreen}/>
        <Stack.Screen name='Registro' component={RegistroScree}/>
   </Stack.Navigator>
  );
}