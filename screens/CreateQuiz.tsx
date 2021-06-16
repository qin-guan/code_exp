import React, {useRef, useState} from "react";
import {
    FlatList,
    Keyboard,
    KeyboardAvoidingView,
    StyleSheet,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View,
} from "react-native";
import {RouteProp, useNavigation, useRoute} from "@react-navigation/native";
import Header from "../components/Header";
import shadow from "../themes/shadow";
import quizzes from "../api/quizzes";
import questionsApi, {QuestionResponse} from "../api/questions";
import {ClassroomResponse} from "../api/classrooms";
import MCQ from "../components/MCQ";

const QUESTION_TYPES = ["Multiple-Choice Question", "Short Answer Question", "Open ended Question", "Info slide"]

type CreateQuizScreenRouteParams = {
    CreateQuiz: {
        classroom: ClassroomResponse
    }
}

function renderQuizComponent(questions: Partial<QuestionResponse>[], currentQuestion: number, setQuestions: (qns: Partial<QuestionResponse>[]) => void) {
    switch (questions[currentQuestion].questionType) {
        case 0:
        case 1:
        case 2:
        case 3:
            return (
                <View>
                    <MCQ editable questions={questions[currentQuestion].mcqQuestionChoices} setOptions={options => {
                        const qns = [...questions]
                        qns[currentQuestion].mcqQuestionChoices = options
                        setQuestions(qns)
                    }}/>
                </View>
            )
    }
}

export default function CreateQuiz() {
    const route = useRoute<RouteProp<CreateQuizScreenRouteParams, 'CreateQuiz'>>()
    const navigation = useNavigation()

    const {classroom} = route.params
    const {create} = quizzes(classroom.id)

    const quizId = useRef("")
    const questionTypeRef = useRef(0)

    const {create: createQuestionsApi} = questionsApi(classroom.id, quizId.current)
    const [questions, setQuestions] = useState<Partial<QuestionResponse>[]>([])
    const [currentQuestion, setCurrentQuestion] = useState(0)

    const [quizName, setQuizName] = useState("")

    const initQuiz = async (questionType: number) => {
        if (quizName.length === 0) return;
        const {id} = await create(quizName);
        quizId.current = id
        questionTypeRef.current = questionType;

        setQuestions(q => [...q, {
            questionType,
            title: "",
            points: 10,
            mcqQuestionChoices: [
                {
                    "choice": "choice 1",
                    "isAnswer": false
                },
                {
                    "choice": "choice 1",
                    "isAnswer": false
                },
                {
                    "choice": "choice 1",
                    "isAnswer": false
                },
                {
                    "choice": "choice 1",
                    "isAnswer": false
                },
            ]
        }])
    }

    const newQuestion = () => {
        setQuestions(q => [...q, {
            questionType: questionTypeRef.current,
            mcqQuestionChoices: [
                {
                    "choice": "choice 1",
                    "isAnswer": false
                },
                {
                    "choice": "choice 1",
                    "isAnswer": false
                },
                {
                    "choice": "choice 1",
                    "isAnswer": false
                },
                {
                    "choice": "choice 1",
                    "isAnswer": false
                },
            ],
            title: "",
            points: 10,
        }])
        setCurrentQuestion(questions.length - 1)
    }

    const createQuestions = async () => {
        try {
            await createQuestionsApi(questions)
            navigation.goBack()
        } catch (e) {
            alert("Could not create questions")
        }
    }

    return (
        <KeyboardAvoidingView behavior={"padding"} style={{flex: 1}}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                <View style={styles.container}>
                    <Header
                        textInput
                        points={questions.length === 0 ? undefined : questions[currentQuestion].points}
                        backButton={questions.length === 0}
                        questionNumber={questions.length === 0 ? undefined : currentQuestion}
                        placeholder={questions.length === 0 ? "Enter Quiz Name" : "Insert your question here"}
                        value={questions.length === 0 ? quizName : questions[currentQuestion].title}
                        title={questions.length === 0 ? "Create Quiz" : quizName}
                        onChangeText={questions.length === 0 ? setQuizName : (text) => {
                            const clone = [...questions]
                            clone[currentQuestion].title = text
                            setQuestions(clone)
                        }}
                        onLeft={() => setCurrentQuestion(c => c - 1)}
                        onRight={() => {
                            if (currentQuestion < questions.length - 1) setCurrentQuestion(c => c + 1)
                        }}
                        onNewQuestion={newQuestion}
                        onCreate={questions.length !== 0 ? createQuestions : undefined}
                        onChangePoints={points => {
                            const clone = [...questions]
                            clone[currentQuestion].points = points;
                            setQuestions(clone)
                        }}
                    />

                    {questions.length === 0 ? (
                        <View style={styles.quizRowContainer}>
                            <FlatList numColumns={2} data={QUESTION_TYPES} renderItem={({item, index}) => (
                                <TouchableOpacity style={styles.quizElementBox} onPress={() => initQuiz(index)} key={index.toString()}>
                                    <Text>{item}</Text>
                                </TouchableOpacity>
                            )}/>
                        </View>
                    ) : renderQuizComponent(questions, currentQuestion, setQuestions)}

                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fafafa",
    },
    headerSubbox: {
        flexDirection: "row",
        alignSelf: "center",
        alignItems: "center",
        marginTop: 50,
    },
    headerBoxText: {
        marginHorizontal: 20,
        fontSize: 24,
        fontWeight: "bold",
    },
    quizTitle: {
        fontSize: 24,
        marginTop: 30,
        alignSelf: "center",
    },
    quizRowContainer: {
        flexDirection: "row",
        paddingRight: 15,
        flex: 1
    },
    quizElementBox: {
        padding: 15,
        flex: 1,
        marginLeft: 15,
        marginTop: 30,
        aspectRatio: 1,
        backgroundColor: "#DBEAFE",
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        ...shadow
    },
});
