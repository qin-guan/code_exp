import React from "react";

import {Alert, StyleSheet, TouchableOpacity, View} from "react-native";
import {Title, Text} from 'react-native-paper'

import colors from "../themes/colors";
import shadow from "../themes/shadow";

export interface MCQProps {
    editable: boolean;
    questions: { choice: string; isAnswer: boolean }[]
    setOptions: (o: { choice: string; isAnswer: boolean }[]) => void
}

export default function MCQ(props: Partial<MCQProps>) {
    const {
        editable, questions = [], setOptions = () => {
        }
    } = props
    const colorIndex = ["red", "green", "blue", "yellow"]

    return (
        <View style={{padding: 15}}>
            {questions.map(({choice, isAnswer}, idx) => (
                <TouchableOpacity onPress={() => {
                    if (editable) {
                        Alert.prompt("Edit this field", undefined, (text) => {
                            const c = [...questions]
                            c[idx].choice = text
                            setOptions(c);
                        }, undefined, choice)
                    } else {
                        setOptions([])
                    }
                }}>
                    <View style={{
                        backgroundColor: colors[colorIndex[idx % colorIndex.length]],
                        borderRadius: 15,
                        padding: 30,
                        marginTop: 20,
                        ...shadow
                    }}>
                        <Title style={{color: "white"}}>{choice}</Title>
                    </View>
                </TouchableOpacity>
            ))}
        </View>
    );
}

