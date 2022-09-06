import React from 'react'
import { BASE_URL } from '../globals'
import axios from 'axios'
import { useEffect, useState } from 'react'

const PlayerList = (props) => {
  const [players, setPlayers] = useState('')
  useEffect(() => {
    const getPlayers = async () => {
      const res = await axios.get(`${BASE_URL}/players`)
      console.log(res.data)
      setPlayers(res.data)
    }
    getPlayers()
  }, [])
  return (
    <section className="page" id="restaurant-list">
      <h3>Players</h3>
      <div className="flex">
        {players
          ? players.map((players) => (
              <div>
                <h2>{players.name}</h2>
              </div>
            ))
          : ''}
      </div>
    </section>
  )
}
export default PlayerList
