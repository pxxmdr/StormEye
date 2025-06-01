import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';
import colors from '../styles/colors';

export default function GranizoScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require('../../assets/granizo.jpg')}
        style={styles.image}
      />

      <Text style={styles.title}>Granizo</Text>
      <Text style={styles.description}>
        O granizo é um fenômeno meteorológico que ocorre durante tempestades intensas, quando gotas de chuva congelam em altitudes elevadas e caem em forma de pedras de gelo. Essas pedras podem variar de tamanho e causar danos significativos a veículos, telhados, plantações e até ferimentos em pessoas e animais.
      </Text>

      <Text style={styles.subtitle}>Antes do granizo:</Text>
      <Text style={styles.guide}>
        • Fique atento a alertas meteorológicos de tempestades com granizo.{"\n"}
        • Estacione veículos em locais cobertos, como garagens ou áreas protegidas.{"\n"}
        • Reforce coberturas frágeis com lonas ou estruturas provisórias, se possível.{"\n"}
        • Acondicione objetos do quintal ou varanda que possam ser danificados ou arremessados.
      </Text>

      <Text style={styles.subtitle}>Durante o granizo:</Text>
      <Text style={styles.guide}>
        • Abrigue-se imediatamente em local coberto e seguro, de preferência longe de janelas.{"\n"}
        • Não permaneça em áreas abertas ou tente correr sob chuva de granizo.{"\n"}
        • Proteja crianças, idosos e animais domésticos.{"\n"}
        • Evite o uso de aparelhos eletrônicos ligados à rede elétrica.
      </Text>

      <Text style={styles.subtitle}>Após o granizo:</Text>
      <Text style={styles.guide}>
        • Verifique os danos com cautela, evitando locais com risco de queda de estruturas.{"\n"}
        • Comunique a defesa civil se houver prejuízos severos ou feridos.{"\n"}
        • Evite tocar em fios elétricos ou objetos metálicos que possam ter sido atingidos.{"\n"}
        • Fotografe os danos para fins de seguro ou reparação.
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
