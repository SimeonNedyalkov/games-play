import requesterAPI from "./requester"

const BASE_URL = 'http://localhost:3030/data/comments'

async function createComment(gameID,text){
    const response = await requesterAPI.post(BASE_URL,{gameID,text})
    return response
}
async function getComments(gameId){
    const params = new URLSearchParams({
        where: `gameID="${gameId}"`,
        // load: `_ownerId="${gameId}"`
    })
    console.log(`${BASE_URL}?${params.toString()}`)
    const response = await requesterAPI.get(`${BASE_URL}?${params.toString()}`)
    console.log(response)
    return response
    
}

const commentAPI = {
    createComment,
    getComments
}

export default commentAPI
// http://localhost:3030/data/comments?where=gameID%3D%22ff436770-76c5-40e2-b231-77409eda7a61%22
// http://localhost:3030/data/comments?where=gameId%3D%22ff436770-76c5-40e2-b231-77409eda7a61%22