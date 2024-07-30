import { useEffect, useState } from "react";
import commentAPI from "../api/comments-api";

export function useComments(){
    const createHandler = (gameId,comment) =>{
        return commentAPI.createComment(gameId,comment)
    }
    return createHandler
}

export function useGetComments(gameId){
    const [comments,setComments] = useState([])
    useEffect(()=>{
        (async ()=>{
            const result = await commentAPI.getComments(gameId)
            console.log(result)
            setComments(result)
        })();
    },[gameId])
    return [comments,setComments]
}