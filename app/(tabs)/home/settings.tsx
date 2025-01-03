import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { Link, useRouter } from "expo-router";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { ColorData } from "@/constants/Data";

const settings = () => {
  let [colorSelected, setColorSelected] = useState<string>("");
  console.log("colorSelected", colorSelected);

  const router = useRouter();

  const handlePress = (color: string) => {
    setColorSelected(color);
    router.setParams({ bg: color });
  };

  return (
    <View style={styles.container}>
      <View style={styles.styledView}>
        <Link href="/home/other" style={styles.styledText}>
          Color settings
        </Link>
        <TouchableOpacity onPress={() => router.back()}>
          <Text
            style={[
              styles.styledText,
              { color: colorSelected, fontWeight: "600" },
            ]}
          >
            Discover Changement
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={ColorData}
        horizontal={false}
        scrollEnabled={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => handlePress(item)}
            style={[
              styles.touchableStyle,
              {
                backgroundColor: item,
              },
            ]}
          />
        )}
        numColumns={4}
        contentContainerStyle={styles.flatListContent}
      />
    </View>
  );
};

export default settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  flatListContent: {},
  touchableStyle: {
    width: wp("20%"),
    height: wp("20%"),
    margin: wp("2%"),
    borderRadius: wp("2%"),
  },
  styledText: { fontSize: hp("2%"), color: "grey" },
  styledView: {
    marginVertical: hp("4%"),
    justifyContent: "center",
    alignItems: "center",
    gap: hp("1.2%"),
  },
});
