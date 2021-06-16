import React, {useContext, useState} from "react";
import {SafeAreaView, Text, View} from "react-native";
import {RouteProp, useNavigation, useRoute} from "@react-navigation/native";
import {ClassroomResponse} from "../api/classrooms";
import quizzes, {QuizResponse} from "../api/quizzes";
import Header from "../components/Header";
import useSWR from '@nandorojo/swr-react-native';
import questionsApi from "../api/questions"
import Error from "../components/Error";
import {ActivityIndicator, Appbar, Button, Title} from "react-native-paper";
import QuestionAttempt from "../components/QuestionAttempt";
import {AuthContext} from "../context/AuthContext";

type QuizScreenRouteProps = {
    Quiz: {
        classroom: ClassroomResponse,
        quiz: QuizResponse
    }
}

export default function QuizScreen() {
    const navigation = useNavigation();
    const {id} = useContext(AuthContext)
    const route = useRoute<RouteProp<QuizScreenRouteProps, 'Quiz'>>()

    const {classroom, quiz} = route.params;
    const {get} = questionsApi(classroom.id, quiz.id)
    const {attempt} = quizzes(classroom.id)

    const {data: questions, error} = useSWR(`Classroom/${classroom.id}/Quizzes/${quiz.id}/Questions`, get)
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [answerList, setAnswerList] = useState<{choiceId: string, questionId: string}[]>([])
    const [completedQuiz, setCompletedQuiz] = useState<number | null>(null)

    if (error) return <Error/>
    if (!questions) {
        return (
            <SafeAreaView>
                <ActivityIndicator/>
            </SafeAreaView>
        )
    }

    if (questions.length === 0) {
        return (
            <View>
                <Appbar.Header>
                    <Appbar.BackAction onPress={navigation.goBack}/>
                    <Appbar.Content title={quiz.name}/>
                </Appbar.Header>

                <Text>This quiz has no questions! :O</Text>
            </View>
        )
    }

    const completeQuiz = async () => {
        try {
            const points = await attempt(id ?? "", quiz.id, answerList);
            setCompletedQuiz(points)
        } catch (e) {
            alert("Could not submit quiz attempt")
        }
    }

    return (
        <View style={{flex: 1}}>
            <Header title={`Question ${currentQuestion + 1}: ${questions[currentQuestion].title}`}/>
            {completedQuiz !== null ? (
                <View style={{alignItems: "center", justifyContent: "center", flex: 1}}>
                    <Title>Completed Quiz! You earned {completedQuiz} points!</Title>
                    <Button onPress={navigation.goBack}>Back to quizzes screen</Button>
                </View>
            ) : <QuestionAttempt
                quizId={quiz.id}
                questionId={questions[currentQuestion].id}
                questionType={questions[currentQuestion].questionType}
                classroomId={classroom.id}
                onComplete={([{id}]) => {
                    setAnswerList([...answerList, {choiceId: id ?? "", questionId: questions[currentQuestion].id}])

                    if (currentQuestion < questions.length - 1) setCurrentQuestion(currentQuestion + 1)
                    else completeQuiz()
                }}
            />}
        </View>
    )
}
