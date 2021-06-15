import {createContext} from "react";

export const AuthContext = createContext<{
    id: string | null,
    setId: (id: string) => void,
}>({
    id: null,
    setId: () => {
    },
})

