import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Link, useGlobalSearchParams } from "expo-router";

const Home = () => {
  const { bg } = useGlobalSearchParams<{ bg?: string }>();
  let [selectedBg, setSelectedBg] = useState("");
  useEffect(() => {
    bg && setSelectedBg(bg);
  }, [bg]);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: selectedBg,
      }}
    >
      <Link href="/home/settings">Push settings</Link>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
