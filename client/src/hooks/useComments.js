import { useEffect, useState } from "react";
import commentAPI from "../api/comments-api";

export function useComments(){
    const createHandler = (gameId,comment) =>{
        commentAPI.createComment(gameId,comment)
    }
    return createHandler
}

export function useGetComments(gameId){
    const [comments,setComments] = useState([])
    useEffect(()=>{
        (async (gameID)=>{
            const result = await commentAPI.getComments(gameID)
            setComments(result)
        })()
    },[gameId])
    return [comments,setComments]
}