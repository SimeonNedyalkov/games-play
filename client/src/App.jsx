import Header from "./components/Header"
import Login from './components/users/Login.jsx'
import Register from './components/users/Register'
import Home from "./components/Home"
import Catalog from './components/gamesList/Catalog.jsx'
import GameCreate from './components/GameCreate'
import Details from './components/Details.jsx'
import {Routes,Route} from 'react-router-dom'
import UserContext from "./contexts/userContext.js"
import { useState } from "react"
function App() {
  const [authState,setAuthstate] = useState({})
  const changeAuthState = (state) =>{
    // Fix this, bc its bullshit, by implementing persistant auth state
    localStorage.setItem('accessToken',state.accessToken)
    setAuthstate(state)
  }
  const contextData = {
    email:authState.email,
    accessToken:authState.accessToken,
    isAuthenticated:!!authState.email,
    changeAuthState
  }
  return (
    <UserContext.Provider value={contextData}>
    <div id="box">
    <Header/>
    <main id="main-content">
    </main>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/all-games" element={<Catalog/>}/>
        <Route path="/games/:gameId/details" element={<Details/>}/>
        <Route path='/create-game' element={<GameCreate/>}/>
      </Routes>
    </div>
    </UserContext.Provider>
  )
}

export default App
