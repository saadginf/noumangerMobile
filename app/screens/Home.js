import React from "react";
import { StyleSheet, View } from "react-native";
import { MaterialIcons, FontAwesome } from "@expo/vector-icons";
import colors from "../config/colors";
import AppText from "../components/Text";
const Home = () => {
  return (
    <View>
      <View style={styles.headerContainer}>
        <View style={styles.header}>
          <View>
            <AppText style={styles.headerText}>Home</AppText>
          </View>
          <View style={styles.headerDate}>
            <MaterialIcons name="arrow-back-ios" size={20} color="white" />
            <AppText style={styles.headerTextDate}>September 2021</AppText>
            <MaterialIcons name="arrow-forward-ios" size={20} color="white" />
          </View>
        </View>
        <View style={styles.inoutResumeContainer}>
          <View>
            <AppText style={styles.inoutResumeTitle}>Income</AppText>
            <View style={styles.inoutResume}>
              <AppText style={styles.inResumeText}>7676</AppText>
              <FontAwesome name="long-arrow-up" size={24} color="green" />
            </View>
          </View>
          <View>
            <AppText style={styles.inoutResumeTitle}>Expense</AppText>
            <View style={styles.inoutResume}>
              <AppText style={styles.outResumeText}>2330</AppText>
              <FontAwesome name="long-arrow-down" size={24} color="red" />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: colors.primary,
    paddingHorizontal: 15,
    paddingVertical: 50,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerDate: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerText: {
    fontWeight: "900",
    fontSize: 25,
  },
  headerTextDate: {
    marginHorizontal: 3,
  },
  inoutResumeContainer: {
    borderWidth: 2,

    backgroundColor: colors.white,
    borderRadius: 15,
    marginTop: 60,
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 15,
    alignItems: "center",
  },
  inoutResumeTitle: {
    color: colors.primary,
  },
  inoutResume: {
    flexDirection: "row",
    alignItems: "center",
  },
  inResumeText: {
    fontSize: 25,
    marginRight: 10,
    color: "green",
    fontWeight: "bold",
  },
  outResumeText: {
    fontSize: 25,
    marginRight: 10,
    color: colors.danger,
    fontWeight: "bold",
  },
});
