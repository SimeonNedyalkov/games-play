import Header from "./components/Header"
import Login from './components/users/Login.jsx'
import Register from './components/users/Register'
import Home from "./components/Home"
import Catalog from './components/Catalog.jsx'
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
        <Route path="all-games" element={<Catalog/>}/>
      </Routes>
    </div>
  )
}

export default App
