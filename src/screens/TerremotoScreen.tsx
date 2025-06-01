import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';
import colors from '../styles/colors';

export default function TerremotoScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require('../../assets/terremoto.jpg')}
        style={styles.image}
      />
      <Text style={styles.title}>Terremoto</Text>
      <Text style={styles.description}>
        Terremotos são causados por movimentos bruscos das placas tectônicas, resultando em tremores que podem derrubar prédios, causar deslizamentos e romper estruturas como pontes e estradas.
      </Text>

      <Text style={styles.subtitle}>Antes do terremoto:</Text>
      <Text style={styles.guide}>
        • Estabeleça um plano de emergência familiar e escolha pontos de encontro.{"\n"}
        • Monte um kit com lanterna, água, alimentos, medicamentos, apito, rádio e documentos.{"\n"}
        • Identifique locais seguros dentro de casa, como sob mesas resistentes ou batentes de portas estruturais.{"\n"}
        • Fixe estantes e armários na parede e armazene objetos pesados nas prateleiras inferiores.
      </Text>

      <Text style={styles.subtitle}>Durante o terremoto:</Text>
      <Text style={styles.guide}>
        • Abaixe-se, cubra a cabeça e segure firme em uma estrutura sólida.{"\n"}
        • Fique longe de janelas, espelhos, portas de vidro e objetos que possam cair.{"\n"}
        • Se estiver na rua, afaste-se de postes, árvores e construções.{"\n"}
        • Se estiver em um veículo, pare em local seguro e permaneça dentro até o tremor passar.
      </Text>

      <Text style={styles.subtitle}>Após o terremoto:</Text>
      <Text style={styles.guide}>
        • Evacue calmamente, evitando elevadores.{"\n"}
        • Verifique feridos e preste os primeiros socorros se necessário.{"\n"}
        • Tenha cuidado com vazamentos de gás ou curtos elétricos.{"\n"}
        • Mantenha-se informado por meios oficiais e prepare-se para possíveis réplicas.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 40,
    backgroundColor: '#f2f6f9',
  },
  image: {
    width: '100%',
    height: 180,
    borderRadius: 12,
    marginBottom: 20,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: 12,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#333',
    marginBottom: 16,
    lineHeight: 22,
    textAlign: 'justify',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.primary,
    marginBottom: 8,
  },
  guide: {
    fontSize: 15,
    color: '#444',
    lineHeight: 22,
    marginBottom: 16,
  },
});
