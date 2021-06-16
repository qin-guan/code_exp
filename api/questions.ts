import {apiClient} from "./base";

export interface QuestionResponse {
    id: string;
    title: string;
    questionType: number,
    oneWordOnly: boolean,
    numbersOnly: boolean,
    answer: string,
    photoOnly: boolean,
    minWordRequirement: number,
    text: string,
    points: number,
    mcqQuestionChoices: {
        choice: string,
        isAnswer: boolean
    }[]
}

const questions = (classroomId: string, quizId: string) => ({
    create: async (questions: Partial<QuestionResponse>[]) => {
        await Promise.all(questions.map(q => {
            return apiClient.post(`Classrooms/${classroomId}/Quizzes/${quizId}/Questions`, { json: q }).json<QuestionResponse>()
        }))
    }
})

export default questions
