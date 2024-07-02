import AuthContext from "@app/context/AuthContext";
import { useContext } from "react"

const useAuth = () => {
    const context = useContext(AuthContext);
    if(!context){
        throw new Error('useAuth must be within AuthProvider')
    }
    return context;
}

export default useAuth;