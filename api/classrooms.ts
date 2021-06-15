import {apiClient} from "./base";

export interface ClassroomResponse {
    id: string
    name: string;
    isAdmin: boolean;
}

const classrooms = (id: string) => ({
    get: async () => {
        return await apiClient.get(`Classrooms/`, {searchParams: {userId: id}}).json<ClassroomResponse[]>();
    },
    find: async (classroomId: string) => {
        return await apiClient.get(`Classrooms/${classroomId}`, {searchParams: {userId: id}}).json<ClassroomResponse>();
    }
});

export default classrooms;
