import React from "react";
import { Tabs } from "expo-router";
import {
  MaterialCommunityIcons,
  FontAwesome,
  FontAwesome5,
} from "@expo/vector-icons";

const Layout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" size={30} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="shopping-cart" size={30} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="order"
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 size={24} color={color} name="shopping-bag" />
          ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color = "black" }) => (
            <FontAwesome5 size={24} color={color} name="user-alt" />
          ),
          headerShown: false,
        }}
      />
    </Tabs>
  );
};

export default Layout;
