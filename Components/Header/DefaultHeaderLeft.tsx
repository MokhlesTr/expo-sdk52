import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import { ArrowLeftIcon } from "@/assets/Svg/Svg";

const DefaultHeaderLeft = () => {
  const router = useRouter();
  return (
    <TouchableOpacity onPress={() => router.back()}>
      <ArrowLeftIcon />
    </TouchableOpacity>
  );
};

export default DefaultHeaderLeft;

const styles = StyleSheet.create({});
