import {useParams} from 'react-router-dom'
import gameHook from '../hooks/useGames.js';
import { useCreateComments, useGetComments } from "../hooks/useComments.js";
import { useForm } from "../hooks/useForm.js";
import { useAuthContext } from '../contexts/UserContext.jsx';
import gameAPI from '../api/games-api.js';
import { useNavigate } from 'react-router-dom';

export default function Details(){
    const initialValues = {
        comment:'',
    }
    const {gameId} = useParams()
    const createComment = useCreateComments()
    const [comments,dispatch] = useGetComments(gameId)
    const [game] = gameHook.useGetOneGames(gameId)
    const {userId,email} = useAuthContext()
    const navigation = useNavigate()

    const {changeHandler,submitHandler,values} = useForm(initialValues,async ({comment})=>{
        try {
            const newComment = await createComment(gameId,comment)
            dispatch({type:'ADD_COMMENT',payload:{...newComment,author:{email}}})
            setComments(oldComments=>[...oldComments,newComment])
        } catch (error) {
            console.log(error.message)
        }
        
    })
    const isOwner = userId === game._ownerId
    async function gameDeleteHandler(){
        try {
            await gameAPI.deleteGame(gameId) 
            navigation('/')
        } catch (error) {
            console.log(error.message)
        }
    }
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
                            <p>{comment.author?.email}: {comment.text}</p>
                        </li>
                    ))}
                    
                </ul>
                {/* <!-- Display paragraph: If there are no games in the database --> */}
                {comments.length == 0 && (<p className="no-comment">No comments.</p>)}
            </div>

            {/* <!-- Edit/Delete buttons ( Only for creator of this game )  --> */}
            {isOwner && (
                <div className="buttons">
                    <a href="#" className="button">Edit</a>
                    <a href="#" onClick={gameDeleteHandler} className="button">Delete</a>
                </div>
            )}
            
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