import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import colors from '../styles/colors';
import NavBarAdmin from '../components/NavBarAdmin';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../App';

export default function AdminRegisterAlert() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const [id, setId] = useState('');
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [gravidade, setGravidade] = useState('');
  const [localizacao, setLocalizacao] = useState('');

  const API_BASE = 'http://localhost:8000';

  const handleAdd = async () => {
    if (!nome || !descricao || !gravidade || !localizacao) {
      Alert.alert('Erro', 'Preencha todos os campos (exceto ID).');
      return;
    }

    try {
      const response = await fetch(`${API_BASE}/alertas`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nome_catastrofe: nome,
          descricao,
          nivel_gravidade: parseInt(gravidade),
          localizacao,
        }),
      });

      if (response.ok) {
        Alert.alert('Sucesso', 'Catástrofe adicionada com sucesso!');
        limparCampos();
        navigation.navigate('AlertScreen');
      } else {
        Alert.alert('Erro', 'Erro ao adicionar catástrofe.');
      }
    } catch (err) {
      Alert.alert('Erro', 'Falha de conexão com o servidor.');
    }
  };

  const handleUpdate = async () => {
    if (!id || !nome || !descricao || !gravidade || !localizacao) {
      Alert.alert('Erro', 'Preencha todos os campos.');
      return;
    }

    try {
      const response = await fetch(`${API_BASE}/alertas/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nome_catastrofe: nome,
          descricao,
          nivel_gravidade: parseInt(gravidade),
          localizacao,
        }),
      });

      if (response.ok) {
        Alert.alert('Sucesso', 'Catástrofe atualizada com sucesso!');
        limparCampos();
        navigation.navigate('AlertScreen');
      } else {
        Alert.alert('Erro', 'Erro ao atualizar catástrofe.');
      }
    } catch (err) {
      Alert.alert('Erro', 'Falha de conexão com o servidor.');
    }
  };

  const handleDelete = async () => {
    if (!id) {
      Alert.alert('Erro', 'Informe o ID da catástrofe a ser removida.');
      return;
    }

    try {
      const response = await fetch(`${API_BASE}/alertas/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        Alert.alert('Sucesso', 'Catástrofe removida com sucesso!');
        limparCampos();
        navigation.navigate('AlertScreen');
      } else {
        Alert.alert('Erro', 'Erro ao remover catástrofe.');
      }
    } catch (err) {
      Alert.alert('Erro', 'Falha de conexão com o servidor.');
    }
  };

  const limparCampos = () => {
    setId('');
    setNome('');
    setDescricao('');
    setGravidade('');
    setLocalizacao('');
  };

  return (
    <View style={styles.container}>
      <NavBarAdmin />
      <View style={styles.content}>
        <View style={styles.logoContainer}>
          <Text style={styles.logoText}>
            <Text style={styles.logoStorm}>Storm</Text>
            <Text style={styles.logoEye}>Eye</Text>
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.title}>Gerenciar Catástrofes</Text>

          <TextInput
            placeholder="ID (somente para atualizar ou remover)"
            keyboardType="numeric"
            style={styles.input}
            value={id}
            onChangeText={setId}
          />
          <TextInput
            placeholder="Nome da catástrofe"
            style={styles.input}
            value={nome}
            onChangeText={setNome}
          />
            <TextInput
              placeholder="Descrição"
              style={styles.input}
              value={descricao}
              onChangeText={setDescricao}
            />
            <TextInput
              placeholder="Nível de gravidade (1 a 5)"
              keyboardType="numeric"
              style={styles.input}
              value={gravidade}
              onChangeText={setGravidade}
            />
          <TextInput
            placeholder="Localização"
            style={styles.input}
            value={localizacao}
            onChangeText={setLocalizacao}
          />

          <TouchableOpacity style={styles.buttonPrimary} onPress={handleAdd}>
            <Text style={styles.buttonText}>Adicionar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonSecondary} onPress={handleUpdate}>
            <Text style={styles.buttonText}>Atualizar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonDanger} onPress={handleDelete}>
            <Text style={styles.buttonText}>Remover</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.backText}>Logout</Text>
          </TouchableOpacity>
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
  content: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    marginBottom: 8,
    marginTop: -50,
    alignItems: 'center',
  },
  logoText: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  logoStorm: {
    color: colors.background,
  },
  logoEye: {
    color: colors.primary,
  },
  card: {
    width: '100%',
    backgroundColor: '#f9f9f9',
    borderRadius: 12,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 6,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: 16,
    alignSelf: 'center',
  },
  input: {
    width: '100%',
    height: 48,
    backgroundColor: '#f1f1f1',
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 12,
    color: '#333',
  },
  buttonPrimary: {
    width: '100%',
    height: 48,
    backgroundColor: colors.primary,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
  },
  buttonSecondary: {
    width: '100%',
    height: 48,
    backgroundColor: colors.primary,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
  },
  buttonDanger: {
    width: '100%',
    height: 48,
    backgroundColor: colors.primary,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  backText: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
    marginTop: 16,
    textDecorationLine: 'underline',
  },
});
