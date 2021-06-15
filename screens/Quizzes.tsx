import * as React from "react"
import {SafeAreaView, View} from "react-native";
import {ActivityIndicator, Text, Appbar} from "react-native-paper";
import {RouteProp, useNavigation, useRoute} from "@react-navigation/native";
import useSWR from "swr";

import quizzes from "../api/quizzes";
import Error from "../components/Error";
import {ClassroomResponse} from "../api/classrooms";
import {useContext} from "react";
import {AuthContext} from "../context/AuthContext";

export default function QuizzesScreen() {
    const {classroom, setClassroom} = useContext(AuthContext)
    const navigation = useNavigation()

    const {get} = quizzes(classroom ?? "")
    const {data, error} = useSWR(`Classrooms/${classroom}/Quizzes`, get)

    if (error) {
        return <Error/>
    }

    if (!data) {
        return (
            <SafeAreaView>
                <ActivityIndicator animating/>
            </SafeAreaView>
        )
    }

    return (
        <View>
            <Appbar.Header>
                <Appbar.BackAction onPress={() => setClassroom(null)} />
                <Appbar.Content title={classroom}/>
            </Appbar.Header>

            {data.map((q, idx) => {

            })}
        </View>
    )
}
