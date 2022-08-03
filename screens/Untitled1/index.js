import { ActivityIndicator } from "react-native";
import React from "react";
import { View } from "react-native";

const Untitled1 = () => {
  return <View style={{
    backgroundColor: '#f0f0f1',
    padding: 10,
    position: 'relative',
    height: '100%'
  }}>
      <ActivityIndicator style={{
      left: 81,
      top: 109,
      position: "absolute",
      width: 50,
      height: 50
    }}></ActivityIndicator></View>;
};

export default Untitled1;