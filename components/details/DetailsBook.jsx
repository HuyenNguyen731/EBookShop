import React, { useState, useEffect } from "react";
import { useRoute } from "@react-navigation/native";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from "react-native";
import styles from "./detailsbook.style";
import { getImageUrl } from "../../helpers/image";
import { useFetchApi } from "../../hooks/useFetchApi";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { API_URL } from "@env";

const DetailsBook = () => {
  const route = useRoute();
  const [expanded, setExpanded] = useState(false);
  const [token, setToken] = useState(null);

  const { isLoading, response, error } = useFetchApi(
    `books/${route.params.id}`
  );

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };
  const line = expanded ? 0 : 2;

  const handleBuyNow = async () => {
    try {
      if (!token) {
        Alert.alert("Please log in to make a purchase.");
        return;
      }
      const res = await axios.post(
        `${API_URL}/api/orders/addtocart/${response?.data?.bookId}/1`,
        null,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (res.status === 200) {
        navigation.navigate("/cart");
      }
    } catch (error) {
      console.error("Lỗi mua hàng: ", error);
    }
  };

  const handleAddToCart = async () => {
    try {
      if (!token) {
        Alert.alert("Please log in to make a purchase.");
        return;
      }
      const res = await axios.post(
        `${API_URL}/api/orders/addtocart/${response?.data?.bookId}/1`,
        null,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (res.status === 200) {
        Alert.alert("Add successfully");
      }
    } catch (error) {
      console.error("Lỗi mua hàng: ", error);
    }
  };

  useEffect(() => {
    AsyncStorage.getItem("TOKEN")
      .then((TOKEN) => {
        if (TOKEN) {
          setToken(TOKEN);
        } else {
          console.error("Token does not exist");
        }
      })
      .catch((error) => {
        console.error("Error when getting token from AsyncStorage: ", error);
      });
  }, []);

  return (
    <>
      {isLoading ? (
        <ActivityIndicator size="large" />
      ) : (
        <View style={styles.container}>
          <View style={styles.imgContainer}>
            <Image
              style={styles.img}
              source={{uri: getImageUrl(response?.data?.image)}}
            />
          </View>
          <Text style={styles.nameBook}>{response?.data?.name}</Text>
          <Text style={styles.price}>{response?.data?.price} đ</Text>

          <View style={styles.wraper}>
            <TouchableOpacity style={styles.buttonBuy} onPress={handleBuyNow}>
              <Text style={styles.buttonText}>Buy Now</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonAdd}
              onPress={handleAddToCart}
            >
              <Text style={styles.buttonText}>Add to Cart</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.title}>Chi tiết sản phẩm</Text>
          <Text style={[styles.description]} numberOfLines={line}>
            {response?.data?.description}
          </Text>
          <TouchableOpacity onPress={toggleExpanded}>
            <Text style={styles.btn}>{expanded ? "See less" : "See more"}</Text>
          </TouchableOpacity>

          <View style={styles.textBottom}>
            <Text style={styles.textDelivery}>Delivery in</Text>
            <Text style={styles.textTime}>1 within Hour</Text>
          </View>
        </View>
      )}
      {error && <Text>{error}</Text>}
    </>
  );
};

export default DetailsBook;
