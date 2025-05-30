import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import AdminRegisterAlert from './src/screens/AdminRegisterAlert';
import AlertScreen from './src/screens/AlertScreen';
import InformationScreen from './src/screens/InformationScreen';

export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  AdminRegisterAlert: undefined;
  AlertScreen: undefined;
  InformationScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="AdminRegisterAlert" component={AdminRegisterAlert} />
        <Stack.Screen name="AlertScreen" component={AlertScreen} />
        <Stack.Screen name="InformationScreen" component={InformationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
