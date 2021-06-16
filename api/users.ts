import {apiClient} from "./base";
import {LeaderboardResponse} from "./leaderboard";

export interface UserResponse {
    name: string;
    points: number;
    id: string;
    teamId: string,
}

export const add = async (name: string) => {
    return await apiClient.post("Users", {json: {name}}).json<UserResponse>()
}

export const find = async (id: string) => {
    return await apiClient.get(`Users/${id}`).json<UserResponse>();
}

export const getLeaderboard = async () => {
    return await apiClient.get(`Users/Leaderboard`).json<LeaderboardResponse[]>();
}

export default {
    find,
    add,
    getLeaderboard
}
