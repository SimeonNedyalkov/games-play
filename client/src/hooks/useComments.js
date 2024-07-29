import commentAPI from "../api/comments-api";

export function useComments(){
    const createHandler = (gameId,comment) =>{
        commentAPI.createComment(gameId,comment)
    }
    return createHandler
}