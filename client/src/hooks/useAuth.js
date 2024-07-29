import userAPI from "../api/users-api"
import {useAuthContext} from "../contexts/userContext"

export function useLogin(){
    const {changeAuthState} = useAuthContext()
    async function loginHandler(email,password){
        const {password:_ , ...result} = await userAPI.login(email,password)
        changeAuthState(result)
        return result
    }
    return loginHandler
}
export function useRegister(){
    const {changeAuthState} = useAuthContext()
    async function registerHandler(email,password){
        const {password:_ , ...result} = await userAPI.register(email,password)
        changeAuthState(result)
        return result
    }
    return registerHandler
}


