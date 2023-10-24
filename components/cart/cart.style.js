import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../../constants";
const styles = StyleSheet.create({
  container: {
    color: COLORS.black,
    paddingLeft: 20,
    paddingRight: 20,
  },
  order: {
    height: 450,
    overflow: "scroll",
  },
  payment: {},
  wrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 10,
  },
  text: {
    fontSize: SIZES.lg,
    color: COLORS.grayBorder,
  },
  total: {
    fontSize: SIZES.lg,
  },
  button: {
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
  btnText: {
    color: COLORS.white,
    fontSize: SIZES.xl,
  },
});

export default styles;
