import requesterAPI from "./requester"

const BASE_URL = 'http://localhost:3030/data/comments'

async function createComment(gameID,text){
    const response = await requesterAPI.post(BASE_URL,{gameID,text})
    return response
}
async function getComments(gameId){
    const params = new URLSearchParams({
        where:`gameId="${gameId}"`
    })
    const response = await requesterAPI.get(`${BASE_URL}?${params.toString()}`)
    return response
}

const commentAPI = {
    createComment,
    getComments
}

export default commentAPI