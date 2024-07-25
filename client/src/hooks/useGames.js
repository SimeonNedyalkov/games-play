import { useEffect, useState } from 'react'
import gameAPI from '../api/games-api'
function useGetAllGames(){
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
function useGetOneGames(gameId){
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

const gameHook = {
    useGetAllGames,
    useGetOneGames,
    useFirstThreeGames
}

export default gameHook