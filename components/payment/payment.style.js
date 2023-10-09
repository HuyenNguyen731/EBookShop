import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../constants";

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    padding: 20,
    height: "90vh",
    justifyContent: "space-between",
  },
  inputLabel: {
    marginBottom: 20,
  },
  input: {
    height: 55,
    padding: 10,
    borderWidth: 1,
    fontSize: SIZES.md,
    borderRadius: 10,
    borderColor: COLORS.grayBorder,
    backgroundColor: COLORS.grayF3,
  },
  label: {
    fontSize: SIZES.lg,
    marginBottom: 8,
  },
  button: {
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
