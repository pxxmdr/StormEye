import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';
import colors from '../styles/colors';

export default function InundacaoScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require('../../assets/inundacao.jpg')}
        style={styles.image}
      />

      <Text style={styles.title}>Inundação</Text>
      <Text style={styles.description}>
        As inundações ocorrem quando o volume de água excede a capacidade de drenagem de uma região, cobrindo ruas, invadindo casas e dificultando o deslocamento. Podem resultar em deslizamentos, contaminação da água potável e perdas materiais.
      </Text>

      <Text style={styles.subtitle}>Antes da inundação:</Text>
      <Text style={styles.guide}>
        • Mantenha calhas e bueiros desobstruídos para facilitar o escoamento da água.{"\n"}
        • Evite construir em áreas de risco como margens de rios e encostas.{"\n"}
        • Tenha sempre lanternas, rádio com pilhas e um kit de emergência preparado.{"\n"}
        • Guarde documentos importantes em sacos plásticos vedados.
      </Text>

      <Text style={styles.subtitle}>Durante a inundação:</Text>
      <Text style={styles.guide}>
        • Não tente atravessar áreas alagadas a pé ou de carro.{"\n"}
        • Desligue a energia elétrica e o gás caso a água comece a subir.{"\n"}
        • Leve crianças, idosos e pessoas com mobilidade reduzida para locais elevados.{"\n"}
        • Nunca consuma a água das enchentes, pois pode estar contaminada.
      </Text>

      <Text style={styles.subtitle}>Após a inundação:</Text>
      <Text style={styles.guide}>
        • Evite contato com a água estagnada, pois pode conter agentes infecciosos.{"\n"}
        • Use botas e luvas para limpar sua residência.{"\n"}
        • Ferva a água para consumo ou utilize pastilhas de purificação.{"\n"}
        • Aguarde a liberação da defesa civil antes de retornar à área afetada.
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
