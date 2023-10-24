import React, { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import { View, Text, TouchableOpacity, TextInput } from "react-native";

import styles from "./payment.style";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Payment = () => {
  const route = useRoute();
  const [token, setToken] = useState(null);
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [error, setError] = useState("");

  const handleCheckout = async () => {
    if (!token) {
      setError("Please log in to make a purchase.");
      return;
    }

    if (!fullName || !phoneNumber || !address) {
      setError("Please fill in all the required fields.");
      setTimeout(() => setError(""), 5000);
      return;
    }

    try {
      const res = await axios.put(
        `https://localhost:7135/api/orders/checkout/${route.params.orderId}`,
        null,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (res.status === 200) {
        navigation.navigate("/success");
      }
    } catch (error) {
      setError("Lỗi mua hàng: " + error.message);
    }
  };

  useEffect(() => {
    AsyncStorage.getItem("TOKEN")
      .then((TOKEN) => {
        if (TOKEN) {
          setToken(TOKEN);
        } else {
          console.error("Token does not exist");
        }
      })
      .catch((error) => {
        console.error("Error when getting token from AsyncStorage: ", error);
      });
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <View style={styles.inputLabel}>
          <Text style={styles.label}>Họ và tên</Text>
          <TextInput
            style={styles.input}
            value={fullName}
            onChangeText={(text) => setFullName(text)}
          />
        </View>
        <View style={styles.inputLabel}>
          <Text style={styles.label}>Số điện thoại</Text>
          <TextInput
            style={styles.input}
            value={phoneNumber}
            onChangeText={(text) => setPhoneNumber(text)}
          />
        </View>
        <View style={styles.inputLabel}>
          <Text style={styles.label}>Địa chỉ</Text>
          <TextInput
            style={styles.input}
            value={address}
            onChangeText={(text) => setAddress(text)}
          />
        </View>
      </View>
      {error ? <Text style={styles.errorText}>{error}</Text> : null}

      <TouchableOpacity style={styles.button} onPress={handleCheckout}>
        <Text style={styles.btnText}>Check out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Payment;
