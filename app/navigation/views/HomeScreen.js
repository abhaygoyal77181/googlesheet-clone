import * as React from "react";
import { View, Text } from "react-native";
const HomeScreen = function (navigation) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text
        onPress={() => alert("Home Screen")}
        style={{ fontSize: 26, fontWeight: "bold" }}
      >
        Home Screen
      </Text>
    </View>
  );
};

export default HomeScreen;
