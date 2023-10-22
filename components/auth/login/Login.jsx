import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import styles from "./login.style";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const data = {
        email: email,
        hashedPassword: password,
      };

      const response = await axios.post(
        "https://localhost:7135/api/User/login",
        data
      );
      const token = response?.data?.jwtToken;

      if (token) {
        await AsyncStorage.setItem("TOKEN", token);
        navigation.navigate("home");
      }
    } catch (error) {
      console.error("Lỗi đăng nhập: ", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headText}>Welcome Back!</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={(text) => setPassword(text)}
      />
      <Text style={styles.contextText}>Forgot Password?</Text>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.btnText}>Login</Text>
      </TouchableOpacity>
      <View style={styles.footerText}>
        <Text>Create An Account</Text>
        <Link href="/sign-up" style={styles.linkText}>
          Sign Up
        </Link>
      </View>
    </View>
  );
};

export default Login;
