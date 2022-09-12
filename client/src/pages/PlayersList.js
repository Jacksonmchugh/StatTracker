import React from 'react'
import { BASE_URL } from '../globals'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const PlayerList = (props) => {
  let navigate = useNavigate()
  const [player, setPlayer] = useState('')

  const showPlayer = (player) => {
    navigate(`/players/${player._id}`)
  }

  useEffect(() => {
    const getPlayer = async () => {
      const res = await axios.get(`${BASE_URL}/players`)
      console.log(res.data)
      setPlayer(res.data)
    }
    getPlayer()
  }, [props.player])

  return (
    <div className="player">
      <section className="players">
        <h3>Players</h3>
        <div className="flex">
          {player
            ? player.map((player) => (
                <div
                  className="player-card"
                  onClick={() => showPlayer(player)}
                  key={player._id}
                >
                  <div>
                    <h2>{player.name}</h2>
                    <h3>{player.team}</h3>
                  </div>
                </div>
              ))
            : ''}
        </div>
      </section>
    </div>
  )
}
export default PlayerList
