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
          setData(response?.data?.data?.orderItems);
        })
        .catch((error) => {
          console.error("Error when we call API: ", error);
        });
    }
  }, [token]);

  return (
    <View style={styles.container}>
      <View style={styles.order}>
        {data?.map((item, index) => (
          <CardOrder
            url={item?.book?.image}
            name={item?.book?.name}
            price={item?.book?.price}
            key={item?.bookId}
          />
        ))}
      </View>
      <View style={styles.payment}>
        <View style={styles.wrapper}>
          <Text style={styles.text}>Tổng tiền:</Text>
          <Text style={styles.total}>325.000 đ</Text>
        </View>
        <TouchableOpacity style={styles.button}>
          <Link href="/check-out" style={styles.btnText}>
            Check out
          </Link>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Cart;
