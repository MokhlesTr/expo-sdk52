import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

const explore = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
      }}
    >
      {/* <Text>explore</Text> */}
      <Link href="/list/1">Link 1</Link>
      <Link href="/list/2">Link 2</Link>
      <Link href="/list/3">Link 3</Link>
    </View>
  );
};

export default explore;

const styles = StyleSheet.create({});
