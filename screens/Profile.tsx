import * as React from "react";
import { View, TouchableOpacity } from "react-native";
import { Appbar } from "react-native-paper";
import { Entypo } from "@expo/vector-icons";

export default function ProfileScreen({ navigation } : { navigation:any }) {
    return (
        <View>
            <Appbar.Header>
                <Appbar.Content title="Profile" />
            </Appbar.Header>
            <TouchableOpacity
                onPress={() => navigation.navigate("Create Quiz")}
            >
                <Entypo
                    name="new-message"
                    size={24}
                    color="#333"
                    style={{ marginRight: 20 }}
                />
            </TouchableOpacity>
        </View>
    );
}
