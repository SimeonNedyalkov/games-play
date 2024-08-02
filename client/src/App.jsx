import Header from "./components/Header"
import Login from './components/users/Login.jsx'
import Register from './components/users/Register'
import Home from "./components/Home"
import Catalog from './components/gamesList/Catalog.jsx'
import GameCreate from './components/GameCreate'
import Details from './components/Details.jsx'
import {Routes,Route} from 'react-router-dom'
import {AuthContextProvider} from "./contexts/UserContext.jsx"
import Logout from "./components/users/Logout.jsx"

function App() {
  
  
  return (
    <AuthContextProvider>
    <div id="box">
    <Header/>
    <main id="main-content">
    </main>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/logout" element={<Logout/>}/>
        <Route path="/all-games" element={<Catalog/>}/>
        <Route path="/games/:gameId/details" element={<Details/>}/>
        <Route path='/create-game' element={<GameCreate/>}/>
      </Routes>
    </div>
    </AuthContextProvider>
  )
}

export default App
