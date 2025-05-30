import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type Props = {
  nome: string;
  descricao: string;
  gravidade: number;
  localizacao: string;
  index: number;
};

export default function AlertCard({ nome, descricao, gravidade, localizacao }: Props) {
  return (
    <View style={styles.card}>
      <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
        {nome}
      </Text>
      <Text style={styles.description} numberOfLines={2} ellipsizeMode="tail">
        {descricao}
      </Text>
      <Text style={styles.meta} numberOfLines={2} ellipsizeMode="tail">
        Gravidade: {gravidade} • Local: {localizacao}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    height: 140,
    backgroundColor: '#fff',
    padding: 14,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 1 },
    elevation: 2,
    justifyContent: 'space-between',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#222',
  },
  description: {
    fontSize: 13,
    color: '#444',
    marginTop: 4,
  },
  meta: {
    fontSize: 11,
    color: '#666',
    marginTop: 6,
  },
});
