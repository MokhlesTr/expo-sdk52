import DefaultHeaderLeft from "@/Components/Header/DefaultHeaderLeft";
import DefaultHeaderRight from "@/Components/Header/DefaultHeaderRight";
import { Stack, useRouter } from "expo-router";
import { Text, TouchableOpacity } from "react-native";

const Stacklayout = () => {
  const router = useRouter();
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "#f0f0f0" },
        headerTintColor: "#000000",
        headerTitleStyle: { fontWeight: "regular" },
        headerLeft: () => <DefaultHeaderLeft />,
        // headerRight: () => <DefaultHeaderRight />,
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "Home Screen",
          headerLeft: () => null,
          headerRight: () => <DefaultHeaderRight />, // display only in the first header
        }}
      />
      <Stack.Screen
        name="settings"
        options={{
          headerTitle: "Settings Screen",
        }}
      />
      <Stack.Screen
        name="other"
        options={{
          headerTitle: "Others Screen",
        }}
      />
    </Stack>
  );
};
export default Stacklayout;
