import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  item: {
    width: 150,
    fontSize: "16px",
    color: COLORS.black,
    fontWeight: FONT.bold,
    position: "relative",
  },
  imgContainer: {
    height: 210,
    width: 150,
  },
  img: {
    height: "100%",
    width: "100%",
    resizeMode: "contain",
  },
  name: {
    marginTop: 12,
    marginBottom: 12,
  },
  price: {},
  iconSale: {
    width: 40,
    height: 40,
    position: "absolute",
    top: 5,
    right: 0,
    zIndex: 1,
  },
});

export default styles;
