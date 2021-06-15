import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function CreateQuizScreen() {
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
