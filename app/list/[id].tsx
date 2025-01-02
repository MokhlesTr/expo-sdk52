import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack, useGlobalSearchParams } from "expo-router";

const DetailsPage = () => {
  const { id } = useGlobalSearchParams() || {};

  return (
    <View>
      <Stack.Screen options={{ headerTitle: `Details #${id}` }} />
      <Text>My details for: {id}</Text>
    </View>
  );
};

export default DetailsPage;

const styles = StyleSheet.create({});
