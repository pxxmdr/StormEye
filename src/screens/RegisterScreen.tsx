import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import colors from "../styles/colors";

export default function RegisterScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <Image
          source={require("../../assets/StormEyeLogo.png")}
          style={styles.logo}
        />
      </View>

      <View style={styles.formSection}>
        <View style={styles.card}>
          <Text style={styles.title}>Cadastro</Text>

          <TextInput
            placeholder="CPF"
            placeholderTextColor="#999"
            keyboardType="numeric"
            style={styles.input}
          />

          <TextInput
            placeholder="Nome"
            placeholderTextColor="#999"
            style={styles.input}
          />

          <TextInput
            placeholder="Usuário"
            placeholderTextColor="#999"
            style={styles.input}
          />

          <TextInput
            placeholder="Senha"
            placeholderTextColor="#999"
            secureTextEntry
            style={styles.input}
          />

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={styles.buttonText}>Cadastrar</Text>
          </TouchableOpacity>

          <Text style={styles.loginText}>
            Já tem uma conta?{" "}
            <Text
              style={{ fontWeight: "bold", color: colors.primary }}
              onPress={() => navigation.navigate("Login")}
            >
              Entrar
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f6f9",
  },
  topSection: {
    alignItems: "center",
    marginTop: 20,
  },
  logo: {
    width: 215,
    height: 215,
    resizeMode: "contain",
  },
  formSection: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 24,
    marginTop: 12,
    width: "100%",
  },
  card: {
    width: "100%",
    backgroundColor: "#f9f9f9",
    borderRadius: 12,
    padding: 24,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 4,
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: colors.primary,
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 48,
    backgroundColor: "#eaeaea",
    borderRadius: 8,
    paddingHorizontal: 16,
    color: "#333",
    marginBottom: 16,
  },
  button: {
    width: "100%",
    height: 48,
    backgroundColor: colors.primary,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 8,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  loginText: {
    fontSize: 14,
    marginTop: 12,
    color: "#333",
  },
});
