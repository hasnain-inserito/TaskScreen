import { StyleSheet, Dimensions } from "react-native";
export default styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  horizontalSlider: {
    height: 130,
  },
  verticalSlider: {
    alignItems: "flex-start",
  },
  horizontalContainer: {
    marginTop: 20,
    marginHorizontal: 5,
    alignItems: "center",
    justifyContent: "space-around",
  },
  verticalContainer: {
    marginTop: 10,
    marginHorizontal: 20,
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
  },
});
