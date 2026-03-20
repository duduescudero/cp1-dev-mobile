import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Switch,
  TouchableOpacity,
  Alert,
  StatusBar,
} from "react-native";
import Header from "../components/Header";
import Input from "../components/Input";
import PasswordInput from "../components/PasswordInput";
import Button from "../components/Button";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [lembrar, setLembrar] = useState(false);

  function handleLogin() {
    if (!email.includes("@")) {
      Alert.alert("Erro", "Digite um e-mail válido.");
      return;
    }

    if (senha.length < 4) {
      Alert.alert("Erro", "Senha muito curta.");
      return;
    }

    Alert.alert("Sucesso", "Login realizado!");
    setEmail("");
    setSenha("");
  }

  function handleForgotPassword() {
    Alert.alert("Recuperar senha", "Função de recuperação de senha clicada.");
  }

  function handleCreateAccount() {
    Alert.alert("Criar conta", "Função de criação de conta clicada.");
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#0D0D12" />

      <View style={styles.container}>
        <Header />

        <View style={styles.card}>
          <Input
            label="E-mail"
            placeholder="Digite seu e-mail"
            value={email}
            onChangeText={setEmail}
          />

          <PasswordInput
            label="Senha"
            placeholder="Digite sua senha"
            value={senha}
            onChangeText={setSenha}
          />

          <View style={styles.row}>
            <View style={styles.switchArea}>
              <Switch
                value={lembrar}
                onValueChange={setLembrar}
                trackColor={{ false: "#4A4A55", true: "#ED145B" }}
                thumbColor="#FFFFFF"
              />
              <Text style={styles.switchText}>Lembrar acesso</Text>
            </View>

            <TouchableOpacity onPress={handleForgotPassword}>
              <Text style={styles.forgotText}>Esqueci a senha</Text>
            </TouchableOpacity>
          </View>

          <Button title="Entrar" onPress={handleLogin} />

          <TouchableOpacity
            style={styles.secondaryButton}
            onPress={handleCreateAccount}
          >
            <Text style={styles.secondaryButtonText}>Criar conta</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.footer}>Projeto acadêmico - CP1 FIAP</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#0D0D12",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 24,
    backgroundColor: "#0D0D12",
  },
  card: {
    backgroundColor: "#15151D",
    borderRadius: 24,
    padding: 22,
    borderWidth: 1,
    borderColor: "#242430",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 18,
  },
  switchArea: {
    flexDirection: "row",
    alignItems: "center",
  },
  switchText: {
    color: "#D4D4D8",
    marginLeft: 8,
    fontSize: 14,
  },
  forgotText: {
    color: "#ED145B",
    fontWeight: "bold",
    fontSize: 13,
  },
  secondaryButton: {
    marginTop: 14,
    borderWidth: 1,
    borderColor: "#ED145B",
    borderRadius: 14,
    paddingVertical: 16,
    alignItems: "center",
  },
  secondaryButtonText: {
    color: "#ED145B",
    fontSize: 16,
    fontWeight: "bold",
  },
  footer: {
    color: "#7E7E88",
    textAlign: "center",
    marginTop: 24,
    fontSize: 12,
  },
});