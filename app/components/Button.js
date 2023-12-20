import { Text, Pressable, StyleSheet } from "react-native";
import React from "react";

export default function Button({title, pressHandle }) {

  return (
    <Pressable onPress={pressHandle} style={styles.button}>
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#0C28F5",
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 15,
  },
  title: {
    fontSize: 20,
    color: "white",
  },
});
