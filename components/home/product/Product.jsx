import React from "react";
import { View, Text, FlatList, Image } from "react-native";

import styles from "./product.style";
import { images } from "../../../constants";
import CardProduct from "../../common/cardproduct/CardProduct";

const dataSale = [
  {
    id: 1,
    url: images.b1,
    name: "Sống đời tự do",
    price: "142.000 đ",
    sale: true,
  },
  {
    id: 2,
    url: images.b2,
    name: "Tu giữa đời thường",
    price: "131.000 đ",
    sale: true,
  },
  {
    id: 3,
    url: images.b8,
    name: "7 chiến lược để sống sung túc hạnh phúc",
    price: "160.050 đ",
    sale: true,
  },
  {
    id: 4,
    url: images.b4,
    name: "Nghệ thuật sống vững vàng",
    price: "151.060 đ",
    sale: true,
  },
];
const dataPopular = [
  {
    id: 5,
    url: images.b5,
    name: "Yes to Life - Lẽ sống",
    price: "211.000 đ",
  },
  {
    id: 6,
    url: images.b6,
    name: "7 chiến lược để sống sung túc hạnh phúc",
    price: "160.050 đ",
  },
  {
    id: 7,
    url: images.b7,
    name: "Yes to Life - Lẽ sống",
    price: "211.000 đ",
  },
  {
    id: 8,
    url: images.b3,
    name: "Người thông minh - giải quyết vấn đề như thế nào?",
    price: "175.000 đ",
  },
];

const Product = () => {
  const renderItem = ({ item }) => {
    return (
      <CardProduct
        id={item.id}
        url={item?.url}
        name={item?.name}
        price={item?.price}
        sale={item?.sale}
      />
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textSale}>Sách bán chạy</Text>
      <FlatList
        data={dataSale}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        ItemSeparatorComponent={() => <View style={{ width: 16 }} />}
      />

      <View style={styles.imgContainer}>
        <Image style={styles.img} source={images.ad} />
      </View>

      <Text style={styles.textSale}>Sách hay nên đọc</Text>
      <FlatList
        data={dataPopular}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        ItemSeparatorComponent={() => <View style={{ width: 16 }} />}
      />
    </View>
  );
};

export default Product;
