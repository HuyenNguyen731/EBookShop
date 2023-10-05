import React from "react";
import { View, Text, FlatList, Image, ActivityIndicator } from "react-native";

import styles from "./product.style";
import { images } from "../../../constants";
import CardProduct from "../../common/cardproduct/CardProduct";
import { useFetchApi } from "../../../hooks/useFetchApi";

const Product = () => {
  const { isLoading, response, error } = useFetchApi("books");

  const renderItem = ({ item }) => {
    return (
      <CardProduct
        key={item.bookId}
        id={item.bookId}
        url={item?.image}
        name={item?.name}
        price={item?.price}
        sale={item?.sale}
      />
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textSale}>Sách bán chạy</Text>
      {isLoading ? (
        <ActivityIndicator size="large" />
      ) : (
        <FlatList
          data={response?.data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          horizontal
          ItemSeparatorComponent={() => <View style={{ width: 16 }} />}
        />
      )}
      {error && <Text>{error}</Text>}

      <View style={styles.imgContainer}>
        <Image style={styles.img} source={images.ad} />
      </View>
    </View>
  );
};

export default Product;
