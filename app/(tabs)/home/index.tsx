import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useEffect, useState } from "react";
import { Link, useGlobalSearchParams } from "expo-router";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import Toast from "react-native-toast-message";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { toast, Toasts } from "@backpackapp-io/react-native-toast";
const Home = () => {
  const { bg } = useGlobalSearchParams<{ bg?: string }>();
  let [selectedBg, setSelectedBg] = useState("");
  useEffect(() => {
    bg && setSelectedBg(bg);
  }, [bg]);

  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={styles.container}>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: selectedBg,
          }}
        >
          <View style={{ position: "absolute", top: 0 }}>
            <Toast />
          </View>
          <Link href="/home/settings">Push settings</Link>
          <TouchableOpacity onPress={() => setSelectedBg("")}>
            {selectedBg.length > 0 && (
              <Text style={styles.styledText}>Reset</Text>
            )}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              Toast.show({
                type: "success",
                text1: "Hello! 🎉",
                text2: "This is a toast notification!",
                position: "top", // Can be "bottom" or "top"
                visibilityTime: 3000, // Duration in milliseconds
                text1Style: { color: "red", fontSize: hp("2.5%") },
              });
            }}
            style={{ marginTop: hp("5") }}
          >
            <Text style={styles.styledText2}>toast-message</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => toast.success("Successss! ✅")}
            style={{ marginVertical: hp("2") }}
          >
            <Text style={styles.styledText2}>backpackapp-io success!</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => toast.error("error! ")}
            style={{ marginVertical: hp("2") }}
          >
            <Text style={styles.styledText2}>backpackapp-io error!</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => toast.loading("Loading...\neststeetse")}
            style={{ marginVertical: hp("2") }}
          >
            <Text style={styles.styledText2}>backpackapp-io loading!</Text>
          </TouchableOpacity>
        </View>
        <Toasts
          overrideDarkMode={false}
          defaultStyle={{
            view: {
              backgroundColor: "white",
              borderColor: "#ffffff",
              borderWidth: 1,
              borderRadius: 5,
              overflow: "hidden",
            },
            text: {
              color: "black",
            },
            // indicator: {
            //   backgroundColor: "blue",
            // },
          }}
        />
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
};

export default Home;

const styles = StyleSheet.create({
  styledText: {
    color: "white",
    fontWeight: "600",
    fontSize: hp("2.5%"),
  },
  styledText2: {
    color: "purple",
    fontWeight: "600",
    fontSize: hp("2.5%"),
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
