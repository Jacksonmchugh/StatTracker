import React from 'react'
import { BASE_URL } from '../globals'
import axios from 'axios'
import { useEffect, useState, useNavigate } from 'react'

const PlayerList = (props) => {
  const [players, setPlayer] = useState('')
  //   let navigate = useNavigate()

  useEffect(() => {
    const getPlayer = async () => {
      const res = await axios.get(`${BASE_URL}/players`)
      console.log(res.data)
      setPlayer(res.data)
    }
    getPlayer()
  }, [])

  return (
    <section className="page" id="restaurant-list">
      <h3>Players</h3>
      <div className="flex">
        {players
          ? players.map((players) => (
              <div
              // className="team-card"
              // onClick={() => showPlayer(players)}
              // key={players._id}
              >
                <div>
                  <h2>{players.name}</h2>
                  <h3>{players.team}</h3>
                </div>
              </div>
            ))
          : ''}
      </div>
    </section>
  )
}
export default PlayerList
