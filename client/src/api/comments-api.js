import requesterAPI from "./requester"

const BASE_URL = 'http://localhost:3030/data/comments'

async function createComment(gameID,text){
    const response = await requesterAPI.post(BASE_URL,{gameID,text})
    return response
}

const commentAPI = {
    createComment,
}

export default commentAPI