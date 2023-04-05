import React, { useState } from "react";
import { ScrollView, StyleSheet, View, Platform, Image } from "react-native";
import {
  Text,
  MD3LightTheme as DefaultTheme,
  Provider as PaperProvider,
} from "react-native-paper";
import SegmentedControlTab from "react-native-segmented-control-tab";
export default function SegmentedControl() {
  // For single select SegmentedControlTab
  const [selectedIndex, setSelectedIndex] = useState(0);
  const handleIndexChange = (index) => {
    setSelectedIndex(index);
  };
  return (
    <View>
      <SegmentedControlTab
        values={["Activity", "Second"]}
        selectedIndex={selectedIndex}
        onTabPress={handleIndexChange}
        borderRadius={0}
        tabsContainerStyle={{ height: 50, backgroundColor: "#F2F2F2" }}
        tabStyle={{
          backgroundColor: "#F2F2F2",
          borderWidth: 0,
          borderColor: "transparent",
        }}
        activeTabStyle={{ backgroundColor: "white", marginTop: 2 }}
        tabTextStyle={{ color: "#444444", fontWeight: "bold" }}
        activeTabTextStyle={{ color: "#888888" }}
      />
      {selectedIndex === 0 && (
        <View style={styles.tab}>
          {/* <Image
            style={styles.tinyLogo}
            source={require("../../assets/chat.png")}
          /> */}
          <Text style={styles.tabContent}>Leavce your first comment</Text>
        </View>
      )}
      {selectedIndex === 1 && (
        <View style={styles.tab}>
          <Text style={styles.tabContent}> Tab two</Text>
        </View>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  tabsContainerStyle: {
    height: 40,
    marginTop: 50,
  },
  tab: {
    height: 500,
    flex: 1,
    flexDirection: "col",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  tinyLogo: {
    width: 100,
    height: 100,
  },
});
