import * as React from "react"
import {View} from "react-native";

import {Appbar} from 'react-native-paper';

export default function LoginScreen() {
    return (
        <View>
            <Appbar.Header>
                <Appbar.Content title="Login"/>
            </Appbar.Header>
        </View>
    )
}
