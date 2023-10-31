import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
} from "react-native";
import { Link } from "expo-router";
import styles from "./login.style";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { API_URL } from "@env";
import { images } from "../../../constants";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        setError(null);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [error]);

  const handleLogin = async () => {
    try {
      const data = {
        email: email,
        hashedPassword: password,
      };

      const response = await axios.post(`${API_URL}/api/User/login`, data);
      const token = response?.data?.jwtToken;

      if (token) {
        await AsyncStorage.setItem("TOKEN", token);
        setIsLogin(true);
      }
    } catch (error) {
      setError("Failed to login !!!");
      console.error("Lỗi đăng nhập: ", error);
    }
  };

  return (
    <View style={styles.container}>
      {isLogin ? (
        <View>
          <View style={[{ width: 80, height: 80, margin: "auto" }]}>
            <Image style={styles.img} source={images.check} />
          </View>
          <Text style={styles.textSuccess}>Login successful!</Text>

          <Link href="/home" style={[{ margin: "auto" }]}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.btnText}>Go to shopping</Text>
            </TouchableOpacity>
          </Link>
        </View>
      ) : (
        <View>
          <Text style={styles.headText}>Welcome Back!</Text>
          {error && <Text style={styles.errorText}>{error}</Text>}
          <TextInput
            style={styles.input}
            placeholder="Email"
            onChangeText={(text) => setEmail(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={(text) => setPassword(text)}
          />
          <Text style={styles.contextText}>Forgot Password?</Text>
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.btnText}>Login</Text>
          </TouchableOpacity>
          <View style={styles.footerText}>
            <Text>Create An Account</Text>
            <Link href="/signup" style={styles.linkText}>
              Sign Up
            </Link>
          </View>
        </View>
      )}
    </View>
  );
};

export default Login;
