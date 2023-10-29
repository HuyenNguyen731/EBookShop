import React from "react";
import { View, Text, Image, ActivityIndicator } from "react-native";

import styles from "./product.style";
import { images } from "../../../constants";
import CardProduct from "../../common/cardproduct/CardProduct";
import { useFetchApi } from "../../../hooks/useFetchApi";

const Product = () => {
  const { isLoading, response, error } = useFetchApi("books");

  return (
    <View style={styles.container}>
      <Text style={styles.textSale}>Sách bán chạy</Text>
      {isLoading ? (
        <ActivityIndicator size="large" />
      ) : (
        <View style={styles.row}>
          {response?.data?.map((item, index) => (
            <View key={index} style={styles.column}>
              <CardProduct
                key={item.bookId}
                id={item.bookId}
                url={item?.image}
                name={item?.name}
                price={item?.price}
                author={item?.author?.name}
              />
            </View>
          ))}
        </View>
      )}
      {error && <Text>{error}</Text>}

      <View style={styles.imgContainer}>
        <Image style={styles.img} source={images.ad} />
      </View>
    </View>
  );
};

export default Product;
