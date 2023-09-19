import React from "react";
import { View, Text, Image } from "react-native";

import styles from "./cardbook.style";
import { images } from "../../../constants";

const CardBook = () => {
  return (
    <View style={styles.item}>
      <View style={styles.imgContainer}>
        <Image style={styles.img} source={images.profile} />
      </View>
      <Text style={styles.name}>Rèn luyện tư duy làm giàu</Text>
      <Text style={styles.price}>72.000 đ</Text>
    </View>
  );
};

export default CardBook;
