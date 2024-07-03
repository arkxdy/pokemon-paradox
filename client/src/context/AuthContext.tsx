import { IAuthContext, ILoginData, IUser, ProviderProps } from "@app/type";
import { createContext, useCallback, useState } from "react";

const AuthContext = createContext<IAuthContext | undefined>(undefined);

export const AuthProvider = ({ children }: ProviderProps) => {
    const [user, setUser] = useState<IUser | undefined>(undefined)

    const login = useCallback((userData: ILoginData) => {
        //validate user
        //get user data from post call
        const loggedInUser: IUser = {
            username: userData.username,
            id: 1,
            role: 'admin'
        }
        setUser(loggedInUser)
    },[])

    const logout = useCallback(() => {
        setUser(undefined)
    },[])
    return (
        <AuthContext.Provider value={{ user, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;