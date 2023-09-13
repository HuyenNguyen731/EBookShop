import React from "react";
import { View, Text, TextInput, Flex, TouchableOpacity } from "react-native";

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

      <Text style={styles.footerText}>Create An Account Sign Up</Text>
    </View>
  );
};

export default Login;
