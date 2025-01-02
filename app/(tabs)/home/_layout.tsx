import { Stack } from "expo-router";

const Stacklayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerTitle: "Home Screen" }} />
    </Stack>
  );
};
export default Stacklayout;
