import { Stack, useRouter } from "expo-router";
import { Text, TouchableOpacity } from "react-native";

const Stacklayout = () => {
  const router = useRouter();
  return (
    <Stack
    //   screenOptions={{
    //     headerTitle: "My Custom Header Title",
    //     headerStyle: { backgroundColor: "#f0f0f0" },
    //     headerTintColor: "#000000",
    //     headerTitleStyle: { fontWeight: "regular" },
    //     headerLeft: () => (
    //       <TouchableOpacity onPress={() => router.back()}>
    //         <Text>Back</Text>
    //       </TouchableOpacity>
    //     ),
    //   }}
    >
      <Stack.Screen name="index" options={{ headerTitle: "Home Screen" }} />
    </Stack>
  );
};
export default Stacklayout;
