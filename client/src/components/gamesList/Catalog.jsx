import gameHook from '../../hooks/useGames.js';
import GameListItem from './GameListItem';

export default function Catalog(){
    const [games] = gameHook.useGetAllGames()
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