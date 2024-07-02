interface IAuth {
    id?: number
    username?: string
    role?: string
}

type AuthState = {
    auth: IAuth
    login: () => {}
    logout: () => {}
}
export type ProviderProps = {
    children: React.ReactNode,
}