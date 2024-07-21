import { useEffect, useState } from 'react'
import gameAPI from '../api/games-api'
export default function Home(){
    const [firstThreeGames, setFirstThreeGames] = useState([])
    useEffect(()=>{
        async function fetchData(){
            const response = await gameAPI.getFirstThree()
            setFirstThreeGames(response)
            
        }
        fetchData()
    },[])
    console.log(firstThreeGames)
    return (
        <section id="welcome-world">

            <div className="welcome-message">
                <h2>ALL new games are</h2>
                <h3>Only in GamesPlay</h3>
            </div>
            <img src="./images/four_slider_img01.png" alt="hero"/>

            <div id="home-page">
                <h1>Latest Games</h1>

                {firstThreeGames.length>0 ?
                    firstThreeGames.map(game=>(
                        <div className="game" key={game._id}>
                        <div className="image-wrap">
                            <img src={game.imageUrl}/>
                        </div>
                        <h3>{game.title}</h3>
                        <div className="rating">
                            <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
                        </div>
                        <div className="data-buttons">
                            <a href={`/games/${game._id}/details`} className="btn details-btn">Details</a>
                        </div>
                    </div>)) 
                    : <p className="no-articles">No games yet</p>
                }
            </div>
        </section>
    )
}