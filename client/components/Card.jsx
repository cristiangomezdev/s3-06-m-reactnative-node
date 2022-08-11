import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";

export default function Card({ description, uri }) {
  return (
    <View style={[styles.container, styles.shadowProp]}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{description}</Text>
      </View>
      <Image
        style={styles.image}
        source={{
          uri: uri,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "#000000",
    fontSize: 18,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 343,
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderRadius: 5,
    marginBottom: 10,
  },
  textContainer: {
    width: 170,
    height: 100,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: { width: 170, height: 100, borderRadius: 5 },
  shadowProp: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
