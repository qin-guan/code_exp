import React, {useState} from "react";
import {Keyboard, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View,} from "react-native";
import {Appbar, TextInput} from "react-native-paper";
import {useNavigation} from "@react-navigation/native";
import Header from "../components/Header";

export default function CreateQuiz() {
    const navigation = useNavigation()
    const [questions, setQuestions] = useState([])

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View style={styles.container}>
                {/*<Header backButton title={"Create Quiz"}/>*/}

                <TextInput placeholder={"Quiz name"}/>

                {questions.length === 0 ? (
                    <>
                        <View style={styles.quizRowContainer}>
                            <TouchableOpacity style={styles.quizElementBox}>
                                <Text>Multiple Choice Question</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.quizElementBox}>
                                <Text>Short Answer Question</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.quizRowContainer}>
                            <TouchableOpacity style={styles.quizElementBox}>
                                <Text>Open-Ended Question</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.quizElementBox}>
                                <Text>Info Slide</Text>
                            </TouchableOpacity>
                        </View>
                    </>
                ) : (
                    <View/>
                )}

            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fafafa",
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
        flexDirection: "row",
        alignItems: "center",
        paddingRight: 15
    },
    quizElementBox: {
        padding: 15,
        flex: 1,
        marginLeft: 15,
        marginTop: 30,
        aspectRatio: 1,
        backgroundColor: "#DBEAFE",
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
    },
});
