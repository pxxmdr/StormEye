import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import colors from '../styles/colors';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../App';

export default function LoginScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [user, setUser] = useState('');
  const [senha, setSenha] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async () => {
    if (user === 'admin' && senha === '123') {
      await AsyncStorage.setItem('userType', 'admin');
      navigation.navigate('AdminRegisterAlert');
    } else if (user === 'cliente' && senha === '123') {
      await AsyncStorage.setItem('userType', 'cliente');
      navigation.navigate('AlertScreen');
    } else {
      setErrorMessage('Usuário ou senha inválidos!');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <Image
          source={require('../../assets/StormEyeLogo.png')}
          style={styles.logo}
        />
      </View>

      <View style={styles.formSection}>
        <Text style={styles.title}>Login</Text>

        <View style={styles.card}>
          <TextInput
            placeholder="Usuário"
            placeholderTextColor="#999"
            style={styles.input}
            value={user}
            onChangeText={setUser}
          />

          <TextInput
            placeholder="Senha"
            placeholderTextColor="#999"
            secureTextEntry
            style={styles.input}
            value={senha}
            onChangeText={setSenha}
          />

          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>

          {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}

          <Text style={styles.registerText}>
            Não tem conta?{' '}
            <Text
              style={{ fontWeight: 'bold', color: colors.primary }}
              onPress={() => navigation.navigate('Register')}
            >
              Cadastre-se
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f6f9',
  },
  topSection: {
    alignItems: 'center',
    marginTop: 60,
  },
  logo: {
    width: 215,
    height: 215,
    resizeMode: 'contain',
  },
  formSection: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 20,
    paddingHorizontal: 24,
    width: '100%',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: colors.primary,
    alignSelf: 'center',
    marginBottom: 20,
  },
  card: {
    width: '100%',
    backgroundColor: '#f9f9f9',
    borderRadius: 12,
    padding: 24,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 4,
    alignItems: 'center',
  },
  input: {
    width: '100%',
    height: 48,
    backgroundColor: '#eaeaea',
    borderRadius: 8,
    paddingHorizontal: 16,
    color: '#333',
    marginBottom: 16,
  },
  button: {
    width: '100%',
    height: 48,
    backgroundColor: colors.primary,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  registerText: {
    fontSize: 14,
    marginTop: 12,
    color: '#333',
  },
  error: {
    color: 'red',
    marginTop: 12,
    fontSize: 13,
  },
});
