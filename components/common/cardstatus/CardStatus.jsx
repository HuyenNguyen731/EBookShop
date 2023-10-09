import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { Link } from "expo-router";
import styles from "./cardstatus.style";

const CardStatus = ({status}) => {
  return (
    <View style={styles.card}>
      <View style={[styles.flex, { justifyContent: "space-between" }]}>
        <Text>Order №1947034</Text>
        {
          status === "processing" ? null : (
            <Text style={styles.textGray}>05-12-2019</Text>
          )
        }
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
        {
        status === "delivered" && 
          <Text style={styles.textGreen}>
            Delivered
          </Text>
        }
        {
           status === "cancelled" && 
           <Text style={styles.textRed}>
             Cancelled
           </Text>
        }
        {
           status === "processing" && 
           <Text style={styles.textOrange}>
             Processing
           </Text>
        }
      </View>
    </View>
  );
};

export default CardStatus;
