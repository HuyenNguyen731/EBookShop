import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  imgContainer: {
    height: 300,
    padding: 20,
  },
  img: {
    height: "100%",
    width: "100%",
    objectFit: "cover",
    borderRadius: 12,
  },
});

export default styles;
