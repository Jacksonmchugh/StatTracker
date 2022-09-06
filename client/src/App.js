import './App.css'
import { Route, Routes } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'
import TeamList from './pages/TeamList'
import { BASE_URL } from './globals'
import axios from 'axios'
import { useEffect, useState } from 'react'

const App = () => {
  const [teams, setTeams] = useState([])
  useEffect(() => {
    const getTeams = async () => {
      const res = await axios.get(`${BASE_URL}/api/teams`)
      console.log(res.data)
      setTeams(res.data)
    }
    getTeams()
  }, [])
  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/teams" element={<TeamList teams={teams} />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
