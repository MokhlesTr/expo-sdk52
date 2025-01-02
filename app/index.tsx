import React from "react";
import { Link, Redirect } from "expo-router";
import { Pressable, Text, TextInput, View } from "react-native";

const StartPage = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>LOGIN</Text>
      {/* <Redirect href="/(tabs)/home" /> */}
      <Link href="/(tabs)/home">
        <Text>Go to Home</Text>
      </Link>
    </View>
  );
};
export default StartPage;
