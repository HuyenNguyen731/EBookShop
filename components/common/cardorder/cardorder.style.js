import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  item: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: COLORS.white,
  },
  imgContainer: {
    height: 120,
    width: 150,
    marginRight: 12,
  },
  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  name: {
    marginTop: 8,
    marginBottom: 12,
    fontWeight: 600,
  },
  price: {},
  wrapperButton: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginTop: 12,
    marginBottom: 12,
  },
  button: {
    width: 40,
    height: 40,
    borderRadius: 50,
    backgroundColor: COLORS.white,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5,
  },
});

export default styles;
