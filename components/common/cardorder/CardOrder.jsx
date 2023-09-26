import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

import styles from "./cardorder.style";
import { images } from "../../../constants";

const CardOrder = () => {
  return (
    <View style={styles.item}>
      <View style={styles.imgContainer}>
        <Image style={styles.img} source={images.b1} />
      </View>
      <View
        style={{
          display: "flex",
          flex: 1,
          padding: 8,
          justifyContent: "space-between",
        }}
      >
        <View>
          <Text style={styles.name}>Rèn luyện tư duy làm giàu</Text>
          <Text style={styles.author}>By Jake Knapp</Text>
          <Text style={styles.price}>72.000 đ</Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "end",
            justifyContent: "space-between",
          }}
        >
          <Text style={styles.count}>Số lượng</Text>
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
    </View>
  );
};

export default CardOrder;
