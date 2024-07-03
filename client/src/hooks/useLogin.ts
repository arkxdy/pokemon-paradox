import { ILoginData } from "@app/type";
import bcrypt from 'bcryptjs';
const useLogin = (data: ILoginData) => {
    const {username, password} = {...data}

    const hashedPassword = bcrypt.hashSync(password, '$2a$10$CwTycUXWue0Thq9StjUM0u')

    return fetch('',{
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: username,
            password: hashedPassword
        })
    })
}


export default useLogin;