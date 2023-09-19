import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

import styles from "./login.style";

const Login = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headText}>Welcome Back!</Text>
      <TextInput style={styles.input} placeholder="Email" />
      <TextInput style={styles.input} placeholder="Password" />
      <Text style={styles.contextText}>Forgot Password?</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.btnText}>Login</Text>
      </TouchableOpacity>
      <View style={styles.footerText}>
        <Text>Create An Account</Text>
        <Text style={styles.linkText}>Sign Up</Text>
      </View>
    </View>
  );
};

export default Login;
