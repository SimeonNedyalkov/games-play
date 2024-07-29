import { createContext, useContext } from 'react'
import usePersistedState from '../hooks/usePersistedState'

export const UserContext = createContext({
    userId:'',
    email:'',
    accessToken:'',
    isAuthenticated:false,
    changeAuthState:()=>null
})

export function AuthContextProvider(props){
    const [authState,setAuthstate] = usePersistedState('auth',{})
    
    const changeAuthState = (state) =>{
        // Fix this, bc its bullshit, by implementing persistant auth state
        localStorage.setItem('accessToken',state.accessToken)
        setAuthstate(state)
      }

      const contextData = {
        email:authState.email,
        accessToken:authState.accessToken,
        isAuthenticated:!!authState.email,
        changeAuthState
      }

    return(
        <UserContext.Provider value={contextData}>
            {props.children}
        </UserContext.Provider>
    )
}
export function useAuthContext(){
    const data = useContext(UserContext)
    return data
}