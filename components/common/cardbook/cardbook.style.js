import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  item: {
    fontSize: "16px",
    fontWeight: FONT.bold,
    color: COLORS.black,
    backgroundColor: COLORS.white,
    padding: 12,
  },
  imgContainer: {
    height: 300,
  },
  img: {
    height: "100%",
    width: "100%",
    objectFit: "cover",
  },
  name: {
    marginTop: 12,
    marginBottom: 12,
    fontWeight: 500,
  },
  price: {},
});

export default styles;
