import useAuth from "@app/hooks/useAuth";
import useLogin from "@app/hooks/useLogin";
import { useEffect } from "react";

const Login = () => {
    const { login } = useAuth()
    useEffect(() => {
        (async function(){
            useLogin({username: 'Ark', password: 'qwert'})
            .then((res => res.json()))
            .then((data) => login(data))
            .catch((error) => console.log(error))
        })()
    },[])
    return (
        <>
            Login
        </>
    )
}

export default Login;