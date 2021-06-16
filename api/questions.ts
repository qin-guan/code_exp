import {apiClient} from "./base";

export interface QuestionResponse {
    mcqChoices: {choice: string, isAnswer: boolean, id?: string}[];
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
        id?: string,
    }[]
}

const questions = (classroomId: string, quizId: string) => ({
    get: async () => {
        return await apiClient.get(`Classrooms/${classroomId}/Quizzes/${quizId}/Questions`).json<QuestionResponse[]>();
    },
    find: async (id: string) => {
        return await apiClient.get(`Classrooms/${classroomId}/Quizzes/${quizId}/Questions/${id}`).json<QuestionResponse>();
    },
    create: async (questions: Partial<QuestionResponse>[]) => {
        await Promise.all(questions.map(q => {
            return apiClient.post(`Classrooms/${classroomId}/Quizzes/${quizId}/Questions`, { json: q }).json<QuestionResponse>()
        }))
    }
})

export default questions
