import React, { useCallback, useMemo, useRef, useState } from "react";
import { ScrollView, StyleSheet, View, Platform } from "react-native";
import {
  Text,
  MD3LightTheme as DefaultTheme,
  Provider as PaperProvider,
} from "react-native-paper";
import TaskScreen from "./src/Screen/TaskScreen/TaskScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/Screen/Home";
import Chat from "./src/Screen/ChatScreen/Chat";
const MORE_ICON = Platform.OS === "ios" ? "dots-horizontal" : "dots-vertical";
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <PaperProvider>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            options={{
              title: "Home",
            }}
            component={Home}
          />
          <Stack.Screen
            name="Task"
            options={{ headerShown: false }}
            component={TaskScreen}
          />
          <Stack.Screen
            name="Chat"
            options={{ title: "Chat" }}
            component={Chat}
          />
        </Stack.Navigator>
        {/* <TaskScreen /> */}
      </PaperProvider>
    </NavigationContainer>
  );
}
