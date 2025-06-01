import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';
import colors from '../styles/colors';

export default function TempestadeSeveraScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require('../../assets/tempestadesevera.png')}
        style={styles.image}
      />

      <Text style={styles.title}>Tempestade Severa</Text>
      <Text style={styles.description}>
        Tempestades severas são eventos climáticos intensos que podem incluir raios, ventos fortes, granizo e chuvas volumosas. Elas têm potencial para causar alagamentos, quedas de energia, interrupção de serviços e danos a residências e veículos.
      </Text>

      <Text style={styles.subtitle}>Antes da tempestade:</Text>
      <Text style={styles.guide}>
        • Acompanhe os alertas meteorológicos e siga as orientações da defesa civil.{"\n"}
        • Guarde objetos soltos do quintal ou sacada, como vasos e móveis leves.{"\n"}
        • Carregue lanternas, celulares e tenha pilhas sobressalentes.{"\n"}
        • Evite sair de casa durante os alertas.
      </Text>

      <Text style={styles.subtitle}>Durante a tempestade:</Text>
      <Text style={styles.guide}>
        • Mantenha-se em local fechado e longe de janelas.{"\n"}
        • Desligue aparelhos eletrônicos da tomada para evitar queimas por raios.{"\n"}
        • Evite contato com água corrente (chuveiro, torneira) e objetos metálicos.{"\n"}
        • Não se abrigue debaixo de árvores ou em áreas descampadas.
      </Text>

      <Text style={styles.subtitle}>Após a tempestade:</Text>
      <Text style={styles.guide}>
        • Verifique danos com cautela, principalmente em estruturas e fiações.{"\n"}
        • Não toque em cabos elétricos soltos e comunique à concessionária local.{"\n"}
        • Evite transitar por áreas alagadas até confirmação de segurança.{"\n"}
        • Reabasteça seu kit de emergência, se necessário.
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
