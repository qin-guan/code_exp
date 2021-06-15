import * as React from "react";
import {useContext} from "react";

import {SafeAreaView, TouchableOpacity, View} from "react-native"
import {ActivityIndicator, Button, Text, Title} from "react-native-paper";
import {useNavigation} from "@react-navigation/native";
import useSWR from "swr";

import {find, UserResponse} from "../api/users";
import {AuthContext} from "../context/AuthContext";
import Error from "../components/Error";

export default function ProfileScreen() {
    const {id} = useContext(AuthContext)

    const {data, error} = useSWR<UserResponse>(`Users/${id}`, () => find(id ?? ""))

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
        <SafeAreaView style={{flex: 1}}>
            <View style={{padding: 15, flex: 1}}>
                <View style={{marginBottom: 30}}>
                    <Title style={{fontSize: 25}}>Welcome, {data.name}</Title>
                    <Title>Points: {data.points}</Title>
                </View>
            </View>
        </SafeAreaView>
    )
}
