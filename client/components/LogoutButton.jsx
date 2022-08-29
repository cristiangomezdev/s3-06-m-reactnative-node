import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-native";
import { logout } from "../actions/auth";

export const LogoutButton = () => {
  const state = useSelector((state) => state);
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(logout()).then((response) => {
      if (response.status === "success") {
        navigate("/");
      }
    });
  };
  return (
    <View style={styles.container}>
      <Button onPress={() => onLogout()} title="Logout" />
    </View>
  );
};

const styles = StyleSheet.create({ container: { backgroundColor: "red", marginBottom : 40 } });
