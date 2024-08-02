import { useForm } from "../hooks/useForm"
import {useNavigate, useParams} from 'react-router-dom'
import gameHook from "../hooks/useGames"
import gameAPI from "../api/games-api"
const initialValues = {
    title:'',
    category:'',
    maxLevel:'',
    imageUrl:'',
    summary:''
}
export default function GameEdit(){
    const {gameId} = useParams()
    const [game,setGame] = gameHook.useGetOneGames(gameId)
    const navigation = useNavigate()
    console.log(game)
    const {changeHandler,submitHandler,values} = useForm(Object.assign(initialValues,game),async (values)=>{
        const isConfirmed = confirm('Are you sure you want to update this game')
        if(isConfirmed){
            await gameAPI.updateGame(gameId,values)
            navigation(`/games/${gameId}/details`)
        }
        
    })
    return(
        <section id="edit-page" className="auth">
            <form id="edit" onSubmit={submitHandler}>
                <div className="container">

                    <h1>Edit Game</h1>
                    <label htmlFor="leg-title">Legendary title:</label>
                    <input onChange={changeHandler} type="text" id="title" name="title" value={values.title}/>

                    <label htmlFor="category">Category:</label>
                    <input onChange={changeHandler} type="text" id="category" name="category" value={values.category}/>

                    <label htmlFor="levels">MaxLevel:</label>
                    <input onChange={changeHandler} type="number" id="maxLevel" name="maxLevel" min="1" value={values.maxLevel}/>

                    <label htmlFor="game-img">Image:</label>
                    <input onChange={changeHandler} type="text" id="imageUrl" name="imageUrl" value={values.imageUrl}/>

                    <label htmlFor="summary">Summary:</label>
                    <textarea onChange={changeHandler} value={values.summary} name="summary" id="summary"></textarea>
                    <input className="btn submit" type="submit"/>

                </div>
            </form>
        </section>
    )
}