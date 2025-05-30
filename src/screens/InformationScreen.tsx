import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import NavBarClient from '../components/NavBarClient';
import colors from '../styles/colors';

export default function InformationScreen() {
  return (
    <View style={styles.container}>
      <NavBarClient />
      <View style={styles.content}>
        <Text style={styles.text}>Página Informativa</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 18,
  },
});
