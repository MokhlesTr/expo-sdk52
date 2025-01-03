import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Link, useGlobalSearchParams } from "expo-router";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

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
      <TouchableOpacity onPress={() => setSelectedBg("")}>
        {selectedBg.length > 0 && <Text style={styles.styledText}>Reset</Text>}
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  styledText: { color: "white", fontWeight: "600", fontSize: hp("2.5%") },
});
