import useSWR from '@nandorojo/swr-react-native';
import questions from "../api/questions";
import React from "react";
import {View, Text, SafeAreaView, ActivityIndicator} from "react-native";
import Error from "./Error";
import MCQ from "./MCQ";

export interface QuestionAttemptProps {
    questionId: string,
    questionType: number,
    quizId: string,
    classroomId: string
    onComplete: (choice: {id?: string}[]) => void
}

export default function QuestionAttempt(props: QuestionAttemptProps) {
    const {questionId, questionType, classroomId, quizId, onComplete} = props
    const {find} = questions(classroomId, quizId)
    const {data, error} = useSWR(`Classrooms/${classroomId}/Quizzes/${quizId}/Questions/${questionId}`, () => find(questionId))

    if (error) return <Error/>
    if (!data) {
        return (
            <SafeAreaView>
                <ActivityIndicator/>
            </SafeAreaView>
        )
    }

    return (
        <View>
            <MCQ questions={data.mcqChoices} setOptions={onComplete}/>
        </View>
    )
}
