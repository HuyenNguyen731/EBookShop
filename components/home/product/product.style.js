import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    marginTop: 35,
  },
  row: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  col: {
    width: "50%",
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 20,
  },
});

export default styles;
