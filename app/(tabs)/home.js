import { ScrollView } from "react-native";
import { Stack } from "expo-router";
import { Category, Slider, Product } from "../../components";

const HomePage = () => {
  return (
    <ScrollView>
      <Stack.Screen options={{ title: "Home", headerTitleStyle: {} }} />
      <Slider />
      <Category />
      <Product />
    </ScrollView>
  );
};

export default HomePage;
