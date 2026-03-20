import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function Header() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/fiap.png")}
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={styles.title}>Login</Text>

      <Text style={styles.subtitle}>
        Acesse sua conta para entrar no APP FIAP
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginBottom: 32,
  },
  logo: {
    width: 140,
    height: 140,
    marginBottom: 16,
  },
  title: {
    color: "#FFFFFF",
    fontSize: 30,
    fontWeight: "bold",
  },
  subtitle: {
    color: "#B0B0B8",
    fontSize: 15,
    marginTop: 8,
    textAlign: "center",
  },
});