import React from "react";
import { View, Text, Button } from "react-native";
export default function Home({ navigation }) {
  return (
    <View>
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
          navigation.navigate("Chat");
        }}
      />
      <Button
        title="Go to User Chat"
        onPress={() => {
          /* 1. Navigate to the Details route with params */
          navigation.navigate("UserChat");
        }}
      />
    </View>
  );
}
