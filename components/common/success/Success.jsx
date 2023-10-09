import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

import { images } from "../../../constants";
import { Link } from "expo-router";
import styles from "./success.style";

const Success = () => {
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.imgContainer}>
          <Image style={styles.img} source={images.bags} />
        </View>
        <Text style={styles.title}>Success!</Text>
        <Text style={styles.desc}>
          Your order will be delivered soon.
          <br />
          Thank you for choosing our app!
        </Text>
      </View>

      <TouchableOpacity style={styles.button}>
        <Link href="/order" style={styles.btnText}>
          Continue Shopping
        </Link>
      </TouchableOpacity>
    </View>
  );
};

export default Success;
