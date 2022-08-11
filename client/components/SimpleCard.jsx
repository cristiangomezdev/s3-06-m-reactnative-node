import React from "react";
import { Text, View, StyleSheet } from "react-native";
export default function SimpleCard() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>SUMMER SALES</Text>
      <Text style={styles.subtitle}>Up to 50% off</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 343,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#56CBF9",
    borderRadius: 8,
    marginBottom: 10,
  },
  title: { fontWeight: "600", fontSize: 24 },
  subtitle: { fontWeight: "500", fontSize: 14 },
});
