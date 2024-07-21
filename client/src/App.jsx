import Header from "./components/Header"
import Login from './components/users/Login.jsx'
import Register from './components/users/Register'
import Home from "./components/Home"
import Catalog from './components/gamesList/Catalog.jsx'
import GameCreate from './components/GameCreate'
import {Routes,Route} from 'react-router-dom'
function App() {

  return (
    <div id="box">
    <Header/>
    <main id="main-content">
    </main>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/all-games" element={<Catalog/>}/>
        <Route path='/create-game' element={<GameCreate/>}/>
      </Routes>
    </div>
  )
}

export default App
