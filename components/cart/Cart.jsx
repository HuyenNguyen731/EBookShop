import React from "react";
import { View, Text } from "react-native";

import styles from "./cart.style";
import CardOrder from "../common/cardorder/CardOrder";

const Cart = () => {
  return (
    <View style={styles.item}>
      <CardOrder />
    </View>
  );
};

export default Cart;
