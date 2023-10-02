import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

import styles from "./cardorder.style";

const CardOrder = ({ url, name, price }) => {
  const [count, setCount] = useState(1);

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleIncrease = () => {
    if (count > 0) {
      setCount(count + 1);
    }
  };

  return (
    <View style={styles.item}>
      <View style={styles.imgContainer}>
        <Image style={styles.img} source={url} />
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
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.author}>By Jake Knapp</Text>
          <Text style={styles.price}>{price}</Text>
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
            <TouchableOpacity style={styles.button} onPress={handleDecrement}>
              <Text style={styles.btnText}>-</Text>
            </TouchableOpacity>
            <Text>{count}</Text>
            <TouchableOpacity style={styles.button} onPress={handleIncrease}>
              <Text style={styles.btnText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CardOrder;
