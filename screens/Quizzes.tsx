import * as React from "react"
import {SafeAreaView, View} from "react-native";
import {ActivityIndicator, Text, Appbar} from "react-native-paper";
import {RouteProp, useNavigation, useRoute} from "@react-navigation/native";
import useSWR from "swr";

import quizzes from "../api/quizzes";
import Error from "../components/Error";
import {ClassroomResponse} from "../api/classrooms";

type QuizzesScreenRouteProp = {
    Quizzes: {
        classroom: ClassroomResponse
    };
}

export default function QuizzesScreen() {
    const route = useRoute<RouteProp<QuizzesScreenRouteProp, 'Quizzes'>>()
    const navigation = useNavigation()

    const {get} = quizzes(route.params.classroom.id)
    const {data, error} = useSWR(`Classrooms/${route.params.classroom.id}/Quizzes`, get)

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
        <SafeAreaView>
            <Appbar.Header>
                <Appbar.BackAction onPress={() => navigation.goBack()} />
                <Appbar.Content title={route.params.classroom.name}/>
            </Appbar.Header>

            {data.map((q, idx) => {

            })}
        </SafeAreaView>
    )
}
