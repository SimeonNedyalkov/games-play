import requesterAPI from "./requester"

const BASE_URL = 'https://localhost:3030/data/games'

const buildUrl = (gameId) => `${BASE_URL}/${gameId}/comments`
async function createComment(gameID,username,text){
    const response = await requesterAPI.post(buildUrl(gameID),{username,text})
    return response
}

async function getAllCommentsForGame(gameId){
    const response = await requesterAPI.get(buildUrl(gameId))
    const comments = Object.values(response)
    return comments
}

const commentAPI = {
    createComment,
    getAllCommentsForGame
}
export default commentAPI