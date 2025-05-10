import React from 'react'
import { Pressable, View } from 'react-native'
import { globalStyles } from '../theme/theme'
import { PrimaryButton } from '../components/shared/PrimaryButton'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { RootStackParams } from '../navegation/StackNavigation'


export const LoginScreen = () => {

   const navigation = useNavigation<NavigationProp<RootStackParams>>();


  return (
    <View style={globalStyles.container}>
       <PrimaryButton
            onpress={()=> navigation.navigate('Registro' as never)}
            label='Registro'
       />
    </View>
  )
}
