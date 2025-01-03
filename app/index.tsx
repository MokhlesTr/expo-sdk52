import React from "react";
import { Link, Redirect } from "expo-router";
import {
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const StartPage = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {/* <Text>LOGINssss</Text> */}
      {/* <Redirect href="/(tabs)/home" /> */}

      <Link href="/(tabs)/home" replace asChild>
        {/* replace ==> route without back */}
        {/* asChild ==> custom component as a clickable */}
        <TouchableOpacity>
          <Text>Go to Home</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
};
export default StartPage;
