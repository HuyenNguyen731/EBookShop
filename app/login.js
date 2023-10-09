import React from "react";
import { View, StyleSheet } from "react-native";
import { Stack } from "expo-router";

import { Login } from "../components";
import { COLORS } from "../constants";

const LoginPage = () => {
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: "Login" }} />
      <Login />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    alignItems: "center",
    backgroundColor: COLORS.white,
  },
});

export default LoginPage;
