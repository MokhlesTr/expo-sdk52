import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

const settings = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>settings</Text>
      <Link href="/home/other">Push settings</Link>
    </View>
  );
};

export default settings;

const styles = StyleSheet.create({});
