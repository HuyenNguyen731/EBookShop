import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

import styles from "./cardorder.style";
import { images } from "../../../constants";

const Login = () => {
  return (
    <View style={styles.item}>
      <View style={styles.imgContainer}>
        <Image style={styles.img} source={images.profile} />
      </View>
      <View>
        <Text style={styles.name}>Rèn luyện tư duy làm giàu</Text>
        <Text style={styles.price}>72.000 đ</Text>
        <View style={styles.wrapperButton}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.btnText}>-</Text>
          </TouchableOpacity>
          <Text>2</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.btnText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;
