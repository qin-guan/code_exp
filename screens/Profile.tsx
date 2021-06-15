import * as React from "react";
import {useContext} from "react";

import {SafeAreaView, TouchableOpacity, View} from "react-native"
import {ActivityIndicator, Button, Text, Title} from "react-native-paper";
import useSWR from "swr";

import {find, UserResponse} from "../api/users";
import classrooms, {ClassroomResponse} from "../api/classrooms";
import {AuthContext} from "../context/AuthContext";
import colors from "../themes/colors";
import shadow from "../themes/shadow";

export default function ProfileScreen() {
    const {id, setId} = useContext(AuthContext)

    const {get} = classrooms(id ?? "")
    const {data, error} = useSWR<UserResponse>(`Users/${id}`, () => find(id ?? ""))
    const {data: classes, error: classError} = useSWR<ClassroomResponse[]>(`Classrooms/`, get)

    const resetStore = () => {
        setId("")
    }

    if (error || classError) {
        return (
            <SafeAreaView>
                <Text>
                    User does not exist
                </Text>

                <Button onPress={resetStore}>
                    Reset store
                </Button>
            </SafeAreaView>
        )
    }

    if (!data || !classes) {
        return (
            <SafeAreaView>
                <ActivityIndicator animating/>
            </SafeAreaView>
        )
    }

    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={{padding: 15, flex: 1}}>
                <View style={{marginBottom: 30}}>
                    <Title style={{fontSize: 25}}>Welcome, {data.name}</Title>
                    <Title>Points: {data.points}</Title>
                </View>
                {classes.map((c, idx) => (
                    <View key={idx.toString()}>
                        <TouchableOpacity>
                            <View style={{backgroundColor: colors.headerBlue, padding: 30, borderRadius: 15, ...shadow}}>
                                <Title>{c.name}</Title>
                            </View>
                        </TouchableOpacity>
                    </View>
                ))}
            </View>
        </SafeAreaView>
    )
}
