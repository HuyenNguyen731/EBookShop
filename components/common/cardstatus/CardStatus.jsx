import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { Link } from "expo-router";
import styles from "./cardstatus.style";

const CardStatus = ({ status }) => {
  return (
    <View style={styles.card}>
      <View style={[styles.flex, { justifyContent: "space-between" }]}>
        <Text>Order №1947034</Text>
        {status === "1" ? null : (
          <Text style={styles.textGray}>05-12-2019</Text>
        )}
      </View>
      <View style={styles.flex}>
        <Text style={styles.textGray}>Quantiy: </Text>
        <Text>3</Text>
      </View>
      <View style={styles.flex}>
        <Text style={styles.textGray}>Total Amount: </Text>
        <Text>234.000 đ</Text>
      </View>
      <View
        style={[
          styles.flex,
          {
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 16,
          },
        ]}
      >
        <TouchableOpacity style={styles.button}>
          <Link href="/success" style={styles.btnText}>
            Details
          </Link>
        </TouchableOpacity>
        {status === "1" && <Text style={styles.textOrange}>Pending</Text>}
        {status === "2" && <Text style={styles.textOrange}>Confirmed</Text>}
        {status === "3" && <Text style={styles.textGreen}>Delivered</Text>}
        {status === "4" && <Text style={styles.textRed}>Cancelled</Text>}
      </View>
    </View>
  );
};

export default CardStatus;
