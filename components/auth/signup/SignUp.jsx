import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

import styles from "./signup.style";
import { Link } from "expo-router";
import { COLORS } from "../../../constants";

const SignUp = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headText}>Create an account</Text>
      <TextInput style={styles.input} placeholder="Email" />
      <TextInput style={styles.input} placeholder="Password" />
      <TextInput style={styles.input} placeholder="ConfirmPassword" />
      <Text style={styles.contextText}>
        By clicking the <Text style={{ color: COLORS.primary }}>Register</Text>{" "}
        button, you agree to the public offer
      </Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.btnText}>Create Account</Text>
      </TouchableOpacity>
      <View style={styles.footerText}>
        <Text>I Already Have an Account</Text>
        <Link href="/login" style={styles.linkText}>
          Login
        </Link>
      </View>
    </View>
  );
};

export default SignUp;
