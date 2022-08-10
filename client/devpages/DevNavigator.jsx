import React from "react";
import { Text, View, ScrollView, StyleSheet } from "react-native";
import { Link } from "react-router-native";

export default function DevNavigator() {
  return (
    <View>
      <ScrollView horizontal style={styles.scrollView}>
        <View style={styles.contentContainer}>
          <Link style={styles.link} to="/">
            <Text style={styles.redirectTo}>Volver al inicio</Text>
          </Link>
          <Link style={styles.link} to="/ClaudiaPage">
            <Text style={styles.redirectTo}>Claudia Page</Text>
          </Link>
          <Link style={styles.link} to="/CrisPage">
            <Text style={styles.redirectTo}>Cris Page</Text>
          </Link>
          <Link style={styles.link} to="/EzePage">
            <Text style={styles.redirectTo}>Eze Page</Text>
          </Link>
          <Link style={styles.link} to="/OrianaPage">
            <Text style={styles.redirectTo}>Oriana Page</Text>
          </Link>
          <Link style={styles.link} to="/RichardPage">
            <Text style={styles.redirectTo}>Richard Page</Text>
          </Link>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  link: {
    marginEnd: 20,
  },
  contentContainer: {
    flexDirection: "row",
    height: 100,
    alignItems: "center",
    paddingLeft: 20,
  },

  redirectTo: {
    backgroundColor: "#C20FE1",
    padding: 10,
    width: 100,
    textAlign: "center",
    borderRadius: 4,
    marginBottom: 10,
    color: "#ffffff",
    fontWeight: "500",
  },
});
