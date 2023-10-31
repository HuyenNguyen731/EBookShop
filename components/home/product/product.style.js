import { StyleSheet, StatusBar } from "react-native";

import { SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight || 0,
    padding: 10,
  },
  textSale: {
    fontSize: SIZES.lg,
    marginLeft: 10,
    marginBottom: 12,
    marginTop: 20,
  },
  imgContainer: {
    marginTop: 16,
  },
  row: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    margin: "-10px",
  },
  column: {
    width: "50%",
    maxWidth: "50%",
    padding: "10px",
  },
});

export default styles;
