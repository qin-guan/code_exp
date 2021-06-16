import {apiClient} from "./base";
import {LeaderboardResponse} from "./leaderboard";

export interface TeamResponse {
    id: string,
    name: string,
    code: string,
    points: number
}

export const getLeaderboard = async () => {
    return await apiClient.get(`Teams/Leaderboard`).json<LeaderboardResponse[]>();
}

export const teams = (userId: string) => ({
    join: async (code: string) => {
        return apiClient.get(`Teams/${code}`, {searchParams: {requestorId: userId}}).json<TeamResponse>()
    },
    create: async (name: string) => {
        return apiClient.post(`Teams`, {json: {name, requestorId: userId}}).json<TeamResponse>();
    },
    find: async (id: string) => {
        return apiClient.get(`Teams/${id}`).json<TeamResponse>()
    }
})

export default {
    getLeaderboard
}
