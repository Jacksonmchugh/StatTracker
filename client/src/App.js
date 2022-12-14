import './App.css'
import { Route, Routes } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'
import TeamList from './pages/TeamList'
import PlayerList from './pages/PlayersList'
import TeamForm from './pages/TeamForm'
import TeamCard from './components/TeamCard'
import PlayerForm from './pages/PlayerForm'
import PlayerCard from './components/PlayerCard'
import About from './pages/About'

const App = () => {
  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <main>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/teams" element={<TeamList />} />
          <Route path="/players" element={<PlayerList />} />
          <Route path="/newteam" element={<TeamForm />} />
          <Route path="/teams/:id" element={<TeamCard />} />
          <Route path="/newplayer" element={<PlayerForm />} />
          <Route path="/players/:id" element={<PlayerCard />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
