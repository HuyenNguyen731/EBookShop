import { StyleSheet } from "react-native";

import { COLORS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxWidth: 960,
    justifyContent: "center",
  },
  headText: {
    fontSize: "48px",
    color: COLORS.black,
    marginBottom: 6,
  },
  input: {
    height: 55,
    padding: 10,
    borderWidth: 1,
    marginTop: 30,
    fontSize: SIZES.md,
    borderRadius: 10,
    borderColor: COLORS.grayBorder,
    backgroundColor: COLORS.grayF3,
  },
  contextText: {
    color: COLORS.black,
    marginTop: 12,
    fontSize: SIZES.sm,
    width: "80%",
  },
  button: {
    padding: 16,
    marginTop: 52,
    backgroundColor: COLORS.primary,
    borderRadius: 4,
  },
  btnText: {
    textAlign: "center",
    color: COLORS.white,
    fontSize: SIZES.xl,
  },
  footerText: {
    marginTop: 32,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: 4,
  },
  linkText: {
    color: COLORS.primary,
    textDecorationLine: "underline",
  },
});

export default styles;
