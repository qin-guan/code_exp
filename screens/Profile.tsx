import * as React from "react";
import { View, TouchableOpacity } from "react-native";
import { Appbar } from "react-native-paper";

export default function ProfileScreen({ navigation } : { navigation:any }) {
    return (
        <View>
            <Appbar.Header>
                <Appbar.Content title="Profile" />
            </Appbar.Header>
            <TouchableOpacity
                onPress={() => navigation.navigate("Create Quiz")}
            >
            </TouchableOpacity>
        </View>
    );
}
