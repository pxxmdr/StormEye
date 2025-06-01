import React from 'react';
import {View,Text,StyleSheet,Image,ScrollView,TouchableOpacity,} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../App';
import colors from '../styles/colors';
import NavBarClient from '../components/NavBarClient';

type InfoCardProps = {
  title: string;
  description: string;
  image: any;
  screenName: keyof RootStackParamList;
};

const InfoCard = ({ title, description, image, screenName }: InfoCardProps) => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate(screenName)}
      >
        <Text style={styles.buttonText}>SELECIONAR</Text>
      </TouchableOpacity>
    </View>
  );
};

export default function InformationScreen() {
  return (
    <View style={{ flex: 1 }}>
      <NavBarClient /> 
      <ScrollView contentContainerStyle={styles.container}>
        <InfoCard
          title="Tempestade Severa"
          description="Riscos de raios e alagamentos."
          image={require('../../assets/tempestadesevera.png')}
          screenName="TempestadeSeveraScreen"
        />
        <InfoCard
          title="Inundação"
          description="Acúmulo de água em regiões urbanas."
          image={require('../../assets/inundacao.jpg')}
          screenName="InundacaoScreen"
        />
        <InfoCard
          title="Tornado"
          description="Colunas de ar em rotação violenta."
          image={require('../../assets/tornado.jpg')}
          screenName="TornadoScreen"
        />
        <InfoCard
          title="Granizo"
          description="Queda de pedras de gelo."
          image={require('../../assets/granizo.jpg')}
          screenName="GranizoScreen"
        />
        <InfoCard
          title="Vento Forte"
          description="Rajadas intensas com risco de queda de árvores."
          image={require('../../assets/ventoforte.jpg')}
          screenName="VentoForteScreen"
        />
        <InfoCard
          title="Terremoto"
          description="Abalos sísmicos sentidos na superfície."
          image={require('../../assets/terremoto.jpg')}
          screenName="TerremotoScreen"
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingBottom: 32,
    backgroundColor: '#f2f6f9',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 4,
  },
  image: {
    width: 400,
    height: 225,
    borderRadius: 8,
    resizeMode: 'cover',
    marginBottom: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 6,
    textAlign: 'center',
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 12,
    textAlign: 'center',
  },
  button: {
    backgroundColor: colors.primary,
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
});
