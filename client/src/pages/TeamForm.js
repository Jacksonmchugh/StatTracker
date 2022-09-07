import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { BASE_URL } from '../globals'

function TeamForm() {
  const initialState = {
    name: '',
    location: '',
    picture: ''
  }
  const [team, setTeam] = useState({})
  let navigate = useNavigate()
  const [formState, setFormState] = useState(initialState)
  useEffect(() => {
    const getTeam = async () => {
      try {
        let res = await axios.get(`${BASE_URL}/teams`)
        setTeam(res.data)
      } catch (eer) {
        console.log(eer)
      }
    }
    getTeam()
  }, [])

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    console.log(formState)
    let newTeam = await axios.post(`${BASE_URL}/teamform`, formState)
    console.log(newTeam)
    alert('You created a team')
    setFormState(initialState)
    navigate('/teams')
  }

  return (
    <div className="team-form">
      <h1>Add your team</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="name"
          value={formState.name}
          onChange={handleChange}
          name={'name'}
          placeholder={'name'}
        />
        <input
          type="text"
          id="location"
          value={formState.location}
          onChange={handleChange}
          name={'location'}
          placeholder={'location'}
        />
        <input
          type="text"
          id="picture"
          value={formState.picture}
          onChange={handleChange}
          name="picture"
          placeholder="picture"
        />

        <input
          type="text"
          id="description"
          value={formState.description}
          onChange={handleChange}
          name="description"
          placeholder="description"
        />
        <button type="submit">Add team</button>
      </form>
    </div>
  )
}

export default TeamForm
