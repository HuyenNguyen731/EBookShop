import React from "react";
import { View, Text, Image } from "react-native";

import styles from "./cardproduct.style";
import { Link } from "expo-router";
import { icons } from "../../../constants";

const CardProduct = ({ id, name, price, url, sale }) => {
  return (
    <Link
      href={{
        pathname: "/book/[id]",
        params: { id: id },
      }}
    >
      <View style={styles.item}>
        {sale && <Image style={styles.iconSale} source={icons.sale} />}
        <View style={styles.imgContainer}>
          <Image style={styles.img} source={url} />
        </View>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.price}>{price}</Text>
      </View>
    </Link>
  );
};

export default CardProduct;
