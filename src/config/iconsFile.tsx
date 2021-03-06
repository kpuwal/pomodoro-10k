"use strict";
import React from "react";
import { Dimensions } from "react-native";
import {
  FontAwesome5,
  Fontisto,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";

const { width } = Dimensions.get("window");

export const playIcon = <FontAwesome5 name="play" size={width * 0.08} color="#F76B6B" />;
export const stopIcon = <FontAwesome5 name="stop" size={width * 0.07} color="#F76B6B" />;

export const pauseIcon = (
  <FontAwesome5 name="pause" size={14} color="#29304D" />
);
export const resumeIcon = (
  <FontAwesome5 name="play" size={14} color="#29304D" />
);
export const goBack = (
  <Fontisto name="arrow-left-l" size={34} color="#29304D" />
);

export const statsIcon = (color: string) => {
  return <Ionicons name="ios-stats-chart" size={24} color={color} />;
};

export const settingsIcon = (color: string) => {
  return <MaterialIcons name="settings" size={24} color={color} />;
};
