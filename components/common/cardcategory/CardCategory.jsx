import React from "react";
import { View, Text, Image } from "react-native";

import styles from "./cardcategory.style";
import { images } from "../../../constants";

const CardCategory = () => {
  return (
    <View>
      <View style={styles.imgContainer}>
        <Image style={styles.img} source={images.profile} />
      </View>
      <Text style={styles.nameCategory}>Best seller</Text>
    </View>
  );
};

export default CardCategory;
