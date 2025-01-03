import React from "react";
import { Link, Redirect, useRouter } from "expo-router";
import {
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";
import { ImageBackground } from "expo-image";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import SwipeButton from "rn-swipe-button";

const StartPage = () => {
  const router = useRouter();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ImageBackground
        style={{ width: "100%", height: "100%", justifyContent: "flex-end" }}
        source={require("./../assets/images/clockBackground.jpg")}
      >
        <Link
          style={{
            textAlign: "left",
            alignSelf: "flex-end",
            margin: wp("10%"),
          }}
          href="/(tabs)/home"
        >
          skip login
        </Link>

        <View style={styles.styledContent}>
          <Text style={styles.styledModal}>Manage your{"\n"}daily tasks</Text>
          <Text>Team and Project manamgement with solution providing App</Text>

          <SwipeButton
            disableResetOnTap
            thumbIconBackgroundColor="#FFFFFF"
            railBackgroundColor="#6C63FF"
            railStyles={{
              backgroundColor: "#FFFFFF",
              borderColor: "#FFFFFF",
            }}
            title="Get Started"
            onSwipeSuccess={() => {
              // router.push("auth");
              // router.replace("/(tabs)/home"); // cannot back
              router.replace("auth");
            }}
            thumbIconSize={30}
            railHeight={20}
            titleStyles={{
              color: "#FFFFFF",
              fontSize: hp("2%"),
              // fontWeight: "bold",
              fontFamily: "secondary",
            }}
          />
        </View>
      </ImageBackground>
    </View>
  );
};
export default StartPage;
const styles = StyleSheet.create({
  styledContent: {
    backgroundColor: "white",
    width: "100%",
    height: "35%",
    borderTopEndRadius: wp("10%"),
    borderTopStartRadius: wp("10%"),
    paddingHorizontal: wp("6.5%"),
    gap: hp("2%"),
    shadowColor: "#6C63FF",
    shadowOpacity: 0.4,
    shadowOffset: {
      width: 1,
      height: -5,
    },
    elevation: 5,
  },
  styledModal: {
    textAlign: "left",
    fontSize: hp("4.25%"),
    paddingTop: hp("3%"),
    // fontFamily: "exo",
    fontWeight: "bold",
    color: "#6C63FF",
  },
});
