import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

export default function SAQ() {
  const [answer, setAnswer] = useState("");

  return (
    <View>
      <View style={styles.top}>
        <Text style={styles.questionNumber}>Question 2</Text>
        <Text style={styles.question}>Insert your question here</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.settings}>
          <Text>Settings</Text>
        </View>
        <View>
          <Text>Answer:</Text>
          <TextInput
            style={styles.input}
            multiline
            placeholder="Input your answer here"
            onChangeText={(val) => setAnswer(val)}
          />
        </View>
        {/* Debug */}
        <Text style={styles.question}>Answer: {answer}</Text>
      </View>
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
    backgroundColor: "#93C5FD",
    borderRadius: 30,
    height: 180,
    alignItems: "center",
  },
  questionNumber: {
    fontSize: 20,
    paddingTop: 30,
  },
  question: {
    fontSize: 28,
    textAlign: "center",
    marginTop: 20,
    marginBottom: 10,
    marginHorizontal: 10,
  },
  settings: {
    paddingVertical: 30,
    marginVertical: 6,
    backgroundColor: "#DBEAFE",
    paddingHorizontal: 12,
    borderRadius: 15,
  },
  input: {
    fontSize: 16,
    paddingVertical: 30,
    marginVertical: 6,
    backgroundColor: "#DBEAFE",
    paddingHorizontal: 12,
    borderRadius: 15,
  },
});
