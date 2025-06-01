import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';
import colors from '../styles/colors';

export default function TornadoScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require('../../assets/tornado.jpg')}
        style={styles.image}
      />
      <Text style={styles.title}>Tornado</Text>
      <Text style={styles.description}>
        Os tornados são colunas de ar em rotação violenta que se estendem de uma nuvem de tempestade até o solo. Possuem grande poder destrutivo, capazes de arrancar telhados, destruir construções e arremessar objetos a grandes distâncias.
      </Text>

      <Text style={styles.subtitle}>Antes do tornado:</Text>
      <Text style={styles.guide}>
        • Fique atento a alertas meteorológicos e sinais como céu escurecido repentinamente, sons semelhantes a um trem e queda abrupta de pressão.{"\n"}
        • Identifique previamente um local seguro para se abrigar: porões, banheiros internos ou cômodos sem janelas.{"\n"}
        • Monte um kit de emergência com água, lanternas, documentos, rádio, medicamentos e alimentos não perecíveis.
      </Text>

      <Text style={styles.subtitle}>Durante o tornado:</Text>
      <Text style={styles.guide}>
        • Vá imediatamente para o local seguro identificado.{"\n"}
        • Cubra sua cabeça com um travesseiro, almofada ou colchão para se proteger de destroços.{"\n"}
        • Evite janelas, portas de vidro ou áreas externas.{"\n"}
        • Se estiver em um carro, saia imediatamente e procure abrigo em locais baixos, como valas ou fossos, deitando-se e protegendo a cabeça.
      </Text>

      <Text style={styles.subtitle}>Após o tornado:</Text>
      <Text style={styles.guide}>
        • Aguarde as autoridades confirmarem que é seguro sair.{"\n"}
        • Evite fios de energia caídos, estruturas danificadas e vazamentos de gás.{"\n"}
        • Mantenha contato com familiares e esteja atento a novos alertas.
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
