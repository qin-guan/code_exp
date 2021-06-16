import * as React from "react";
import {useContext} from "react";
import {ActivityIndicator, Appbar, Title} from "react-native-paper";
import {FlatList, SafeAreaView, TouchableOpacity, View} from "react-native";
import colors from "../themes/colors";
import shadow from "../themes/shadow";
import classrooms, {ClassroomResponse} from "../api/classrooms";
import useSWR from '@nandorojo/swr-react-native';
import {AuthContext} from "../context/AuthContext";
import Error from "../components/Error";
import {useNavigation} from "@react-navigation/native";

export default function MyClasses() {
    const navigation = useNavigation();
    const {id} = useContext(AuthContext)

    const {get} = classrooms(id ?? "")
    const {data: classes, error: classError} = useSWR<ClassroomResponse[]>(`Classrooms/`, get)

    if (classError) {
        return <Error/>
    }

    if (!classes) {
        return (
            <SafeAreaView>
                <ActivityIndicator animating/>
            </SafeAreaView>
        )
    }

    // const navigateToQuizzes = (classroom: ClassroomResponse) => setClassroom(classroom.id)
    const navigateToQuizzes = (classroom: ClassroomResponse) => navigation.navigate("QuizzesNavigator", {
        screen: "My Quizzes",
        params: {classroom}
    })

    return (
        <View style={{flex: 1}}>
            <Appbar.Header>
                <Appbar.Content title={"My classes"}/>
            </Appbar.Header>

            <FlatList style={{flex: 1}} data={classes} renderItem={({item: c}) => (
                <View style={{marginTop: 30, padding: 15}}>
                    <TouchableOpacity onPress={() => navigateToQuizzes(c)}>
                        <View
                            style={{backgroundColor: colors.headerBlue, padding: 30, borderRadius: 15, ...shadow}}>
                            <Title style={{fontSize: 20}}>{c.name}</Title>
                        </View>
                    </TouchableOpacity>
                </View>
            )}/>
        </View>
    )
}
