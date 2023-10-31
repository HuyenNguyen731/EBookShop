import { StyleSheet } from "react-native";

import { SIZES, COLORS } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
  },
  text: {
    marginBottom: 18,
    fontSize: SIZES.lg,
  },
  product: {
    paddingRight: 10,
  },
  input: {
    height: 40,
    padding: 10,
    borderWidth: 1,
    marginTop: 10,
    marginBottom: 30,
    fontSize: SIZES.sm,
    borderRadius: 10,
    borderColor: COLORS.grayBorder,
    backgroundColor: COLORS.grayF3,
  },
});

export default styles;
