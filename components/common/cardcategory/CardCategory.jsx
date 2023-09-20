import React from "react";
import { View, Text, Image } from "react-native";

import styles from "./cardcategory.style";

const CardCategory = ({ name, url }) => {
  return (
    <View>
      <View style={styles.imgContainer}>
        <Image style={styles.img} source={url} />
      </View>
      <Text style={styles.nameCategory}>{name}</Text>
    </View>
  );
};

export default CardCategory;
