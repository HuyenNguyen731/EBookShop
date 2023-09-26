import { StyleSheet, StatusBar } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight || 0,
    padding: 20,
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
});

export default styles;
