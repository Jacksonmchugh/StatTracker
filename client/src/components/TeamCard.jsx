import { BASE_URL } from '../globals'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Team } from ".."




const TeamCard = (props)=>{
    let navigate = useNavigate()
    const [team, setTeam]= useState('')

    const initialState ={
        name: '',
        location: '',
        picture: '',
        players: '',
        description: ''
    }
    const [formState, setFormState]= useState(initialState)
    let { id } = useParams()

    useEffect(() => {
        const selectedTeam = async () => {
          try {
            let res = await axios.get(`${BASE_URL}/teams/${id}`)
            setTeam(res.data)
          } catch (eer) {
            console.log(eer)
          }
        }
        setTeam(selectedTeam)
      }, [])

      const handleChange = (event)=>{
        setFormState({...formState, [event.target.id]: event.target.value })
      }
      const handleSubmit = async (event)=>{
        event.preventDefault()
        let res = await axios.put(`${BASE_URL}/teams/${id}`, formState)
        setFormState(initialState)
        alert('You updated your team.')
        navigate('/teams')
      }
      const refreshPage = ()=>{
        window.location.reload()
      }


    return(
        <div className='details_page'>
            <div className='details_grid'>
                <h1 className='team_name'>{team.name}</h1>
                <img className='team_card' src={team.picture} alt='team picture' />
                <div className="details_container">
                    <h1 className="details">{team.location}</h1>
                    <h1 className="details">{team.players}</h1>
                    <h1 className="details">{team.description}</h1>
                </div>
                <div className='form_section'>
                    <h1 className='form_header_update'>Edit Team</h1>
                    <form onSubmit={handleSubmit}>
                        <div className='form_container'>
                        <div className='input1'>
                        <label htmlFor="title">Name:</label>
                        <input
                        type="text"
                        id="name"
                        onChange={handleChange}
                        value={formState.name}
                        placeholder={team.name}
                        /></div>
                        <div className='input1'>
                        <label htmlFor="title">Location:</label>
                        <input
                            type="text"
                            id="location"
                            onChange={handleChange}
                            value={formState.location}
                            placeholder={team.location}
                        /></div>
                        <div className='input1'>
                        <label htmlFor="title">Picture:</label>
                        <input
                            type="text"
                            id="picture"
                            onChange={handleChange}
                            value={formState.picture}
                            placeholder={team.picture}
                        /></div>
                        <div className='input1'>
                        <label htmlFor="title">Players:</label>
                        <input
                            type="text"
                            id="players"
                            onChange={handleChange}
                            value={formState.players}
                            placeholder={team.players}
                        /></div>
                        <div className='input1'>
                        <label htmlFor="title">Description:</label>
                        <input
                            type="text"
                            id="description"
                            onChange={handleChange}
                            value={formState.description}
                            placeholder={team.description}
                        /></div>
                        <div className='form_button'>
                        </div>
                        <div className='button1'>
                            <button type='submit' onClick={refreshPage}>
                                Update Team
                            </button>
                        </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
        
}
export default TeamCard