import * as requester from './requester'

const BASE_URL = 'http://localhost:3030/jsonstore/games'

export const getAll=async ()=>{
    await requester.get(BASE_URL)
}