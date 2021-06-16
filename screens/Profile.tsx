import * as React from "react";
import {useContext, useState} from "react";

import {Keyboard, SafeAreaView, TouchableWithoutFeedback, View} from "react-native"
import {ActivityIndicator, Button, TextInput, Title} from "react-native-paper";
import useSWR from "swr";

import {find, UserResponse} from "../api/users";
import {AuthContext} from "../context/AuthContext";
import Error from "../components/Error";
import {teams} from "../api/teams";

export default function ProfileScreen() {
    const {id} = useContext(AuthContext)

    const {join} = teams(id ?? "")
    const [code, setCode] = useState("")
    const [visible, setVisible] = useState(false)

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

    const joinTeam = async () => {
        try {
            await join(code)
        } catch {
            alert("Could not join team")
        }
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <SafeAreaView style={{flex: 1}}>
                <View style={{padding: 15, flex: 1}}>
                    <View style={{marginBottom: 30}}>
                        <Title style={{fontSize: 25}}>Welcome, {data.name}</Title>
                        <Title>Points: {data.points}</Title>
                    </View>

                    {!data.teamId && visible ? (
                        <>
                            <TextInput value={code} onChangeText={setCode} mode={"outlined"} label={"Team code"}/>
                            <Button mode={"outlined"} onPress={joinTeam} style={{margin: 30}}>Join</Button>
                        </>
                    ) : (
                        <Button mode={"outlined"} onPress={() => setVisible(true)} style={{margin: 30}}>Join a team</Button>
                    )}

                </View>
            </SafeAreaView>
        </TouchableWithoutFeedback>
    )
}
