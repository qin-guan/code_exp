import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from "react-native";
import {Appbar} from "react-native-paper";
import {useNavigation} from "@react-navigation/native";

export default function CreateQuiz() {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <Appbar.Header>
                <Appbar.BackAction onPress={navigation.goBack}/>
                <Appbar.Content title={"Create quiz"}/>
            </Appbar.Header>

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
        </View>
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
