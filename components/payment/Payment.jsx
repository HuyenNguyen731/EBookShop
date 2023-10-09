import React from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";

import styles from "./payment.style";
import { Link } from "expo-router";

const Payment = () => {
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.inputLabel}>
          <Text style={styles.label}>Họ và tên</Text>
          <TextInput style={styles.input} />
        </View>
        <View style={styles.inputLabel}>
          <Text style={styles.label}>Số điện thoại</Text>
          <TextInput style={styles.input} />
        </View>
        <View style={styles.inputLabel}>
          <Text style={styles.label}>Địa chỉ</Text>
          <TextInput style={styles.input} />
        </View>
      </View>

      <TouchableOpacity style={styles.button}>
        <Link href="/success" style={styles.btnText}>
          Check out
        </Link>
      </TouchableOpacity>
    </View>
  );
};

export default Payment;
