import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  imgContainer: {
    height: 64,
    width: 64,
  },
  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "50%",
  },
  nameCategory: {
    marginTop: 12,
    marginBottom: 12,
  },
});

export default styles;
