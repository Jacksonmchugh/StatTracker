import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { BASE_URL } from '../globals'

function PlayerForm() {
  const initialState = {
    name: '',
    age: '',
    team: ''
  }
  let navigate = useNavigate()
  const [player, setPlayer] = useState({})
  const [formState, setFormState] = useState(initialState)
  useEffect(() => {
    const getPlayer = async () => {
      try {
        let res = await axios.get(`${BASE_URL}/players`)
        setPlayer(res.data)
      } catch (eer) {
        console.log(eer)
      }
    }
    getPlayer()
  }, [])
  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    console.log(formState)
    let res = await axios.post(`${BASE_URL}/playerform`, formState)
    setFormState(initialState)
    navigate('/players')
  }

  return (
    <div className="player-form">
      <h1>Add a player</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="name"
          value={player.name}
          onChange={handleChange}
          name={'name'}
          placeholder={'name'}
        />
        <input
          type="text"
          id="age"
          value={player.age}
          onChange={handleChange}
          name={'age'}
          placeholder={'age'}
        />
        <input
          type="text"
          id="team"
          value={player.team}
          onChange={handleChange}
          name={'team'}
          placeholder={'team'}
        />

        <button className="submit" type="submit">
          Add Player
        </button>
      </form>
    </div>
  )
}

export default PlayerForm
