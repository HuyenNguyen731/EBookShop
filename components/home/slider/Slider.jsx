import React from "react";
import { View, Image } from "react-native";

import styles from "./slider.style";
import { images } from "../../../constants";

const Slider = () => {
  return (
    <View style={styles.imgContainer}>
      <Image style={styles.img} source={images.banner} />
    </View>
  );
};

export default Slider;
