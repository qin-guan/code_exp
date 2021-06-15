import * as React from "react";
import {useContext} from "react";

import {SafeAreaView, TouchableOpacity, View} from "react-native"
import {ActivityIndicator, Button, Text, Title} from "react-native-paper";
import {useNavigation} from "@react-navigation/native";
import useSWR from "swr";

import {find, UserResponse} from "../api/users";
import classrooms, {ClassroomResponse} from "../api/classrooms";
import {AuthContext} from "../context/AuthContext";
import colors from "../themes/colors";
import shadow from "../themes/shadow";
import Error from "../components/Error";

export default function ProfileScreen() {
    const navigation = useNavigation();
    const {id} = useContext(AuthContext)

    const {get} = classrooms(id ?? "")
    const {data, error} = useSWR<UserResponse>(`Users/${id}`, () => find(id ?? ""))
    const {data: classes, error: classError} = useSWR<ClassroomResponse[]>(`Classrooms/`, get)

    if (error || classError) {
        return <Error/>
    }

    if (!data || !classes) {
        return (
            <SafeAreaView>
                <ActivityIndicator animating/>
            </SafeAreaView>
        )
    }

    const navigateToQuizzes = (classroom: ClassroomResponse) => navigation.navigate("Quizzes", {classroom})

    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={{padding: 15, flex: 1}}>
                <View style={{marginBottom: 30}}>
                    <Title style={{fontSize: 25}}>Welcome, {data.name}</Title>
                    <Title>Points: {data.points}</Title>
                </View>
                {classes.map((c, idx) => (
                    <View key={idx.toString()}>
                        <TouchableOpacity onPress={() => navigateToQuizzes(c)}>
                            <View
                                style={{backgroundColor: colors.headerBlue, padding: 30, borderRadius: 15, ...shadow}}>
                                <Title>{c.name}</Title>
                            </View>
                        </TouchableOpacity>
                    </View>
                ))}
            </View>
        </SafeAreaView>
    )
}
