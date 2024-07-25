import { useContext } from "react"
import userAPI from "../api/users-api"
import UserContext from "../contexts/userContext"

function useLogin(){
    const {changeAuthState} = useContext(UserContext)
    async function loginHandler(email,password){
        const result = await userAPI.login(email,password)
        changeAuthState(result)
    }
    return loginHandler
}
function useRegister(){
    const {changeAuthState} = useContext(UserContext)
    async function registerHandler(email,password){
        const result = await userAPI.register(email,password)
        changeAuthState(result)
    }
    return registerHandler
}
const useAuthHook = {
    useLogin,
    useRegister
}

export default useAuthHook