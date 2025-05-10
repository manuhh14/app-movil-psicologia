import React, { useRef } from 'react';
import {
  Animated,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
  Keyboard,
  ScrollView,
} from 'react-native';

import { PrimaryButton } from '../components/shared/PrimaryButton';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParams } from '../navegation/StackNavigation';
import { globalStyles } from '../theme/theme';

const { height: screenHeight } = Dimensions.get('window');

export const LoginScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();
  const bottomSheetAnim = useRef(new Animated.Value(screenHeight * 0.8)).current;

  const topCardHeight = bottomSheetAnim.interpolate({
    inputRange: [screenHeight * 0.2, screenHeight * 0.8],
    outputRange: [screenHeight * 0.3, screenHeight * 0.6],
    extrapolate: 'clamp',
  });

  // Función para alternar el estado de la tarjeta inferior
  const toggleBottomCard = () => {
    const isCollapsed = bottomSheetAnim._value >= screenHeight * 0.7;
    const toValue = isCollapsed ? screenHeight * 0.2 : screenHeight * 0.8;

    Animated.timing(bottomSheetAnim, {
      toValue,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  // Función para cerrar la tarjeta y regresar a la parte superior
  const closeBottomCard = () => {
    Animated.timing(bottomSheetAnim, {
      toValue: screenHeight * 0.2, // Regresa a la parte superior
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={globalStyles.container}>
        
        {/* Parte superior: Card principal con altura dinámica */}
        <Pressable onPress={closeBottomCard}>
          <Animated.View style={[globalStyles.topCard, { height: topCardHeight }]}>
            <Text style={globalStyles.title}>Bienvenido</Text>
          </Animated.View>
        </Pressable>

        {/* Parte inferior: Bottom card deslizante */}
        <Animated.View style={[globalStyles.bottomCard, { top: bottomSheetAnim }]}>
          <Pressable onPress={toggleBottomCard}>
            {/* Área de contacto para alternar la animación */}
            <View style={globalStyles.handleLarge} />
          </Pressable>

          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{ flex: 1 }}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 0}
          >
            <ScrollView
              contentContainerStyle={globalStyles.form}
              keyboardShouldPersistTaps="handled"
              showsVerticalScrollIndicator={false}
            >
              <Text style={globalStyles.label}>Correo electrónico</Text>
              <TextInput
                style={globalStyles.input}
                placeholder="email@ejemplo.com"
                keyboardType="email-address"
                autoCapitalize="none"
              />

              <Text style={globalStyles.label}>Contraseña</Text>
              <TextInput
                style={globalStyles.input}
                placeholder="********"
                secureTextEntry
              />

              <PrimaryButton label="Iniciar sesión" onpress={() => {}} />
            </ScrollView>
          </KeyboardAvoidingView>
        </Animated.View>
      </View>
    </TouchableWithoutFeedback>
  );
};