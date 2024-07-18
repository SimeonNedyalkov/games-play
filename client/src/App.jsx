import Header from "./components/Header"
import Login from './components/users/Login.jsx'
import Home from "./components/Home"
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
      </Routes>
    </div>
  )
}

export default App
