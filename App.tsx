import './gesture-handler';

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { MyDrower } from './src/navegation/MenuDrawer';
;



function App(){

  return (
    <NavigationContainer>
     
      <MyDrower/>
    </NavigationContainer>
  );
}


export default App;
