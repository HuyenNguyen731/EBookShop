import { ScrollView } from "react-native";
import { Category, Slider, Product } from "../components";

const HomePage = () => {
  return (
    <ScrollView>
      <Slider />
      <Category />
      <Product />
    </ScrollView>
  );
};

export default HomePage;
