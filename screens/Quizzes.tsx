import * as React from "react"
import {useContext, useEffect} from "react";
import {FlatList, SafeAreaView, TouchableOpacity, View} from "react-native";
import {ActivityIndicator, Text, Appbar, Title} from "react-native-paper";
import {RouteProp, useNavigation, useRoute} from "@react-navigation/native";
import useSWR from "swr";

import quizzes from "../api/quizzes";
import classrooms from "../api/classrooms"
import Error from "../components/Error";
import colors from "../themes/colors"
import {AuthContext} from "../context/AuthContext";
import shadow from "../themes/shadow";

export default function QuizzesScreen() {
    const {id, classroom: classroomId, setClassroom} = useContext(AuthContext)
    const navigation = useNavigation()

    const {get} = quizzes(classroomId ?? "")
    const {find} = classrooms(id ?? "")
    const {data: classroom, error: classroomError} = useSWR(`Classrooms/${classroomId}`, () => find(classroomId ?? ""))
    const {data, error} = useSWR(`Classrooms/${classroom}/Quizzes`, get)

    if (error || classroomError) {
        return <Error/>
    }

    if (!data || !classroom) {
        return (
            <SafeAreaView>
                <ActivityIndicator animating/>
            </SafeAreaView>
        )
    }

    return (
        <View style={{flex: 1}}>
            <Appbar.Header>
                <Appbar.BackAction onPress={() => setClassroom(null)} />
                <Appbar.Content title={classroom.name}/>
            </Appbar.Header>

            <FlatList style={{flex: 1}} data={data} renderItem={({item}) => (
                <TouchableOpacity>
                    <View style={{
                        backgroundColor: colors.headerGreen,
                        padding: 30,
                        marginTop: 30,
                        marginHorizontal: 15,
                        borderRadius: 15,
                        ...shadow
                    }}>
                        <Title>{item.name}</Title>
                    </View>
                </TouchableOpacity>
            )}/>
        </View>
    )
}
