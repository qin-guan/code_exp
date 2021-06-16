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
    }
})

export default {
    getLeaderboard
}
