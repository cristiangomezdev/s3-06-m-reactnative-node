import React from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  TouchableHighlight,
} from "react-native";
import { Link, useLocation, useNavigate } from "react-router-native";
import { subNavProductsData } from "./subNavProductsData";

//Luego agregarle si se requiere una función de isActive
const SubNavProducts = () => {
  const location = useLocation();
  const subcategory =  new URLSearchParams(location.search).get('subcategoriesId');
  const navigate = useNavigate();
  const navigateTo = (path) => {
    navigate(path);
  };

  return (
    <ScrollView horizontal style={styles.container}>
      {subNavProductsData.perros.data.map((data, i) => (
        <TouchableHighlight
          key={i}
          underlayColor="rgba(155, 155, 155, 0)"
          style={styles.card}
          onPress={() => {
            navigateTo(data.to);
          }}
        >
          <Text style={subcategory !== data.subcategoryId ? styles.link : styles.link2}>{data.subcategory}</Text>
        </TouchableHighlight>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
    paddingRight: 20,
    backgroundColor: "white",
  },
  link: {
    marginRight: 20,
    marginBottom: 15,
    marginVertical: 10,
    padding: 20,
    paddingVertical: 5,
    paddingBottom: 5,
    backgroundColor: "#56CBF9",
    borderRadius: 25,
    fontSize: 16,
    color:'white',
  },
  link2: {
    marginRight: 20,
    marginBottom: 15,
    marginVertical: 10,
    padding: 20,
    color:'white',
    paddingVertical: 5,
    paddingBottom: 5,
    backgroundColor: "#FF729F",
    borderRadius: 25,
    fontSize: 16,
  },
});

export default SubNavProducts;
