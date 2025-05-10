import { NavigationProp, useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react'
import { Pressable, Text, View } from 'react-native'
import { RootStackParams } from './StackNavigation';
import { globalStyles } from '../theme/theme';
import { PrimaryButton } from '../components/shared/PrimaryButton';


export const HomeScreen = () => {


     const navigation = useNavigation<NavigationProp<RootStackParams>>();

     useEffect(()=>{
        navigation.setOptions({
            headerLeft: ()=>{
                <Pressable>
                    <Text>Menu</Text>
                </Pressable>
            }
        })
     },[])

  return (
    <View style={globalStyles.container}>
           <PrimaryButton
                onpress={()=> navigation.navigate('Login' as never)}
                label='Login'
           />
    </View>
  )
}
