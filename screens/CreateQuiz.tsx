import React from "react";
import { useState, useEffect } from "react";
import {
    View,
    Text,
    FlatList,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Keyboard,
    Pressable,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const SAMPLE_QUIZZES = [
    {
        quizName: "EE2211 Tutorial Quiz",
        type: "MCQ",
        questions: {
            qn1: {
                qnTitle: "What is the meaning of life?",
                optionA: "Dog",
                optionB: "Cat",
                optionC: "Mouse",
                optionD: "Bird",
                ans: ["Dog", "Mouse"],
            },
            qn2: {
                qnTitle: "What is the meaning of death?",
                optionA: "Dog",
                optionB: "Cat",
                optionC: "Mouse",
                optionD: "Bird",
                ans: ["Cat"],
            },
            qn3: {
                qnTitle: "What is the meaning of love?",
                optionA: "Dog",
                optionB: "Cat",
                optionC: "Mouse",
                optionD: "Bird",
                ans: ["Mouse"],
            },
        },
    },
    {
        quizName: "EE2026 Lecture Quiz",
        type: "MCQ",
        questions: {
            qn1: {
                qnTitle: "What is the meaning of life?",
                optionA: "Dog",
                optionB: "Cat",
                optionC: "Mouse",
                optionD: "Bird",
                ans: ["Dog", "Mouse"],
            },
            qn2: {
                qnTitle: "What is the meaning of death?",
                optionA: "Dog",
                optionB: "Cat",
                optionC: "Mouse",
                optionD: "Bird",
                ans: ["Cat"],
            },
            qn3: {
                qnTitle: "What is the meaning of love?",
                optionA: "Dog",
                optionB: "Cat",
                optionC: "Mouse",
                optionD: "Bird",
                ans: ["Mouse"],
            },
        },
    },
];

export default function CreateQuiz() {
    const [quizzes, setQuizzes] = useState(SAMPLE_QUIZZES);

    function renderItem({ item }) {
        console.log(item);
        return (
            <TouchableOpacity style={styles.listItem} onPress={() => {}}>
                <Text style={styles.listItemText}>{item.quizName}</Text>
            </TouchableOpacity>
        );
    }

    return (
        <View style={styles.container}>
            <View style={styles.headerBox}>
                <View style={styles.headerSubbox}>
                    <TouchableOpacity>
                        <MaterialIcons
                            name="arrow-back-ios"
                            size={24}
                            color="black"
                        />
                    </TouchableOpacity>
                    <Text style={styles.headerBoxText}>My Quizzes</Text>
                    <TouchableOpacity>
                        <MaterialIcons
                            name="arrow-forward-ios"
                            size={24}
                            color="black"
                        />
                    </TouchableOpacity>
                </View>
                <Text style={styles.quizTitle}>Enter Quiz Name</Text>
            </View>
            <View style={styles.quizRowContainer}>
                <TouchableOpacity style={styles.quizElementBox}>
                    <Text>Multiple Choice Questions</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.quizElementBox}>
                    <Text>Multiple Choice Questions</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.quizRowContainer}>
                <TouchableOpacity style={styles.quizElementBox}>
                    <Text>Multiple Choice Questions</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.quizElementBox}>
                    <Text>Multiple Choice Questions</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#fafafa",
    },
    headerBox: {
        width: "100%",
        height: 180,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        backgroundColor: "#93C5FD",
        marginBottom: 20,
    },
    headerSubbox: {
        flexDirection: "row",
        alignSelf: "center",
        alignItems: "center",
        marginTop: 50,
    },
    headerBoxText: {
        marginHorizontal: 20,
        fontSize: 24,
        fontWeight: "bold",
    },
    quizTitle: {
        fontSize: 24,
        marginTop: 30,
        alignSelf: "center",
    },
    quizRowContainer: {
        display: "flex",
        flexDirection: "row",
    },
    quizElementBox: {
        width: 165,
        height: 165,
        margin: 15,
        padding: 15,
        backgroundColor: "#DBEAFE",
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
    },
});
