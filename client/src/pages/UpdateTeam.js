import { BASE_URL } from '../globals'
import axios from 'axios'
import { useEffect, useNavigate, useState } from 'react'

const UpdateTeam = () => {
  const initialState = {
    name: '',
    location: '',
    image: '',
    players: [],
    description: ''
  }
  const [team, setTeam] = useState({})
  //   let navigate = useNavigate()

  const [formState, setFormState] = useState(initialState)
  useEffect(() => {
    const getTeam = async () => {
      try {
        let res = await axios.post(`${BASE_URL}/updateteam`)
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
    let res = await axios.put(`${BASE_URL}/updateteam`, formState)
    setFormState(initialState)
  }

  return (
    <div className="form">
      <h1>Update Team</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="name"
          value={team.name}
          onChange={handleChange}
          name={'name'}
          placeholder={'name'}
        />
        <input
          type="text"
          id="location"
          value={team.location}
          onChange={handleChange}
          name={'location'}
          placeholder={'location'}
        />
        <input
          type="text"
          id="image"
          value={team.image}
          onChange={handleChange}
          name={'image'}
          placeholder={'image'}
        />

        <input
          type="text"
          id="image"
          value={team.players}
          onChange={handleChange}
          name={'players'}
          placeholder={'players'}
        />
        <input
          type="text-area"
          id="description"
          value={team.description}
          onChange={handleChange}
          name={'description'}
          placeholder={'description'}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
export default UpdateTeam
