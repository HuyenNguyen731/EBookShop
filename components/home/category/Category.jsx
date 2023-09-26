import React from "react";
import { ScrollView, View, Text } from "react-native";

import styles from "./category.style";
import { images } from "../../../constants";
import CardCategory from "../../common/cardcategory/CardCategory";

const data = [
  {
    id: 1,
    name: "Best seller",
    url: images.cate1,
  },
  {
    id: 2,
    name: "Tâm lý",
    url: images.cate2,
  },
  {
    id: 3,
    name: "Kinh tế",
    url: images.cate3,
  },
  {
    id: 4,
    name: "Văn học",
    url: images.cate4,
  },
];

const Category = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Top categories</Text>
      <View style={styles.product}>
        {data?.map((item) => (
          <CardCategory key={item?.id} name={item?.name} url={item?.url} />
        ))}
      </View>
    </View>
  );
};

export default Category;
