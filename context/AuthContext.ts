import {createContext} from "react";

export const AuthContext = createContext<{
    id: string | null,
    classroom: string | null,
    setId: (id: string) => void,
    setClassroom: (id: string | null) => void,
}>({
    id: null,
    classroom: null,
    setId: () => {
    },
    setClassroom: () => {
    },
})

