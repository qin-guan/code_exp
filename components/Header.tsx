import colors from "../themes/colors";
import React from "react";
import {SafeAreaView, TouchableOpacity, View} from "react-native";
import {Appbar, Title} from "react-native-paper";

export interface HeaderProps {
    title: string
    backButton: boolean
}

export default function Header(props: Partial<HeaderProps>) {
    const {title, backButton} = props

    return (
        <View style={{backgroundColor: colors.headerBlue}}>
            <SafeAreaView>
                <View style={{padding: 20, alignItems: 'center', flexDirection: "row"}}>
                    <Title>{title}</Title>
                </View>
            </SafeAreaView>
        </View>
    )
}
