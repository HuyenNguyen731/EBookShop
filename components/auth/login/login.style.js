import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    padding: 32,
    height: "calc(100vh - 64px)",
  },
  headText: {
    fontSize: "48px",
    fontWeight: 600,
    color: COLORS.black,
    marginBottom: 6,
  },
  input: {
    height: 55,
    padding: 10,
    borderWidth: 1,
    marginTop: 30,
    fontSize: SIZES.md,
    borderRadius: "10px",
    borderColor: COLORS.grayBorder,
    backgroundColor: COLORS.grayF3,
  },
  contextText: {
    textAlign: "right",
    color: COLORS.primary,
    marginTop: 12,
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
});

export default styles;
