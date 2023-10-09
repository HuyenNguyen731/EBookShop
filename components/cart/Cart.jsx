import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import styles from "./cart.style";
import CardOrder from "../common/cardorder/CardOrder";
import { images } from "../../constants";
import { Link } from "expo-router";

const data = [
  {
    id: 1,
    url: images.b3,
    name: "Người thông minh - giải quyết vấn đề như thế nào?",
    price: "175.000 đ",
    number: 1,
  },
  {
    id: 2,
    url: images.b4,
    name: "7 chiến lược để sống sung túc hạnh phúc",
    price: "145.000 đ",
    number: 1,
  },
];

const Cart = () => {
  return (
    <View style={styles.container}>
      <View style={styles.order}>
        {data?.map((item) => (
          <CardOrder {...item} key={item?.id} />
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
