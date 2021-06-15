import {apiClient} from "./base";

export interface CreateUserResponse {
    name: string;
    id: string;
}

export const createUser = async (name: string) => {
    return await apiClient.post("Users", {json: {name}}).json<CreateUserResponse>()
}

export default {
    createUser
}
