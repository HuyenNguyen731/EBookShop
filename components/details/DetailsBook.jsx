import React, { useState, useEffect } from "react";
import { useRoute } from "@react-navigation/native";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { Link } from "expo-router";

import styles from "./detailsbook.style";
import { getImageUrl } from "../../helpers/image";
import { useFetchApi } from "../../hooks/useFetchApi";

const DetailsBook = () => {
  const route = useRoute();
  const [expanded, setExpanded] = useState(false);

  const { isLoading, response, error } = useFetchApi(
    `books/${route.params.id}`
  );

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };
  const line = expanded ? 0 : 2;

  return (
    <>
      {isLoading ? (
        <ActivityIndicator size="large" />
      ) : (
        <View style={styles.container}>
          <View style={styles.imgContainer}>
            <Image
              style={styles.img}
              source={getImageUrl(response?.data?.image)}
            />
          </View>
          <Text style={styles.nameBook}>{response?.data?.name}</Text>
          <Text style={styles.price}>{response?.data?.price} đ</Text>

          <View style={styles.wraper}>
            <TouchableOpacity style={styles.buttonBuy}>
              <Link href="/cart" style={styles.buttonText}>
                Buy Now
              </Link>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonAdd}>
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
