import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  item: {
    fontSize: "16px",
    color: COLORS.black,
    fontWeight: FONT.bold,
    position: "relative",
    backgroundColor: COLORS.white,
    height: "100%",
    paddingTop: 12,
    paddingBottom: 12,
    borderRadius: 6,
    shadowColor: COLORS.grayBorder,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5,
  },
  imgContainer: {
    height: 200,
    width: 180,
  },
  img: {
    height: "100%",
    width: "100%",
    resizeMode: "contain",
  },
  name: {
    marginTop: 12,
    paddingLeft: 12,
  },
  price: {
    paddingLeft: 12,
    color: COLORS.primary,
  },
  iconSale: {
    width: 40,
    height: 40,
    position: "absolute",
    top: 5,
    right: 0,
    zIndex: 1,
  },
  author: {
    fontSize: SIZES.sm,
    paddingLeft: 12,
    color: COLORS.grayBorder,
    marginTop: 4,
    marginBottom: 12,
    flexGrow: 1,
  },
});

export default styles;
