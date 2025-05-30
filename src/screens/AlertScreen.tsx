import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import colors from "../styles/colors";
import NavBarAdmin from "../components/NavBarAdmin";
import NavBarClient from "../components/NavBarClient";
import AlertCard from "../components/AlertCard";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../../App";

type Alerta = {
  id: number;
  nome: string;
  descricao: string;
  gravidade: number;
  localizacao: string;
};

const mockAlertas: Alerta[] = [
  {
    id: 1,
    nome: "Tornado em Oklahoma",
    descricao: "Ventos extremamente fortes",
    gravidade: 5,
    localizacao: "Oklahoma, EUA",
  },
  {
    id: 2,
    nome: "Enchente em Veneza",
    descricao: "Subida do nível da água",
    gravidade: 3,
    localizacao: "Veneza, Itália",
  },
  {
    id: 3,
    nome: "Terremoto no Japão",
    descricao: "Magnitude 7.2",
    gravidade: 4,
    localizacao: "Osaka, Japão",
  },
  {
    id: 4,
    nome: "Granizo em Munique",
    descricao: "Queda intensa de gelo",
    gravidade: 2,
    localizacao: "Munique, Alemanha",
  },
  {
    id: 5,
    nome: "Vento forte no Chile",
    descricao: "Rajadas de até 120km/h",
    gravidade: 4,
    localizacao: "Punta Arenas, Chile",
  },
  {
    id: 6,
    nome: "Tempestade severa",
    descricao: "Raios e inundações",
    gravidade: 5,
    localizacao: "Bangkok, Tailândia",
  },
  {
    id: 7,
    nome: "Deslizamento em Bogotá",
    descricao: "Encostas cederam após chuva intensa",
    gravidade: 4,
    localizacao: "Bogotá, Colômbia",
  },
  {
    id: 8,
    nome: "Incêndio florestal na Austrália",
    descricao: "Fogo se espalha rapidamente",
    gravidade: 5,
    localizacao: "Nova Gales do Sul, Austrália",
  },
];

export default function AlertScreen() {
  const [userType, setUserType] = useState<"admin" | "cliente" | null>(null);
  const [loading, setLoading] = useState(true);
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  useEffect(() => {
    const fetchUserType = async () => {
      try {
        const storedType = await AsyncStorage.getItem("userType");
        if (storedType === "admin" || storedType === "cliente") {
          setUserType(storedType);
        }
      } catch (error) {
        console.error("Erro ao buscar tipo de usuário:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchUserType();
  }, []);

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
          {mockAlertas.map((alerta, index) => (
            <View key={alerta.id} style={styles.cardWrapper}>
              <AlertCard
                index={index}
                nome={alerta.nome}
                descricao={alerta.descricao}
                gravidade={alerta.gravidade}
                localizacao={alerta.localizacao}
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
