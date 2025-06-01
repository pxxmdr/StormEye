import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';
import colors from '../styles/colors';

export default function VentoForteScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require('../../assets/ventoforte.jpg')}
        style={styles.image}
      />

      <Text style={styles.title}>Vento Forte</Text>

      <Text style={styles.description}>
        Os ventos fortes são fenômenos atmosféricos que podem ocorrer repentinamente e atingir grandes velocidades, provocando quedas de árvores, destelhamento de casas, quebra de vidros e danos em estruturas frágeis. São comuns durante a passagem de frentes frias ou tempestades severas e exigem atenção e preparo adequado para evitar acidentes.
      </Text>

      <Text style={styles.subtitle}>Antes do vento forte:</Text>
      <Text style={styles.guide}>
        • Reforce janelas e portas com trancas ou fitas adesivas em formato de “X”.{"\n"}
        • Verifique a fixação de telhas, antenas, toldos e estruturas expostas.{"\n"}
        • Retire objetos soltos de varandas, quintais ou telhados que possam ser arremessados pelo vento.{"\n"}
        • Estacione veículos em locais protegidos, longe de árvores e postes.
      </Text>

      <Text style={styles.subtitle}>Durante o vento forte:</Text>
      <Text style={styles.guide}>
        • Permaneça em local fechado e seguro, longe de janelas ou portas de vidro.{"\n"}
        • Evite sair de casa. Se estiver na rua, busque abrigo imediato.{"\n"}
        • Nunca se abrigue sob árvores ou estruturas frágeis.{"\n"}
        • Se estiver dirigindo, reduza a velocidade, segure firme o volante e pare em local seguro.
      </Text>

      <Text style={styles.subtitle}>Após o vento forte:</Text>
      <Text style={styles.guide}>
        • Verifique com cuidado os danos na estrutura da residência antes de circular.{"\n"}
        • Atenção redobrada com cabos elétricos caídos e estruturas instáveis. Acione os órgãos competentes.{"\n"}
        • Siga os comunicados da Defesa Civil e mantenha o kit de emergência acessível.
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
    textAlign: 'justify',
  },
});
