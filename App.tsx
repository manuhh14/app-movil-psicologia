import './gesture-handler';

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {Text,View,} from 'react-native';
import { StackNavigator } from './src/navegation/StackNavigation';
;



function App(){

  return (
    <NavigationContainer>
       <StackNavigator/>
    </NavigationContainer>
  );
}


export default App;
