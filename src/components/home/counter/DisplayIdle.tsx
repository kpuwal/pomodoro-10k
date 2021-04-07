"use strict";
import React from "react";
import { Text, StyleSheet } from "react-native";

interface IdleProp {
  min: number;
  sec: number;
};

const DisplayIdle = ({ min, sec }: IdleProp) => {
  return (
    <>
      <Text style={styles.txt}>
        {min.toString().padStart(2, "0")}:
        {sec.toString().padStart(2, "0")}
      </Text>
    </>
  );
};

const styles = StyleSheet.create({
  txt: {
    flex: 1 / 5,
    justifyContent: "center",
    fontFamily: "Roboto-Light",
    fontSize: 100,
    color: "#EFF0F4",
    alignSelf: "center",
  },
});

export default DisplayIdle;