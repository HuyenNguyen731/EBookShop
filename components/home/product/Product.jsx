import React from "react";
import { ScrollView, View } from "react-native";

import styles from "./product.style";
import { images } from "../../../constants";
import CardProduct from "../../common/cardproduct/CardProduct";

const data = [
  {
    id: 1,
    url: images.p1,
    name: "Rèn luyện tư duy làm giàu - Jake Knapp & ...",
    price: "72.000 đ",
  },
  {
    id: 2,
    url: images.p2,
    name: "Kỹ năng quản lý thời gian - Jake Knapp & ...",
    price: "121.000 đ",
  },
  {
    id: 3,
    url: images.p3,
    name: "Sách - Thao túng tâm lý - 1980BOOKS",
    price: "175.000 đ",
  },
  {
    id: 4,
    url: images.p4,
    name: "Sách Nhà giả kim bìa vàng Jake Knapp & ...",
    price: "51.060 đ",
  },
];

const Product = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        {data?.map((item) => (
          <View style={styles.col} key={item?.id}>
            <CardProduct
              name={item?.name}
              price={item?.price}
              url={item?.url}
            />
          </View>
        ))}
      </View>
    </View>
  );
};

export default Product;
