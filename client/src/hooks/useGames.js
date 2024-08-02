import { useEffect, useState } from 'react'
import gameAPI from '../api/games-api'
function useGetAllGames(){
    const [games,setGames] = useState([])
    useEffect(()=>{
        async function fetchData() {
            const response = await gameAPI.getAll();
            setGames(response)
          }
          fetchData();
        }, []);
        return [games,setGames]
}
function useGetOneGames(gameId){
    const [game,setGame] = useState({})
    useEffect(()=>{
        async function fetchData() {
            const response = await gameAPI.getOne(gameId);
            setGame(response)
          }
          fetchData();
        }, [gameId]);
        return [game,setGame]
}
function useFirstThreeGames(){
    const [firstThreeGames, setFirstThreeGames] = useState([])
    useEffect(()=>{
        async function fetchData(){
            const response = await gameAPI.getFirstThree()
            setFirstThreeGames(response)
        }
        fetchData()
    },[])
        return [firstThreeGames,setFirstThreeGames]
}
function useCreateGame(gameData){
    const [createdGame, setCreatedGame] = useState({})
    useEffect(()=>{
        async function fetchData(){
            const response = await gameAPI.createGame(gameData)
            setCreatedGame(response)
        }
        fetchData()
    },[])
        return [createdGame,setCreatedGame]
}

const gameHook = {
    useGetAllGames,
    useGetOneGames,
    useFirstThreeGames,
    useCreateGame
}

export default gameHook