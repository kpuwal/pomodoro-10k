"use strict";
import React from "react";
import { View, Text, TouchableOpacity, Platform, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { ColorBox } from "./ColorBox";

interface GoalsListItemProps {
  textBody: string;
  color: string;
  onPress?: () => void;
};

const GoalsListItem = ({ textBody, color, onPress }: GoalsListItemProps) => {
  return (
    <View style={styles.container}>
      <ColorBox {...{ color }} />
      <Text>{textBody}</Text>
      <Text>10k hours</Text>
      <TouchableOpacity {...{ onPress }}>
        <MaterialCommunityIcons
          name="delete-forever"
          size={24}
          color="#F76B6B" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "space-around",
    margin: 4,
    width: "90%",
    height: 70,
    borderRadius: 20,
    backgroundColor: "#F5F7FA",
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOpacity: 0.05,
        // shadowRadius: 5,
        shadowOffset: {
          width: 1,
          height: 2
        }
      },
      android: {
        elevation: 5
      },
    })
  },
});

export default GoalsListItem;
