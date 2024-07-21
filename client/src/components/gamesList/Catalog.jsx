import { useEffect, useState } from 'react'
import * as gamesApi from '../../api/games-api'
import GameListItem from './GameListItem';

export default function Catalog(){
    const [games,setGames] = useState([])
    useEffect(()=>{
        async function fetchData() {
            const response = await gamesApi.getAll();
            setGames(response)
            console.log(games)
          }
          fetchData();
        }, []);
    return(
        <section id="catalog-page">
            <h1>All Games</h1>
            {/* <!-- Display div: with information about every game (if any) --> */}
            {games.length>0 
            ? games.map(game => (
                <GameListItem 
                key={game._id} 
                game={game} 
                />
            )):<h3 className="no-articles">No articles yet</h3>
        }
        </section>
    )
}