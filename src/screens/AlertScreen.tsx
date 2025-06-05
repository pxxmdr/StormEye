import React, { useEffect, useState, useCallback } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
  Alert,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import colors from "../styles/colors";
import NavBarAdmin from "../components/NavBarAdmin";
import NavBarClient from "../components/NavBarClient";
import AlertCard from "../components/AlertCard";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../../App";

type Catastrofe = {
  id: number;
  nome: string;
  descricao: string;
  nivelGravidade: number;
  localizacao: string;
};

export default function AlertScreen() {
  const [userType, setUserType] = useState<"admin" | "cliente" | null>(null);
  const [loading, setLoading] = useState(true);
  const [catastrofes, setCatastrofes] = useState<Catastrofe[]>([]);
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const API_BASE = "http://172.16.71.175:8080";

  useEffect(() => {
    const fetchUserType = async () => {
      try {
        const storedType = await AsyncStorage.getItem("userType");
        if (storedType === "admin" || storedType === "cliente") {
          setUserType(storedType);
        }
      } catch (error) {
        console.error("Erro ao buscar tipo de usuário:", error);
      }
    };

    fetchUserType();
  }, []);

  useFocusEffect(
    useCallback(() => {
      const fetchCatastrofes = async () => {
        setLoading(true);
        try {
          const response = await fetch(`${API_BASE}/catastrofes`);
          if (response.ok) {
            const data = await response.json();
            setCatastrofes(data.content || []);
          } else {
            const errorText = await response.text();
            Alert.alert("Erro", `Erro ao carregar alertas:\n${errorText}`);
          }
        } catch (error) {
          Alert.alert("Erro", "Erro de conexão com o servidor.");
        } finally {
          setLoading(false);
        }
      };

      fetchCatastrofes();
    }, [])
  );

  const handleLogout = async () => {
    await AsyncStorage.removeItem("userType");
    navigation.navigate("Login");
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }

  return (
    <LinearGradient colors={["#8B0000", "#000000"]} style={styles.container}>
      {userType === "admin" ? <NavBarAdmin /> : <NavBarClient />}

      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.emoji}>⚠️</Text>
        <Text style={styles.title}>ALERTA GLOBAL</Text>
        <Text style={styles.subtitle}>
          Confira os últimos alertas de catástrofes
        </Text>

        <View style={styles.grid}>
          {catastrofes.map((catastrofe, index) => (
            <View key={catastrofe.id} style={styles.cardWrapper}>
              <AlertCard
                index={index}
                nome={catastrofe.nome}
                descricao={catastrofe.descricao}
                gravidade={catastrofe.nivelGravidade}
                localizacao={catastrofe.localizacao}
              />
            </View>
          ))}
        </View>

        {userType === "cliente" && (
          <TouchableOpacity onPress={handleLogout}>
            <Text style={styles.logout}>Logout</Text>
          </TouchableOpacity>
        )}
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scroll: {
    paddingBottom: 30,
    paddingTop: 20,
    paddingHorizontal: 12,
    alignItems: "center",
  },
  emoji: {
    fontSize: 50,
    marginBottom: 4,
    color: "#fff",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#FF4444",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#fff",
    marginBottom: 20,
    textAlign: "center",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    width: "100%",
  },
  cardWrapper: {
    width: "48%",
    marginBottom: 16,
    alignSelf: "flex-start",
  },
  logout: {
    marginTop: 30,
    color: "#fff",
    fontSize: 14,
    textDecorationLine: "underline",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.background,
  },
});