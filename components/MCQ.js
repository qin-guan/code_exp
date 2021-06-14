import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function MCQ() {
  return (
    <View style={styles.container}>
      {/* {questions && ( */}
      <View style={styles.parent}>
        <View style={styles.top}>
          <Text style={styles.question}>Q. What is the smell of my fart?</Text>
        </View>
        <View style={styles.options}>
          <TouchableOpacity style={styles.redButton}>
            <Text style={styles.option}>Woof</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.greenButton}>
            <Text style={styles.option}>Sqeak</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.blueButton}>
            <Text style={styles.option}>Meow</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.yellowButton}>
            <Text style={styles.option}>Roar</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.bottom}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>SKIP</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>NEXT</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* )} */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 20,
    height: "100%",
  },
  top: {
    marginVertical: 16,
  },
  options: {
    marginVertical: 16,
    flex: 1,
  },
  bottom: {
    marginBottom: 12,
    paddingVertical: 16,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  button: {
    backgroundColor: "#1A759F",
    padding: 12,
    paddingHorizontal: 16,
    borderRadius: 16,
    alignItems: "center",
    marginBottom: 30,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "600",
    color: "white",
  },
  question: {
    fontSize: 28,
  },
  option: {
    fontSize: 18,
    fontWeight: "500",
    color: "white",
  },
  redButton: {
    paddingVertical: 12,
    marginVertical: 6,
    backgroundColor: "#EF4444",
    paddingHorizontal: 12,
    borderRadius: 12,
  },
  greenButton: {
    paddingVertical: 12,
    marginVertical: 6,
    backgroundColor: "#10B981",
    paddingHorizontal: 12,
    borderRadius: 12,
  },
  blueButton: {
    paddingVertical: 12,
    marginVertical: 6,
    backgroundColor: "#3B82F6",
    paddingHorizontal: 12,
    borderRadius: 12,
  },
  yellowButton: {
    paddingVertical: 12,
    marginVertical: 6,
    backgroundColor: "#F59E0B",
    paddingHorizontal: 12,
    borderRadius: 12,
  },
  parent: {
    height: "100%",
  },
});
