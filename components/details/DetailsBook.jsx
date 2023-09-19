import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

import styles from "./detailsbook.style";
import { images } from "../../constants";

const DetailsBook = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image style={styles.img} source={images.profile} />
      </View>
      <Text style={styles.nameBook}>Rèn luyện tư duy làm giàu</Text>
      <Text style={styles.price}>72.000 đ</Text>
      <Text style={styles.title}>Product Details</Text>
      <Text style={styles.description}>
        Perhaps the most iconic sneaker of all-time, this original "Chicago"?
        colorway is the cornerstone to any sneaker collection. Made famous in
        1985 by Michael Jordan, the shoe has stood the test of time, becoming
        the most famous colorway of the Air Jordan 1. This 2015 release saw the
        ...More
      </Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Add to Cart</Text>
      </TouchableOpacity>
      <View>
        <Text>Delivery in</Text>
        <Text>1 within Hour</Text>
      </View>
    </View>
  );
};

export default DetailsBook;
