import * as React from "react";
import {View} from "react-native"
import {Appbar} from "react-native-paper";

export default function ProfileScreen() {
    return (
        <View>
            <Appbar.Header>
                <Appbar.Content title="Profile"/>
            </Appbar.Header>
        </View>
    )
}
