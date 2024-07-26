import * as requester from './requester'

const BASE_URL = 'http://localhost:3030/data/games'

async function getAll() {
    const result =  await requester.get(BASE_URL)
    const games = Object.values(result)
    return games
}
async function getFirstThree() {
    const result =  await requester.get(BASE_URL)
    const games = Object.values(result)
    const firstThree = games.reverse().slice(0,3)
    return firstThree
}

async function getOne(id) {
    const result =  await requester.get(`${BASE_URL}/${id}`)
    return result
}
async function createGame(data) {
    const result =  await requester.post(`${BASE_URL}`,{data})
    return result
}

const gameAPI = {
    getAll,
    getOne,
    getFirstThree,
    createGame
}
export default gameAPI