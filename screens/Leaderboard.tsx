import React from "react";
import { useState } from "react";
import {
    View,
    Text,
    SectionList,
    StyleSheet,
    TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const SAMPLE_LEADERBOARD = [
    {
        title: "Top Students",
        data: [
            {
                name: "Jackie Chan",
                class: "2T12",
                points: "1070",
            },
            {
                name: "Monica Chen",
                class: "1T22",
                points: "930",
            },
            {
                name: "Edward Cullen",
                class: "2T03",
                points: "880",
            },
        ],
    },
    {
        title: "Top Teams",
        data: [
            {
                name: "Galaxy Brain",
                points: "2010",
            },
            {
                name: "Death Stranding",
                points: "1770",
            },
            {
                name: "Trade Offer",
                points: "1610",
            },
        ],
    },
];

export default function LeaderboardScreen() {
    const [leaderboard, setLeaderboard] = useState(SAMPLE_LEADERBOARD);

    function renderSectionHeader({ section }: { section: any }) {
        return <Text style={styles.sectionHeader}>{section.title}</Text>;
    }

    function renderItem({ item }: { item: any }) {
        console.log(item);
        return (
            <TouchableOpacity style={styles.listItem} onPress={() => {}}>
                <View style={styles.displayPic}></View>
                <Text style={styles.listItemName}>{item.name}</Text>
                <Text style={styles.listItemPoints}>{item.points}</Text>
            </TouchableOpacity>
        );
    }

    return (
        <View style={styles.container}>
            <View style={styles.headerBox}>
                <TouchableOpacity>
                    <MaterialIcons
                        name="arrow-back"
                        size={40}
                        color="black"
                        style={{ position: "absolute", left: 40, top: 40 }}
                    />
                </TouchableOpacity>

                <Text style={styles.headerBoxText}>Leaderboard</Text>
            </View>
            <SectionList
                sections={leaderboard}
                renderItem={renderItem}
                renderSectionHeader={renderSectionHeader}
                style={styles.list}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
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
