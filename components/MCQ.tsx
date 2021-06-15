import React from "react";

import {StyleSheet, TouchableOpacity, View} from "react-native";
import {Text, Title} from 'react-native-paper'

import colors from "../themes/colors";

export default function MCQ() {
    const colorIndex = ["red", "green", "blue", "yellow"]
    const options = [
        {
            "choice": "choice 1",
            "isAnswer": false
        },
        {
            "choice": "choice 1",
            "isAnswer": false
        },
        {
            "choice": "choice 1",
            "isAnswer": false
        },
        {
            "choice": "choice 1",
            "isAnswer": false
        },
    ]
    return (
        <View>
            <View style={styles.top}>
                <Text style={{fontSize: 20, marginBottom: 20}}>Question 1</Text>
                <Title style={{fontSize: 30, textAlign: "center"}}>What is the smell of my fart?</Title>
            </View>

            <View style={{padding: 15}}>
                {options.map(({choice, isAnswer}, idx) => (
                    <TouchableOpacity>
                        <View style={{
                            backgroundColor: colors[colorIndex[idx % colorIndex.length]],
                            borderRadius: 15,
                            padding: 30,
                            marginTop: 20,
                            shadowOpacity: 1,
                            shadowOffset: {
                                width: 0,
                                height: 0
                            },
                            shadowRadius: 5,
                            shadowColor: "#9CA3AF",
                        }}>
                            <Title style={{color: "white"}}>{choice}</Title>
                        </View>
                    </TouchableOpacity>
                ))}
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
});
