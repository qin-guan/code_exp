import React, { useState } from "react";

import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import { Text, Title } from "react-native-paper";

import colors from "../themes/colors";
import shadow from "../themes/shadow";

export default function SAQ() {
  const [answer, setAnswer] = useState("");

  return (
    <View>
      <View style={styles.top}>
        <Text style={{ fontSize: 20, marginBottom: 20 }}>Question 2</Text>
        <Title style={{ fontSize: 30, textAlign: "center" }}>
          Insert your Question here!
        </Title>
      </View>

      <View style={{ padding: 15 }}>
        <View style={styles.setting}>
          <Text style={{ fontSize: 20 }}>Settings</Text>
          {/* TODO: Input Settings as shown in Figma */}
        </View>

        <View>
          <TextInput
            style={styles.answer}
            multiline
            placeholder="Answer:"
            onChangeText={(val) => setAnswer(val)}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  top: {
    padding: 30,
    backgroundColor: colors.headerBlue,
    borderRadius: 30,
    alignItems: "center",
  },
  setting: {
    padding: 30,
    marginTop: 30,
    backgroundColor: colors.inputBlue,
    borderRadius: 15,
  },
  answer: {
    padding: 30,
    marginTop: 30,
    fontSize: 20,
    backgroundColor: colors.inputBlue,
    borderRadius: 15,
    alignItems: "center",
  },
});
