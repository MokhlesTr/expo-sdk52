import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";

import { HapticTab } from "@/components/HapticTab";
import { IconSymbol } from "@/components/ui/IconSymbol";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
    // screenOptions={{
    //   tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
    //   headerShown: true,
    //   tabBarButton: HapticTab,
    //   tabBarBackground: TabBarBackground,
    //   tabBarStyle: Platform.select({
    //     ios: {
    //       // Use a transparent background on iOS to show the blur effect
    //       position: "absolute",
    //     },
    //     default: {},
    //   }),
    // }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="house.fill" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="list"
        options={{
          title: "list",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="paperplane.fill" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
