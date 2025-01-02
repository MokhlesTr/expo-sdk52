import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

const Home = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Link href="/home/settings">Push settings</Link>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
