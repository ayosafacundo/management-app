import { createContext } from "react";

export const State = createContext({
    logged: false,
    id: null,
    user: null,
    privileges: null
})