import React from "react";
import { View, Text, Image } from "react-native";

import styles from "./cardproduct.style";
import { Link } from "expo-router";
import { getImageUrl } from "../../../helpers/image";

const CardProduct = ({ id, name, price, url, author }) => {
  return (
    <Link
      href={{
        pathname: "/book/[id]",
        params: { id: id },
      }}
      style={styles.container}
    >
      <View style={styles.item}>
        <View style={styles.imgContainer}>
          <Image style={styles.img} source={{ uri: getImageUrl(url) }} />
        </View>
        <Text style={styles.name} numberOfLines={2}>
          {name}
        </Text>
        <Text style={styles.author}>{author}</Text>
        <Text style={styles.price}>{price} đ</Text>
      </View>
    </Link>
  );
};

export default CardProduct;
