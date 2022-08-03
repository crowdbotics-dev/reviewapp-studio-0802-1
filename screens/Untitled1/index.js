import { Pressable } from "react-native";
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
      left: 99,
      top: 122,
      position: "absolute",
      width: 50,
      height: 50,
      backgroundColor: "#9e2323",
      color: "#3aba94"
    }}></ActivityIndicator><Pressable onPress={{}}><View style={{
        left: 37,
        top: 237,
        position: "absolute",
        height: 60,
        width: 140,
        backgroundColor: "#A54444",
        borderRadius: 0,
        color: "#777777"
      }}></View></Pressable></View>;
};

export default Untitled1;