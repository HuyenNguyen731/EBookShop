import React from "react";
import { useRoute } from "@react-navigation/native";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Link } from "expo-router";

import styles from "./detailsbook.style";
import { icons, images } from "../../constants";

const DetailsBook = () => {
  const route = useRoute();
  console.log(route.params.id, "route");

  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image style={styles.img} source={images.b1} />
      </View>
      <Text style={styles.nameBook}>Rèn luyện tư duy làm giàu</Text>
      <Text style={styles.price}>72.000 đ</Text>
      <Text style={styles.title}>Chi tiết sản phẩm</Text>
      <Text style={styles.description}>
        Perhaps the most iconic sneaker of all-time, this original "Chicago"?
        colorway is the cornerstone to any sneaker collection. Made famous in
        1985 by Michael Jordan, the shoe has stood the test of time, becoming
        the most famous colorway of the Air Jordan 1. This 2015 release saw the
        ...More
      </Text>
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
      <View style={styles.textBottom}>
        <Text style={styles.textDelivery}>Delivery in</Text>
        <Text style={styles.textTime}>1 within Hour</Text>
      </View>

      <View style={styles.wraper}>
        <TouchableOpacity style={styles.btnFooter}>
          <Image style={styles.icon} source={icons.view} />
          <Link href="/home" style={styles.btnText}>
            View Similar
          </Link>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnFooter}>
          <Image style={styles.icon} source={icons.compare} />
          <Link href="/home" style={styles.btnText}>
            Add to Compare
          </Link>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DetailsBook;
