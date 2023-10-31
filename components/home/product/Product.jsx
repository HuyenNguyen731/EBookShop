import React, { useState, useEffect } from "react";
import { View, Text, FlatList, Image, ActivityIndicator } from "react-native";

import styles from "./product.style";
import { images } from "../../../constants";
import CardProduct from "../../common/cardproduct/CardProduct";
import { API_URL } from "@env";
import axios from "axios";

const Product = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`${API_URL}/api/books`)
      .then((response) => {
        setData(response?.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.textSale}>Sách bán chạy</Text>
      {isLoading ? (
        <ActivityIndicator size="large" />
      ) : (
        // <FlatList
        //   data={data}
        //   renderItem={({ item, index }) => (
        //     <CardProduct
        //       key={item.bookId}
        //       id={item.bookId}
        //       url={item?.image}
        //       name={item?.name}
        //       price={item?.price}
        //       author={item?.author?.name}
        //     />
        //   )}
        //   horizontal
        //   keyExtractor={(item, index) => index.toString()}
        //   ItemSeparatorComponent={() => <View style={{ width: 20 }} />}
        // />

        <View style={styles.row}>
          {data?.data?.map((item, index) => (
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

      {/* <View style={styles.imgContainer}>
        <Image style={styles.img} source={images.ad} />
      </View> */}
    </View>
  );
};

export default Product;
