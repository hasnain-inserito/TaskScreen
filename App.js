import React, { useCallback, useMemo, useRef, useState } from "react";
import { ScrollView, StyleSheet, View, Platform } from "react-native";
import {
  Text,
  MD3LightTheme as DefaultTheme,
  Provider as PaperProvider,
  IconButton,
  Tooltip,
  Appbar,
  Avatar,
  List,
  TextInput,
  Card,
  Chip,
  ProgressBar,
  Colors,
  MD3Colors,
  Button,
} from "react-native-paper";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import Pin from "react-native-vector-icons/AntDesign";
import Bookmark from "react-native-vector-icons/Entypo";
import AddTask from "react-native-vector-icons/MaterialIcons";
import SegmentedControl from "./src/Components/SegmentedControl";
import TaskScreen from "./src/Components/TaskScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/Screen/Home";
const MORE_ICON = Platform.OS === "ios" ? "dots-horizontal" : "dots-vertical";
const Stack = createNativeStackNavigator();
export default function App() {
  const _handleMore = () => console.log("Shown more");
  const snapPoints = useMemo(() => ["10%"], ["100%"]);
  const bottomSheetModalRef = useRef(null);

  const [time, setTime] = useState("");

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  return (
    <NavigationContainer>
      <PaperProvider>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            options={{
              title: "Overview",
              headerShown: false,
            }}
            component={Home}
          />
          <Stack.Screen
            name="Task"
            options={{ title: "Task" }}
            component={TaskScreen}
          />
        </Stack.Navigator>
        {/* <TaskScreen /> */}
      </PaperProvider>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#8D86C9",
  },
  title: {
    fontSize: 25,
    fontWeight: 800,
    color: "#000",
  },
  avatarSection: {
    justifyContent: "flex-start",
    flexDirection: "row",
    alignItems: "center",
  },
  cardContainer: {
    borderRadius: 10,
  },
  cardInnerSection: {
    justifyContent: "flex-start",
    flexDirection: "row",
    padding: 20,
  },
  cardLabel: {
    color: "#000",
    paddingLeft: 20,
  },
  tabsContainerStyle: {
    height: 40,
    marginTop: 50,
  },
  tab: {
    height: 500,
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
});
