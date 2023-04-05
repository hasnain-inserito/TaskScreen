import React from "react";
import { View, Text, Button } from "react-native";
export default function Home({ navigation }) {
  return (
    <View>
      <Text>Home</Text>
      <Button
        title="Go to Task Screen"
        onPress={() => {
          /* 1. Navigate to the Details route with params */
          navigation.navigate("Task");
        }}
      />
      <Button
        title="Go to Chat Screen"
        onPress={() => {
          /* 1. Navigate to the Details route with params */
          navigation.navigate("Task");
        }}
      />
    </View>
  );
}