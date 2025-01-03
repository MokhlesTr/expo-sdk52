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
        // headerLeft: () => <DefaultHeaderLeft />,
        headerRight: () => <DefaultHeaderRight />,
      }}
    >
      <Stack.Screen
        name="login"
        options={{
          //   headerTitle: "Login Screen",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="signup"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="forgetPassword"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
};
export default Stacklayout;
