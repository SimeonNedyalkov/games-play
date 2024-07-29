import requesterAPI from "./requester"

const BASE_URL = 'http://localhost:3030/users'

async function login(email,password){
    const authData = await requesterAPI.post(`${BASE_URL}/login`,{email,password})
    return authData
}
async function register(email,password){
    const authData = await requesterAPI.post(`${BASE_URL}/register`,{email,password})
    return authData
}

async function logout(){
    return await requesterAPI.get(`${BASE_URL}/logout`)
}

const userAPI = {
    login,
    register,
    logout
}

export default userAPI