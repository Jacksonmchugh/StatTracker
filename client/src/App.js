import './App.css'
import { Route, Routes } from 'react-router-dom'
import { useState, useEffect } from 'react'
// import axios from 'axios'
import { BASE_URL } from './globals'
import Nav from './components/Nav'
import Home from './pages/Home'
import TeamList from './pages/TeamList'

const App = () => {
  // const [teams, setTeams] = useState([])
  // useEffect(() => {
  //   const getTeams = async () => {
  //     const res = await axios.get(`${BASE_URL}/api/teams`)
  //     setTeams(res.data)
  //   }
  //   getTeams()
  // }, [])
  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/teams" element={<TeamList />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
