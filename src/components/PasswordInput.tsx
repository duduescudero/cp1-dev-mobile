import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

type Props = {
  label: string;
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
};

export default function PasswordInput({
  label,
  placeholder,
  value,
  onChangeText,
}: Props) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>

      <View style={styles.passwordBox}>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor="#8A8A8A"
          secureTextEntry={!showPassword}
          value={value}
          onChangeText={onChangeText}
        />

        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Text style={styles.actionText}>
            {showPassword ? "Ocultar" : "Mostrar"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 18,
  },
  label: {
    color: "#ED145B",
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 8,
  },
  passwordBox: {
    backgroundColor: "#1F1F27",
    borderWidth: 1,
    borderColor: "#2E2E38",
    borderRadius: 16,
    paddingHorizontal: 14,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
    paddingVertical: 14,
    color: "#FFFFFF",
    fontSize: 15,
  },
  actionText: {
    color: "#ED145B",
    fontWeight: "bold",
  },
});