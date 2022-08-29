import React from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  TouchableHighlight,
} from "react-native";
import { Link, useNavigate } from "react-router-native";
import { subNavProductsData } from "./subNavProductsData";

//Luego agregarle si se requiere una función de isActive
const SubNavProducts = () => {
  const navigate = useNavigate();
  const navigateTo = (path) => {
    navigate(path);
  };

  return (
    <ScrollView horizontal style={styles.container}>
      {subNavProductsData.map((data, i) => (
        <TouchableHighlight
          key={i}
          underlayColor="rgba(155, 155, 155, 0.1)"
          style={styles.card}
          onPress={() => {
            navigateTo(data.to);
          }}
        >
          <Text style={styles.link}>{data.text}</Text>
        </TouchableHighlight>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: "white",
  },
  link: {
    marginRight: 20,
    marginBottom: 10,
    marginVertical: 10,
    padding: 20,
    paddingVertical: 5,
    paddingBottom: 5,
    backgroundColor: "#56CBF9",
    borderRadius: 25,
    fontSize: 16,
  },
});

export default SubNavProducts;
