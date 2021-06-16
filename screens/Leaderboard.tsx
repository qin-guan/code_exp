import React from "react";
import {SafeAreaView, SectionList, Text, View, StyleSheet} from "react-native";
import {ActivityIndicator, Appbar} from "react-native-paper";
import useSWR from '@nandorojo/swr-react-native';
import {getLeaderboard} from "../api/users";
import {getLeaderboard as getTeamsLeaderboard, TeamResponse} from "../api/teams"
import Error from "../components/Error";
import {LeaderboardResponse} from "../api/leaderboard";

export default function LeaderboardScreen() {
    const {data, error} = useSWR(`Users/Leaderboard`, getLeaderboard)
    const {data: teamData, error: teamError} = useSWR(`Teams/Leaderboard`, getTeamsLeaderboard)

    if (error || teamError) {
        return <Error/>
    }

    if (!data || !teamData) {
        return (
            <SafeAreaView>
                <ActivityIndicator animating/>
            </SafeAreaView>
        )
    }

    function renderSectionHeader({section}: { section: any }) {
        return <Text style={styles.sectionHeader}>{section.title}</Text>;
    }

    function renderItem({item}: { item: LeaderboardResponse }) {
        return (
            <View style={styles.listItem}>
                <View style={styles.displayPic}/>
                <Text style={styles.listItemName}>{item.name}</Text>
                <Text style={styles.listItemPoints}>{item.points}</Text>
            </View>
        );
    }

    const leaderboard = [
        {
            title: "Top students",
            data
        },
        {
            title: "Top teams",
            data: teamData
        }
    ]

    return (
        <View style={styles.container}>
            <Appbar.Header>
                <Appbar.Content title={"Leaderboard"}/>
            </Appbar.Header>

            <View style={{alignItems: 'center'}}>
                <SectionList
                    sections={leaderboard}
                    renderItem={renderItem}
                    renderSectionHeader={renderSectionHeader}
                    style={styles.list}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#93C5FD",
    },
    headerBox: {
        width: "100%",
        height: 100,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },
    headerSubbox: {
        flexDirection: "row",
        alignSelf: "center",
        alignItems: "center",
        marginTop: 40,
    },
    headerBoxText: {
        marginHorizontal: 20,
        marginTop: 30,
        fontSize: 40,
        fontWeight: "bold",
        alignSelf: "center",
    },
    sectionHeader: {
        fontSize: 30,
        fontWeight: "600",
        textAlign: "center",
        marginTop: 30,
        marginBottom: 15,
    },
    list: {
        width: "90%",
        height: "100%",
        marginBottom: 40,
    },
    listItem: {
        fontSize: 20,
        backgroundColor: "#EFF6FF",
        height: 100,
        marginVertical: 10,
        padding: 20,
        borderRadius: 15,
        alignItems: "center",
        flexDirection: "row",
    },
    displayPic: {
        width: 50,
        height: 50,
        marginLeft: 10,
        borderRadius: 50,
        backgroundColor: "#93C5FD",
    },
    listItemName: {
        fontSize: 24,
        marginLeft: 30,
        flex: 10,
    },
    listItemPoints: {
        fontSize: 24,
        marginLeft: 30,
    },
});
