import React from "react";
import { View, FlatList, Dimensions, ScrollView } from "react-native";
import { Searchbar, Avatar, Text, Card, List } from "react-native-paper";
import styles from "./styles";
const horizontalData = [
  { id: "1", name: "Alex", image: require("../../../assets/avatar.jpg") },
  { id: "2", name: "Emily", image: require("../../../assets/avatar2.jpg") },
  { id: "3", name: "Josh", image: require("../../../assets/avatar3.jpg") },
  { id: "4", name: "Chloe", image: require("../../../assets/avatar2.jpg") },
  { id: "5", name: "Jenny", image: require("../../../assets/avatar3.jpg") },
  { id: "6", name: "Chloe", image: require("../../../assets/avatar2.jpg") },
];
const vericalData = [
  {
    id: "1",
    name: "Jessica Park",
    chat: "That's hilarous,really",
    image: require("../../../assets/avatar.jpg"),
  },
  {
    id: "2",
    name: "Friendastics",
    chat: "Congrats on your new job!",
    image: require("../../../assets/avatar2.jpg"),
  },
  {
    id: "3",
    name: "Alex Jonah",
    chat: "Don't forget to drink water today!",
    image: require("../../../assets/avatar3.jpg"),
  },
  {
    id: "4",
    name: "Alex Jonah",
    chat: "Your appointment is tomorrow at 10am.",
    image: require("../../../assets/avatar2.jpg"),
  },
  {
    id: "5",
    name: "Catherine",
    chat: "Your package has been delivered successfully.",
    image: require("../../../assets/avatar.jpg"),
  },
  {
    id: "6",
    name: "Henry",
    chat: "Reminder: pay your bills by the end of the day.",
    image: require("../../../assets/avatar3.jpg"),
  },
  {
    id: "7",
    name: "Alexandra",
    chat: "Time to update your app to the latest version.",
    image: require("../../../assets/avatar2.jpg"),
  },
  {
    id: "8",
    name: "Elizabeth",
    chat: "Here's your daily news briefing.",
    image: require("../../../assets/avatar.jpg"),
  },
  { id: "9", name: "Victoria", image: require("../../../assets/avatar3.jpg") },
  {
    id: "10",
    chat: "Have a great day!",
    name: "The Gang",
    image: require("../../../assets/avatar3.jpg"),
  },
];
let deviceHeight = Dimensions.get("window").height;
let deviceWidth = Dimensions.get("window").width;
const HorizontalItem = ({ name, image }) => (
  <View style={styles.horizontalContainer}>
    <Avatar.Image size={60} source={image} />
    <View
      style={{
        backgroundColor: "#32CD32",
        height: 10,
        width: 10,
        borderRadius: "100%",
        position: "absolute",
        left: 45,
        bottom: 53,
      }}
    />
    <Text variant="bodyMedium" style={{ paddingBottom: 20 }}>
      {name}
    </Text>
  </View>
);
const VerticalItem = ({ name, chat, image }) => (
  <ScrollView>
    <View style={styles.verticalContainer}>
      <View
        style={{
          width: deviceWidth / 1,
          height: deviceHeight / 7,
          padding: 10,
          borderRadius: 3,
        }}
      >
        <Card.Title
          title={name}
          titleStyle={{
            color: "#000",
            fontSize: 18,
            fontWeight: 600,
            marginLeft: 30,
          }}
          subtitle={chat}
          subtitleStyle={{
            color: "#949494",
            marginLeft: 30,
            paddingBottom: 5,
          }}
          right={(props) => (
            <List.Icon {...props} icon="message" style={{ right: 10 }} />
          )}
          left={() => (
            <View style={{ flexDirection: "row" }}>
              <Avatar.Image
                size={60}
                source={image}
                style={{ position: "absolute", left: 20, bottom: 25 }}
              />
              <Avatar.Image size={60} source={image} />
            </View>
          )}
        />
      </View>
    </View>
  </ScrollView>
);
export default function Chat() {
  const renderHorizontalItem = ({ item }) => (
    <HorizontalItem name={item.name} image={item.image} />
  );
  const renderVerticalItem = ({ item }) => (
    <VerticalItem name={item.name} image={item.image} chat={item.chat} />
  );
  return (
    <View style={styles.container}>
      <View style={{ padding: 10 }}>
        <Searchbar placeholder="Search" />
      </View>
      <View style={styles.horizontalSlider}>
        <FlatList
          data={horizontalData}
          renderItem={renderHorizontalItem}
          keyExtractor={(item) => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <View style={styles.verticalSlider}>
        <FlatList
          data={vericalData}
          renderItem={renderVerticalItem}
          keyExtractor={(item) => item.id}
          horizontal={false}
        />
      </View>
    </View>
  );
}
