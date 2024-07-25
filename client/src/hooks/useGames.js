import { useEffect, useState } from 'react'
import gameAPI from '../api/games-api'
export function useGetAllGames(){
    const [games,setGames] = useState([])
    useEffect(()=>{
        async function fetchData() {
            const response = await gameAPI.getAll();
            setGames(response)
            console.log(response)
          }
          fetchData();
        }, []);
        return [games,setGames]
}
export function useGetOneGames(gameId){
    const [game,setGame] = useState([])
    useEffect(()=>{
        async function fetchData() {
            const response = await gameAPI.getOne(gameId);
            setGame(response)
            console.log(response)
          }
          fetchData();
        }, [gameId]);
        return [game,setGame]
}
const gameHook = {
    useGetAllGames,
    useGetOneGames
}

export default gameHook