import React from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";

export default function MCQ() {
    return (
        <View>
            <View style={styles.top}>
                <Text style={styles.questionNumber}>Question 1</Text>
                <Text style={styles.question}>What is the smell of my fart?</Text>
            </View>
            <View style={styles.container}>
                <View style={styles.options}>
                    <TouchableOpacity style={styles.redButton}>
                        <Text style={styles.option}>Woof</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.greenButton}>
                        <Text style={styles.option}>Sqeak</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.blueButton}>
                        <Text style={styles.option}>Meow</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.yellowButton}>
                        <Text style={styles.option}>Roar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        paddingHorizontal: 20,
        height: "100%",
    },
    top: {
        backgroundColor: "#93C5FD",
        borderRadius: 30,
        height: 180,
        alignItems: "center",
    },
    options: {
        marginVertical: 16,
        flex: 1,
    },
    bottom: {
        marginBottom: 12,
        paddingVertical: 16,
        justifyContent: "space-between",
        flexDirection: "row",
    },
    questionNumber: {
        fontSize: 20,
        paddingTop: 30,
    },
    question: {
        fontSize: 28,
        textAlign: "center",
        marginTop: 20,
        marginBottom: 10,
        marginHorizontal: 10,
    },
    option: {
        fontSize: 18,
        fontWeight: "500",
        color: "white",
    },
    redButton: {
        paddingVertical: 30,
        marginVertical: 6,
        backgroundColor: "#EF4444",
        paddingHorizontal: 12,
        borderRadius: 12,
        shadowColor: "black",
        shadowOpacity: 1,
        shadowRadius: 1,
        elevation: 5,
    },
    greenButton: {
        paddingVertical: 30,
        marginVertical: 6,
        backgroundColor: "#10B981",
        paddingHorizontal: 12,
        borderRadius: 12,
        shadowColor: "black",
        shadowOpacity: 1,
        shadowRadius: 1,
        elevation: 5,
    },
    blueButton: {
        paddingVertical: 30,
        marginVertical: 6,
        backgroundColor: "#3B82F6",
        paddingHorizontal: 12,
        borderRadius: 12,
        shadowColor: "black",
        shadowOpacity: 1,
        shadowRadius: 1,
        elevation: 5,
    },
    yellowButton: {
        paddingVertical: 30,
        marginVertical: 6,
        backgroundColor: "#F59E0B",
        paddingHorizontal: 12,
        borderRadius: 12,
        shadowColor: "black",
        shadowOpacity: 1,
        shadowRadius: 1,
        elevation: 5,
    },
});
