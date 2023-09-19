import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../constants";

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    padding: 20,
  },
  imgContainer: {
    width: "100%",
    height: 266,
  },
  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  nameBook: {
    marginTop: 16,
    marginBottom: 6,
    fontSize: SIZES.xl,
  },
  price: {
    marginBottom: 12,
    fontSize: SIZES.md,
  },
  title: {
    fontSize: SIZES.md,
    marginBottom: 4,
  },
  button: {
    padding: 16,
    marginTop: 20,
    borderRadius: 8,
    marginBottom: 20,
    color: COLORS.white,
    backgroundColor: COLORS.primary,
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
  buttonText: {
    color: COLORS.white,
  },
});

export default styles;
