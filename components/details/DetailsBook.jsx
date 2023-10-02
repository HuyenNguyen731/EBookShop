import React, { useState } from "react";
import { useRoute } from "@react-navigation/native";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Link } from "expo-router";

import styles from "./detailsbook.style";
import { icons, images } from "../../constants";

const DetailsBook = () => {
  const route = useRoute();
  console.log(route.params.id, "route");

  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };
  const line = expanded ? 0 : 2;
  
  const text =
    "Perhaps the most iconic sneaker of all-time, this original colorway is the cornerstone to any sneaker collection. Made famous in1985 by Michael Jordan, the shoe has stood the test of time, becomingthe most famous colorway of the Air Jordan 1. This 2015 release saw the  Perhaps the most iconic sneaker of all-time, this original colorway is the cornerstone to any sneaker collection. Made famous in";

  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image style={styles.img} source={images.b1} />
      </View>
      <Text style={styles.nameBook}>Rèn luyện tư duy làm giàu</Text>
      <Text style={styles.price}>72.000 đ</Text>

      <View style={styles.wraper}>
        <TouchableOpacity style={styles.buttonBuy}>
          <Text style={styles.buttonText}>Buy Now</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonAdd}>
          <Link href="/cart" style={styles.buttonText}>
            Add to Cart
          </Link>
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>Chi tiết sản phẩm</Text>
      <Text style={[styles.description]} numberOfLines={line}>
        {text}
      </Text>
      <TouchableOpacity onPress={toggleExpanded}>
        <Text style={styles.btn}>{expanded ? "See less" : "See more"}</Text>
      </TouchableOpacity>

      <View style={styles.textBottom}>
        <Text style={styles.textDelivery}>Delivery in</Text>
        <Text style={styles.textTime}>1 within Hour</Text>
      </View>
    </View>
  );
};

export default DetailsBook;
