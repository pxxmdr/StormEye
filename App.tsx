import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import AdminRegisterAlert from './src/screens/AdminRegisterAlert';
import AlertScreen from './src/screens/AlertScreen';
import InformationScreen from './src/screens/InformationScreen';
import TempestadeSeveraScreen from './src/screens/TempestadeSeveraScreen';
import InundacaoScreen from './src/screens/InundacaoScreen';
import TornadoScreen from './src/screens/TornadoScreen';
import GranizoScreen from './src/screens/GranizoScreen';
import VentoForteScreen from './src/screens/VentoForteScreen';
import TerremotoScreen from './src/screens/TerremotoScreen';

export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  AdminRegisterAlert: undefined;
  AlertScreen: undefined;
  InformationScreen: undefined;
  TempestadeSeveraScreen: undefined;
  InundacaoScreen: undefined;
  TornadoScreen: undefined;
  GranizoScreen: undefined;
  VentoForteScreen: undefined;
  TerremotoScreen: undefined;
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
        <Stack.Screen name="TempestadeSeveraScreen" component={TempestadeSeveraScreen} />
        <Stack.Screen name="InundacaoScreen" component={InundacaoScreen} />
        <Stack.Screen name="TornadoScreen" component={TornadoScreen} />
        <Stack.Screen name="GranizoScreen" component={GranizoScreen} />
        <Stack.Screen name="VentoForteScreen" component={VentoForteScreen} />
        <Stack.Screen name="TerremotoScreen" component={TerremotoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
