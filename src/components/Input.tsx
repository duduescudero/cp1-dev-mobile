import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

type Props = {
  label: string;
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
};

export default function Input({
  label,
  placeholder,
  value,
  onChangeText,
}: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>

      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#8A8A8A"
        value={value}
        onChangeText={onChangeText}
        autoCapitalize="none"
      />
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
  input: {
    backgroundColor: "#1F1F27",
    borderWidth: 1,
    borderColor: "#2E2E38",
    borderRadius: 16,
    paddingHorizontal: 14,
    paddingVertical: 14,
    color: "#FFFFFF",
    fontSize: 15,
  },
});