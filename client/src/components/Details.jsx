import {useParams} from 'react-router-dom'
import gameHook from '../hooks/useGames.js';
import { useComments, useGetComments } from "../hooks/useComments.js";
import { useForm } from "../hooks/useForm.js";

export default function Details(){
    const initialValues = {
        comment:''
    }
    const {gameId} = useParams()
    const [game] = gameHook.useGetOneGames(gameId)
    const [comments,setComments] = useGetComments(gameId)
    
    const createGame = useComments()

    const {changeHandler,submitHandler,values} = useForm(initialValues,async ({comment})=>{
        console.log(values)
        const newComment = await createGame(gameId,comment)
        setComments(oldComments=>[...oldComments,newComment])
    })
    return(
        <section id="game-details">
        <h1>Game Details</h1>
        <div className="info-section">

            <div className="game-header">
                <img className="game-img" src={game.imageUrl} />
                <h1>{game.title}</h1>
                <span className="levels">MaxLevel: {game.maxLevel}</span>
                <p className="type">{game.category}</p>
            </div>

            <p className="text">
                {game.summary}
            </p>

            {/* <!-- Bonus ( for Guests and Users ) --> */}
            <div className="details-comments">
                <h2>Comments:</h2>
                <ul>
                    {/* <!-- list all comments for current game (If any) --> */}
                    {comments.map(comment=>(
                        <li key={comment._id} className="comment">
                            <p>Username: {comment.text}</p>
                        </li>
                    ))}
                    
                </ul>
                {/* <!-- Display paragraph: If there are no games in the database --> */}
                {comments.length == 0 && (<p className="no-comment">No comments.</p>)}
            </div>

            {/* <!-- Edit/Delete buttons ( Only for creator of this game )  --> */}
            <div className="buttons">
                <a href="#" className="button">Edit</a>
                <a href="#" className="button">Delete</a>
            </div>
        </div>

        {/* <!-- Bonus -->
        <!-- Add Comment ( Only for logged-in users, which is not creators of the current game ) --> */}
        <article className="create-comment">
            <label>Add new comment:</label>
            <form className="form" onSubmit={submitHandler}>
                <textarea 
                name="comment" 
                placeholder="Comment......"
                value={values.comment}
                onChange={changeHandler}></textarea>
                <input 
                className="btn submit" 
                type="submit"
                />
            </form>
        </article>

    </section>
    )
}