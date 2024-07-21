import * as requester from './requester'

const BASE_URL = 'http://localhost:3030/data/games'

export const getAll = async () =>{
    const result =  await requester.get(BASE_URL)
    const games = Object.values(result)
    return games
}