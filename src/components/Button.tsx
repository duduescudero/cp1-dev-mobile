import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

type Props = {
  title: string;
  onPress: () => void;
};

export default function Button({ title, onPress }: Props) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#ED145B",
    paddingVertical: 16,
    borderRadius: 20,
    alignItems: "center",
    marginTop: 8,
  },
  text: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});