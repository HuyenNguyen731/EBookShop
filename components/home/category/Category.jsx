import React, { useEffect, useState } from "react";
import { View, Text, ActivityIndicator, FlatList } from "react-native";

import styles from "./category.style";
import { images } from "../../../constants";
import CardCategory from "../../common/cardcategory/CardCategory";
import { useFetchApi } from "../../../hooks/useFetchApi";

const categoryImages = [
  images.cate1,
  images.cate2,
  images.cate3,
  images.cate4,
  images.cate1,
];

const Category = () => {
  const { isLoading, response } = useFetchApi("Categories");
  const [data, setData] = useState([]);

  useEffect(() => {
    if (response) {
      const data = response.map((item, index) => ({
        ...item,
        image: categoryImages[index],
      }));

      setData(data);
    }
  }, [response]);

  return (
    <>
      {isLoading ? (
        <ActivityIndicator size="large" />
      ) : (
        <View style={styles.container}>
          <Text style={styles.text}>Top categories</Text>
          <View style={styles.product}>
            <FlatList
              data={data}
              renderItem={({ item, index }) => (
                <View key={index}>
                  <CardCategory name={item?.name} url={item?.image} />
                </View>
              )}
              horizontal
              keyExtractor={(item, index) => index.toString()}
              ItemSeparatorComponent={() => <View style={{ width: 20 }} />}
            />
          </View>
        </View>
      )}
    </>
  );
};

export default Category;
