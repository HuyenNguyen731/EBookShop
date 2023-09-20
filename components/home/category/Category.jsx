import React from "react";
import { View, Image } from "react-native";

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
      {data?.map((item) => (
        <CardCategory key={item?.id} name={item?.name} url={item?.url} />
      ))}
    </View>
  );
};

export default Category;
