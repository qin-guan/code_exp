import React, { useEffect, useState } from "react";

import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Platform,
} from "react-native";
import { Text, Title } from "react-native-paper";
import * as ImagePicker from "expo-image-picker";
import { MaterialIcons } from "@expo/vector-icons";

import colors from "../themes/colors";
import shadow from "../themes/shadow";

export default function InfoSlide() {
  const [answer, setAnswer] = useState("");
  const [image, setImage] = useState<any | null>(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <View>
      <View style={styles.top}>
        <Text style={{ fontSize: 20, marginBottom: 20 }}>Question 2</Text>
        <Title style={{ fontSize: 30, textAlign: "center" }}>
          Insert an image, video or link
        </Title>
      </View>

      <View style={{ padding: 15 }}>
        <View>
          <TextInput
            style={styles.answer}
            multiline
            placeholder="Insert your text here"
            onChangeText={(val) => setAnswer(val)}
          />
        </View>

        <TouchableOpacity onPress={pickImage}>
          <View style={styles.image}>
            <MaterialIcons
              name="add-circle-outline"
              size={60}
              color="#5BA1FF"
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={pickImage}>
          <View style={styles.image}>
            <MaterialIcons
              name="add-circle-outline"
              size={60}
              color="#5BA1FF"
            />
          </View>
        </TouchableOpacity>
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
  answer: {
    padding: 30,
    marginTop: 30,
    fontSize: 20,
    backgroundColor: colors.inputBlue,
    borderRadius: 15,
    alignItems: "center",
  },
  image: {
    padding: 30,
    marginTop: 30,
    backgroundColor: colors.inputBlue,
    borderRadius: 15,
    alignItems: "center",
  },
});
