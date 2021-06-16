import * as React from "react";
import {useContext, useState} from "react";

import {Alert, Keyboard, SafeAreaView, StyleSheet, TouchableWithoutFeedback, View,} from "react-native";
import {ActivityIndicator, Avatar, Button, Text, TextInput, Title,} from "react-native-paper";
import useSWR from '@nandorojo/swr-react-native';
import colors from "../themes/colors";
import shadow from "../themes/shadow";
import {find, UserResponse} from "../api/users";
import {AuthContext} from "../context/AuthContext";
import Error from "../components/Error";
import {TeamResponse, teams} from "../api/teams";

export default function ProfileScreen() {
    const {id} = useContext(AuthContext);

    const {join, create, find: findTeam} = teams(id ?? "");
    const [code, setCode] = useState("");
    const [visible, setVisible] = useState(false);

    const {data, error} = useSWR<UserResponse>(`Users/${id}`, () =>
        find(id ?? "")
    );

    const {data: team, error: teamError} = useSWR<TeamResponse>(`Teams/${data?.teamId}`, data?.teamId ? () => {
        return findTeam(data?.teamId)
    } : null)

    if (error || teamError) {
        return <Error/>;
    }

    if (!data) {
        return (
            <SafeAreaView>
                <ActivityIndicator animating/>
            </SafeAreaView>
        );
    }

    const joinTeam = async () => {
        try {
            await join(code);
        } catch {
            alert("Could not join team");
        }
    };

    const createTeam = async (name: string) => {
        try {
            await create(name)
        } catch {
            alert("Could not create team")
        }
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <SafeAreaView style={{flex: 1}}>
                <View style={{padding: 15}}>
                    <View style={styles.info}>
                        <View>
                            <Avatar.Image
                                source={{
                                    uri: "https://pfpmaker.com/_nuxt/img/profile-3-1.3e702c5.png",
                                }}
                                size={80}
                            />
                        </View>
                        <View style={{marginLeft: 30}}>
                            <Title style={{fontSize: 27}}>{data.name}</Title>
                            <Text style={{fontSize: 18}}>Class 2T27</Text>
                        </View>
                    </View>

                    <View style={styles.leaderboard}>
                        <View
                            style={{
                                flexDirection: "row",
                                justifyContent: "space-between",
                                marginTop: 10,
                            }}
                        >
                            <Text style={{fontSize: 18}}>Total Points</Text>
                            <Text style={{fontSize: 18, paddingRight: 6}}>
                                {data.points}
                            </Text>
                        </View>
                    </View>


                    {!data.teamId ? (visible ? (
                        <>
                            <TextInput
                                value={code}
                                onChangeText={setCode}
                                mode={"outlined"}
                                label={"Team code"}
                            />
                            <Button
                                mode={"outlined"}
                                onPress={joinTeam}
                                style={{margin: 30}}
                            >
                                Join
                            </Button>
                        </>
                    ) : (
                        <>
                            <Button
                                mode={"outlined"}
                                onPress={() => setVisible(true)}
                                style={{margin: 30}}
                            >
                                Join a team
                            </Button>
                            <Button
                                mode={"outlined"}
                                onPress={() => {
                                    Alert.prompt("Team name", undefined, (text) => {
                                        if (text) {
                                            createTeam(text)
                                        }
                                    })
                                }}
                                style={{margin: 30}}
                            >
                                Create a team
                            </Button>

                        </>
                    )) : (
                        <View style={styles.leaderboard}>
                            <Title>My Teams</Title>
                            <View
                                style={{
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginTop: 10,
                                }}
                            >
                                <Text style={{fontSize: 18}}>{team?.name}</Text>
                                <Text style={{fontSize: 18, paddingRight: 6}}>
                                    {team?.points}
                                </Text>
                            </View>
                        </View>
                    )}
                </View>
            </SafeAreaView>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    info: {
        padding: 20,
        marginTop: 30,
        flexDirection: "row",
        backgroundColor: colors.inputBlue,
        borderRadius: 30,
        alignItems: "center",
        ...shadow,
    },
    leaderboard: {
        padding: 20,
        marginTop: 20,
        backgroundColor: colors.inputBlue,
        borderRadius: 30,
        justifyContent: "space-between",
        ...shadow,
    },
});
