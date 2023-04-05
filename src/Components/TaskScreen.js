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
import SegmentedControl from "./SegmentedControl.js";
const MORE_ICON = Platform.OS === "ios" ? "dots-horizontal" : "dots-vertical";
export default function TaskScreen() {
  const _handleMore = () => console.log("Shown more");
  const bottomSheetModalRef = useRef(null);

  const [time, setTime] = useState("");

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  return (
    <View>
      <Appbar.Header style={{ backgroundColor: "#000" }}>
        <Appbar.BackAction color="#fff" onPress={() => {}} />
        <Appbar.Content title="Title" color="#fff" />
        <Appbar.Action icon="attachment" color="#fff" onPress={() => {}} />
        <Appbar.Action icon={MORE_ICON} color="#fff" onPress={_handleMore} />
      </Appbar.Header>
      <ScrollView>
        <View style={styles.container}>
          <View>
            <Button title="Open Sheet" onPress={handlePresentModalPress}>
              Press
            </Button>
            <Text variant="displaySmall" style={styles.title}>
              [Infrastructure Implementation] Replace Type sence with Elastic
              Search
            </Text>
          </View>
          <View style={styles.avatarSection}>
            <Avatar.Image
              size={70}
              source={require("../../assets/avatar.jpg")}
            />
            <Avatar.Image
              style={{ position: "absolute", left: 45 }}
              size={70}
              source={require("../../assets/avatar2.jpg")}
            />
            <Avatar.Image
              style={{ marginLeft: 20 }}
              size={70}
              source={require("../../assets/avatar3.jpg")}
            />
          </View>
        </View>
        <Card
          style={{
            margin: 15,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 7,
            },
            shadowOpacity: 0.43,
            shadowRadius: 9.51,

            elevation: 15,
          }}
        >
          <Card.Content>
            <List.Section>
              <List.Accordion
                left={() => <List.Icon icon="folder" />}
                id="1"
                title="General"
                description="Item description"
                descriptionStyle={{ color: "#000" }}
                titleStyle={{ color: "rgba(0,0,0,0.7)", fontSize: 20 }}
                style={{
                  borderRadius: 16,
                }}
              >
                <Card style={styles.cardContainer}>
                  <List.Section style={{ marginLeft: -80, width: 380 }}>
                    <Card.Content>
                      <TextInput
                        outlineColor="#000"
                        mode="flat"
                        label="Description"
                        variant="bodySmall"
                        activeUnderlineColor="#8D86C9"
                        style={{ margin: 10 }}
                        placeholder="Type something"
                      />
                      <TextInput
                        mode="flat"
                        label="Dev URL"
                        placeholder="Type something"
                        activeUnderlineColor="#8D86C9"
                        style={{ margin: 10 }}
                      />
                    </Card.Content>
                  </List.Section>
                </Card>
              </List.Accordion>
            </List.Section>
            {/* Linked Issues */}
            <List.Section>
              <List.Accordion
                style={{
                  borderRadius: 16,
                }}
                left={() => <List.Icon icon="link" />}
                title="Linked Issues"
                description="Relates to"
                descriptionStyle={{ color: "#000" }}
                titleStyle={{ color: "rgba(0,0,0,0.7)", fontSize: 20 }}
              >
                <Card style={styles.cardContainer}>
                  <List.Section style={{ marginLeft: -80, width: 380 }}>
                    <Card.Content>
                      <View style={styles.cardInnerSection}>
                        <View>
                          <Bookmark name="bookmark" size={35} color={"#000"} />
                        </View>
                        <View>
                          <Text variant="bodyMedium" style={styles.cardLabel}>
                            Chat module
                          </Text>
                          <Text variant="labelSmall" style={styles.cardLabel}>
                            SW-618 = Progress
                          </Text>
                        </View>
                      </View>
                      <View style={styles.cardInnerSection}>
                        <View>
                          <Pin name="plus" size={35} color={"#0969da"} />
                        </View>
                        <View>
                          <Text
                            variant="bodyMedium"
                            style={{ color: "#0969da", marginLeft: 20 }}
                          >
                            Link Issue
                          </Text>
                        </View>
                      </View>
                    </Card.Content>
                  </List.Section>
                </Card>
              </List.Accordion>
            </List.Section>
            {/* Details */}
            <List.Section>
              <List.Accordion
                title="Details"
                left={() => <List.Icon icon="information" />}
                description="Issue Type, Assignee, Story Points, Reporter"
                descriptionStyle={{ color: "#000" }}
                titleStyle={{ color: "#000", fontSize: 20 }}
                style={{
                  borderRadius: 16,
                }}
              >
                <Card
                  style={{
                    borderRadius: 10,
                  }}
                >
                  <List.Section style={{ marginLeft: -80, width: 380 }}>
                    <Card.Content>
                      <ScrollView>
                        {/* Task */}
                        <View>
                          <Text variant="bodyLarge" style={styles.cardLabel}>
                            Task
                          </Text>
                        </View>
                        <View style={styles.cardInnerSection}>
                          <AddTask name="add-task" size={35} color={"#000"} />
                          <Text
                            variant="bodyMedium"
                            style={{ color: "#000", paddingLeft: 20 }}
                          >
                            Task
                          </Text>
                        </View>
                        {/* Assignee Section */}
                        <View>
                          <Text
                            variant="bodyLarge"
                            style={{ color: "#000", paddingLeft: 20 }}
                          >
                            Assignee
                          </Text>
                        </View>
                        <View style={styles.cardInnerSection}>
                          <Avatar.Text name="add-task" size={35} label="HA" />
                          <Text
                            variant="bodyMedium"
                            style={{ color: "#000", paddingLeft: 20 }}
                          >
                            Syed Hasnain Askari
                          </Text>
                        </View>
                        {/* Story Point */}
                        <View>
                          <Text
                            variant="bodyLarge"
                            style={{ color: "#000", paddingLeft: 20 }}
                          >
                            Story Points
                          </Text>
                          <TextInput
                            style={{ margin: 10 }}
                            mode="flat"
                            label="Description"
                            placeholder="Type something"
                            activeUnderlineColor="#8D86C9"
                          />
                        </View>
                        {/* Reporter */}
                        <View>
                          <Text
                            variant="bodyLarge"
                            style={{
                              color: "#000",
                              paddingLeft: 20,
                              marginTop: 10,
                            }}
                          >
                            Reporter
                          </Text>
                          <View style={styles.cardInnerSection}>
                            <Avatar.Text name="add-task" size={35} label="HA" />
                            <Text
                              variant="bodyMedium"
                              style={{ color: "#000", paddingLeft: 20 }}
                            >
                              Syed Raza Askari
                            </Text>
                          </View>
                        </View>
                        {/* Labels */}
                        <View>
                          <Text
                            variant="bodyLarge"
                            style={{
                              color: "#000",
                              paddingLeft: 20,
                              marginTop: 10,
                            }}
                          >
                            Labels
                          </Text>
                          <View style={styles.cardInnerSection}>
                            <Chip mode="flat">Development</Chip>
                            <Chip mode="flat">Web Development</Chip>
                          </View>
                        </View>
                        {/* Time Tracking */}
                        <View>
                          <Text
                            variant="bodyLarge"
                            style={{
                              color: "#000",
                              paddingLeft: 20,
                              marginTop: 10,
                            }}
                          >
                            Time Tracking
                          </Text>
                          <View style={styles.cardInnerSection}>
                            <ProgressBar
                              progress={0.5}
                              color="white"
                              style={{ height: 5, width: undefined }}
                            />
                          </View>
                        </View>
                      </ScrollView>
                    </Card.Content>
                  </List.Section>
                </Card>
              </List.Accordion>
            </List.Section>
            {/* More Field */}
            <List.Section>
              <List.Accordion
                left={() => <List.Icon icon="more" />}
                title="More Fields"
                description="Checkout more"
                descriptionStyle={{ color: "#000" }}
                titleStyle={{ color: "#000", fontSize: 20 }}
                style={{
                  borderRadius: 16,
                }}
              >
                <Card
                  style={{
                    borderRadius: 10,
                  }}
                >
                  <List.Section style={{ marginLeft: -80, width: 380 }}>
                    <Card.Content>
                      <ScrollView>
                        {/* Task */}
                        <View>
                          <Text
                            variant="bodyLarge"
                            style={{ color: "#000", paddingLeft: 20 }}
                          >
                            Project
                          </Text>
                        </View>
                        <View style={styles.cardInnerSection}>
                          <AddTask name="add-task" size={35} color={"#000"} />
                          <Text
                            variant="bodyLarge"
                            style={{ color: "#000", paddingLeft: 20 }}
                          >
                            Smart Workers
                          </Text>
                        </View>
                        {/* Assignee Section */}
                        <View>
                          <Text
                            variant="bodyLarge"
                            style={{ color: "#000", paddingLeft: 20 }}
                          >
                            Created
                          </Text>
                          <Text
                            variant="bodyLarge"
                            style={{ color: "#000", paddingLeft: 20 }}
                          >
                            29-Mar-2023 at 12:21 AM
                          </Text>
                        </View>

                        {/* Story Point */}
                        <View>
                          <Text
                            variant="bodyLarge"
                            style={{
                              color: "#000",
                              paddingLeft: 20,
                              marginTop: 20,
                            }}
                          >
                            Updated
                          </Text>
                          <Text
                            variant="bodyLarge"
                            style={{ color: "#000", paddingLeft: 20 }}
                          >
                            04-Apr-2023 at 12:21 AM
                          </Text>
                        </View>
                      </ScrollView>
                    </Card.Content>
                  </List.Section>
                </Card>
              </List.Accordion>
            </List.Section>
          </Card.Content>
        </Card>
        {/* Segmented Control */}
        <SegmentedControl />
      </ScrollView>
      <BottomSheetModalProvider>
        <View style={styles.container}>
          <Button
            onPress={handlePresentModalPress}
            title="Present Modal"
            color="black"
          />
          <BottomSheetModal
            ref={bottomSheetModalRef}
            snapPoints={["30%", "60%"]}
          >
            <View style={styles.contentContainer}>
              <Text style={{ fontSize: 16, color: "blue", padding: 24 }}>
                Hasnaoin Askari{time}
              </Text>
            </View>
          </BottomSheetModal>
        </View>
      </BottomSheetModalProvider>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontWeight: 800,
    color: "#000",
  },
  avatarSection: {
    marginTop: 10,
    position: "relative",
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
