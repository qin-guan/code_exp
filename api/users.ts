import {apiClient} from "./base";

export interface UserResponse {
    name: string;
    points: number;
    id: string;
}

export const add = async (name: string) => {
    return await apiClient.post("Users", {json: {name}}).json<UserResponse>()
}

export const find = async (id: string) => {
    return await apiClient.get(`Users/${id}`).json<UserResponse>();
}

export default {
    find,
    add
}
