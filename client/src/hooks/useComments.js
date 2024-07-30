import { act, useEffect, useReducer, useState } from "react";
import commentAPI from "../api/comments-api";


export function useComments(){
    const createHandler = (gameId,comment) =>{
        return commentAPI.createComment(gameId,comment)
    }
    return createHandler
}
function commentsReducer(state,action){
    switch (action.type) {
        case 'GET_ALL':
            return action.payload.slice()
        case 'ADD_COMMENT':
            return [...state,action.payload]
        default:
            break;
    }
}
export function useGetComments(gameId){
    const [comments,dispatch] = useReducer(commentsReducer,[])
    useEffect(()=>{
        (async ()=>{
            const result = await commentAPI.getComments(gameId)
            dispatch({type:'GET_ALL',payload:result})
        })();
    },[gameId])
    return [comments,dispatch]
}