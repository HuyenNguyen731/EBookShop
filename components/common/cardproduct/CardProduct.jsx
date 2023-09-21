import React from "react";
import { View, Text, Image } from "react-native";

import styles from "./cardproduct.style";

const CardProduct = ({ name, price, url }) => {
  return (
    <View style={styles.item}>
      <View style={styles.imgContainer}>
        <Image style={styles.img} source={url} />
      </View>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.price}>{price}</Text>
    </View>
  );
};

export default CardProduct;
