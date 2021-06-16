import {apiClient} from "./base";

export interface QuizResponse {
    id: string
    name: string;
    isAdmin: boolean;
}

const quizzes = (id: string) => ({
    get: async () => {
        return await apiClient.get(`Classrooms/${id}/Quizzes`).json<QuizResponse[]>();
    },
    create: async (name: string) => {
        return await apiClient.post(`Classrooms/${id}/Quizzes`, {json: {name}}).json<QuizResponse>();
    },
    attempt: async (requestorId: string, quizId: string, questionAttempts: {questionId: string, choiceId: string}[]) => {
        return await apiClient.post(`Classrooms/${id}/Quizzes/${quizId}/Attempt`, {json: {requestorId, questionAttempts}}).json<number>()
    }
});

export default quizzes;
