import React from "react";
import {
  View,
  FlatList,
  Dimensions,
  ScrollView,
  SafeAreaView,
  KeyboardAvoidingView,
  Keyboard,
} from "react-native";
import { TextInput, Avatar, Text, Card, Chip } from "react-native-paper";
import styles from "./styles";
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
    image: require("../../../assets/avatar.jpg"),
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
    image: require("../../../assets/avatar2.jpg"),
  },
  {
    id: "7",
    name: "Alexandra",
    chat: "Time to update your app to the latest version.",
    image: require("../../../assets/avatar.jpg"),
  },
  {
    id: "8",
    name: "Elizabeth",
    chat: "Here's your daily news briefing.",
    image: require("../../../assets/avatar2.jpg"),
  },
  {
    id: "9",
    name: "Victoria",
    chat: "Have a great day!",
    image: require("../../../assets/avatar.jpg"),
  },
  {
    id: "10",
    name: "The Gang",
    chat: "Have a great day!",
    image: require("../../../assets/avatar2.jpg"),
  },
];
let deviceHeight = Dimensions.get("window").height;
let deviceWidth = Dimensions.get("window").width;
const VerticalItem = ({ name, chat, image, index }) => (
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
        <View>
          <Card.Content
            style={{
              marginRight: 30,
              flexDirection: index % 2 == 0 ? "row-reverse" : "row",
            }}
          >
            <Avatar.Image size={60} source={image} />
            <View style={{ marginHorizontal: 10 }}>
              <Chip style={{ height: 50, backgroundColor: "#0096FF" }}>
                <Text style={{ textAlign: index % 2 == 0 ? "right" : "left" }}>
                  {chat}
                </Text>
              </Chip>
            </View>
          </Card.Content>
        </View>
      </View>
    </View>
  </ScrollView>
);
export default function UserChat() {
  const renderVerticalItem = ({ item, index }) => (
    <VerticalItem
      name={item.name}
      image={item.image}
      chat={item.chat}
      index={index}
    />
  );
  return (
    <View style={styles.container}>
      <View style={{ height: deviceHeight / 1.2 }}>
        <View style={styles.verticalSlider}>
          <FlatList
            data={vericalData}
            renderItem={renderVerticalItem}
            keyExtractor={(item) => item.id}
            horizontal={false}
          />
        </View>
      </View>
    </View>
  );
}
