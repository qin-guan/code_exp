import * as React from "react"
import {useContext} from "react"
import {FlatList, SafeAreaView, TouchableOpacity, View} from "react-native";
import {ActivityIndicator, Appbar, Title} from "react-native-paper";
import {RouteProp, useNavigation, useRoute} from "@react-navigation/native";
import useSWR from '@nandorojo/swr-react-native';

import quizzes, {QuizResponse} from "../api/quizzes";
import {ClassroomResponse} from "../api/classrooms"
import Error from "../components/Error";
import colors from "../themes/colors"
import {AuthContext} from "../context/AuthContext";
import shadow from "../themes/shadow";

type QuizzesScreenRouteParams = {
    Quizzes: {
        classroom: ClassroomResponse
    }
}

export default function QuizzesScreen() {
    const {id} = useContext(AuthContext)
    const navigation = useNavigation()
    const route = useRoute<RouteProp<QuizzesScreenRouteParams, 'Quizzes'>>()

    const {classroom} = route.params;

    const {get} = quizzes(classroom.id)
    // const {find} = classrooms(id ?? "")
    // const {data: classroom, error: classroomError} = useSWR(`Classrooms/${classroomId}`, () => find(classroomId ?? ""))
    const {data, error} = useSWR(`Classrooms/${classroom.id}/Quizzes`, get)

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

    const navigateToCreateQuiz = () => {
        navigation.navigate("CreateQuiz", {classroom})
    }
    const navigateToClasses = () => navigation.navigate("ClassroomsNavigator")
    const navigateToQuiz = (quiz: QuizResponse) => navigation.navigate("Quiz", {classroom, quiz})

    return (
        <View style={{flex: 1}}>
            <Appbar.Header>
                <Appbar.BackAction onPress={navigateToClasses}/>
                <Appbar.Content title={classroom.name}/>
                {classroom.isAdmin && <Appbar.Action icon={"plus"} onPress={navigateToCreateQuiz}/>}
            </Appbar.Header>

            <FlatList style={{flex: 1}} data={data} renderItem={({item, index}) => (
                <View>
                    <TouchableOpacity onPress={() => navigateToQuiz(item)}>
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
                </View>
            )}/>
        </View>
    )
}
