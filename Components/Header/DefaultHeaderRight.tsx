import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "expo-image";
import { blurHashCode } from "@/hooks/Utils";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

const DefaultHeaderRight = () => {
  return (
    <View>
      <Image
        placeholder={{
          blurhash: blurHashCode,
        }}
        source={require("./../../assets/images/icon.png")}
        style={{ width: wp("5.5%"), height: wp("10%") }}
      />
    </View>
  );
};

export default DefaultHeaderRight;

const styles = StyleSheet.create({});
