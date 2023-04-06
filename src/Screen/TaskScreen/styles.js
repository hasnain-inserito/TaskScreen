import { StyleSheet } from "react-native";
export default styles = StyleSheet.create({
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
