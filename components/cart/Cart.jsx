import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./cart.style";
import CardOrder from "../common/cardorder/CardOrder";
import { Link } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const Cart = () => {
  const [data, setData] = useState([]);
  const [token, setToken] = useState(null);

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

    if (token) {
      axios
        .get("https://localhost:7135/api/orders/cart", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setData(response?.data?.data);
        })
        .catch((error) => {
          console.error("Error when we call API: ", error);
        });
    }
  }, [token]);

  const handleCheckOut = () => {
    const orderId = data?.orderId;

    if (orderId) {
      navigation.navigate(`/check-out?orderId=${orderId}`);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.order}>
        {data?.orderItems?.map((item, index) => (
          <CardOrder
            {...item}
            token={token}
            key={item?.bookId}
            url={item?.book?.image}
            name={item?.book?.name}
            price={item?.book?.price}
            quantity={item?.quantity}
            orderItemId={item?.orderItemId}
          />
        ))}
      </View>
      <View style={styles.payment}>
        <View style={styles.wrapper}>
          <Text style={styles.text}>Tổng tiền:</Text>
          <Text style={styles.total}>{data?.totalAmount} đ</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={handleCheckOut}>
          <Text style={styles.btnText}>Check out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Cart;
