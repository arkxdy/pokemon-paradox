import { ProviderProps } from "@app/type";
import { createContext } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }: ProviderProps) => {
    return (
        <AuthContext.Provider value={null}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;