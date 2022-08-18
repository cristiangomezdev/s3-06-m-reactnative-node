import React from "react";
import { Text, View, Image, StyleSheet} from "react-native";
import { Link, useLocation, useNavigate } from "react-router-native";
import searchIcon from "../assets/search-icon.png";
import backToIcon from "../assets/back-to-icon.png";
import { useState } from "react";

const Search = () => {
  let navigate = useNavigate()
  const handleClick = (e)=>{
    e.preventDefault()
    navigate(-1)

  }
  return (
    <View style={styles.container}>
      <Link to="/" onPress={handleClick} underlayColor="rgba(0,0,0,0)">
        <Image source={backToIcon} style={styles.image} />
      </Link>
      <Image source={searchIcon} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F9F9F9",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    width: "100%",
  },
  image: {
    width: 24,
    height: 24,
  },
});

export default Search;
