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
    alignItems: "center",
  },
  img: {
    height: "100%",
    objectFit: "cover",
  },
  nameBook: {
    marginTop: 16,
    marginBottom: 6,
    fontSize: SIZES.xxl,
  },
  price: {
    marginBottom: 12,
    fontSize: SIZES.lg,
    color: COLORS.primary,
  },
  title: {
    fontSize: SIZES.md,
    marginBottom: 6,
    marginTop: 20,
  },
  description: {
    marginBottom: 30,
  },
  wraper: {
    display: "flex",
    flexDirection: "row",
    gap: 8,
  },
  buttonBuy: {
    flex: 1,
    padding: 16,
    marginTop: 20,
    borderRadius: 8,
    marginBottom: 20,
    color: COLORS.white,
    backgroundColor: "#3179DF",
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
  buttonAdd: {
    flex: 1,
    padding: 16,
    marginTop: 20,
    borderRadius: 8,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5,
    color: COLORS.white,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.primary,
  },
  buttonText: {
    color: COLORS.white,
    fontSize: SIZES.xl,
  },
  textBottom: {
    marginTop: 20,
    padding: 20,
    color: COLORS.black,
    backgroundColor: "#FFCCD5",
    borderRadius: 8,
  },
  textDelivery: {
    fontSize: SIZES.md,
  },
  textTime: {
    marginTop: 4,
    fontSize: SIZES.xl,
  },
  btnFooter: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    flex: 1,
    padding: 16,
    marginTop: 30,
    borderRadius: 8,
    marginBottom: 50,
    borderWidth: 1,
    borderColor: COLORS.grayBorder,
  },
  btnText: {
    fontSize: SIZES.md,
  },
});

export default styles;
