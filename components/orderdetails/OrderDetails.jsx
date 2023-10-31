import React, { useState, useEffect } from "react";
import { useRoute } from "@react-navigation/native";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import styles from "./orderdetails.style";
import { getImageUrl } from "../../helpers/image";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { API_URL } from "@env";
import dayjs from "dayjs";

const OrderDetails = () => {
  const route = useRoute();
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    AsyncStorage.getItem("TOKEN")
      .then((TOKEN) => {
        if (TOKEN) {
          try {
            axios
              .get(`${API_URL}/api/orders/${route.params.id}`, {
                headers: {
                  Authorization: `Bearer ${TOKEN}`,
                },
              })
              .then((response) => {
                setData(response?.data?.data);
                setIsLoading(false);
              })
              .catch((error) => {
                console.error(`Error when calling API for status:`, error);
                setError("Error fetching data");
                setIsLoading(false);
              });
          } catch (error) {
            console.error(`Error when calling API for status:`, error);
            setError("Error fetching data");
            setIsLoading(false);
          }
        } else {
          console.error("Token does not exist");
          setIsLoading(false);
        }
      })
      .catch((error) => {
        console.error("Error when getting token from AsyncStorage: ", error);
        setError("Error fetching data");
        setIsLoading(false);
      });
  }, []);

  console.log(data, "data");

  return (
    <>
      {isLoading ? (
        <ActivityIndicator size="large" />
      ) : (
        <View style={styles.container}>
          <View style={styles.flex}>
            <Text>Order №0000{data?.orderId}</Text>
            <Text style={styles.textGray}>
              {dayjs(data?.orderDate).format("DD-MM-YYYY")}
            </Text>
          </View>
          <View style={styles.flex}>
            <Text>
              <Text style={styles.textGray}>Total Amount:</Text>{" "}
              {data?.totalAmount} đ
            </Text>
            {data?.orderStatus === 1 && (
              <Text style={styles.textOrange}>Pending</Text>
            )}
            {data?.orderStatus === 2 && (
              <Text style={styles.textOrange}>Confirmed</Text>
            )}
            {data?.orderStatus === 3 && (
              <Text style={styles.textGreen}>Delivered</Text>
            )}
            {data?.orderStatus === 4 && (
              <Text style={styles.textRed}>Cancelled</Text>
            )}
          </View>
          <Text style={styles.quantity}>{data?.orderItems?.length} items</Text>

          {data?.orderItems?.map((item, index) => (
            <View style={styles.card} key={index}>
              <View style={styles.imgContainer}>
                <Image
                  style={styles.img}
                  source={{ uri: getImageUrl(item?.book?.image) }}
                />
              </View>
              <View>
                <Text>{item?.book?.name}</Text>
                <Text>X{item?.quantity}</Text>
              </View>
            </View>
          ))}
        </View>
      )}
      {error && <Text>{error}</Text>}
    </>
  );
};

export default OrderDetails;
