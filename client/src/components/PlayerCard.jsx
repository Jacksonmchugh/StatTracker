import { BASE_URL } from '../globals'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'





const PlayerCard = (props)=>{
    let navigate = useNavigate()
    const [player, setPlayer]= useState('')

    const initialState ={
        name: '',
        age: '',
        
    }
    const [formState, setFormState]= useState(initialState)
    let { id } = useParams()

    useEffect(() => {
        const selectedPlayer = async () => {
          try {
            let res = await axios.get(`${BASE_URL}/players/${id}`)
            setPlayer(res.data)
          } catch (eer) {
            console.log(eer)
          }
        }
        setPlayer(selectedPlayer)
      }, [])

      const handleChange = (event)=>{
        setFormState({...formState, [event.target.id]: event.target.value })
      }
      const handleSubmit = async (event)=>{
        console.log('updating player here')
        event.preventDefault()
        console.log('updating teams')
        let res = await axios.put(`${BASE_URL}/players/${id}`, formState)
        setFormState(initialState)
        console.log(res)
        alert('You updated a player.')
        navigate('/player')
      }


      

    return(
        <div className='details_page'>
            <div className='details_grid'>
                <h1 className='team_name'>{player.name}</h1>
                <div className="details_container">
                    <h1 className="details">{player.age}</h1>
                    <h1 className='details'>{player.team}</h1>
                    <div className='form_section'>
                    <h1 className='form_header_update'>Edit Player</h1>
                    <form onSubmit={handleSubmit}>
                        <div className='form_container'>
                        <div className='input1'>
                        <label htmlFor="title">Name:</label>
                        <input
                        type="text"
                        id="name"
                        onChange={handleChange}
                        value={formState.name}
                        placeholder={player.name}
                        /></div>
                        <div className='input1'>
                        <label htmlFor="title">Age:</label>
                        <input
                            type="text"
                            id="age"
                            onChange={handleChange}
                            value={formState.age}
                            placeholder={player.age}
                        /></div>
                        <div className='form_button'>
                        </div>
                        <div className='button1'>
                            <button type='submit' >
                                Update Player
                            </button>
                        </div>
                        {/* <div className='button3'>
                            <button onClick={deleteTeam}>
                                Delete Team
                            </button>
                        </div> */}
                        </div>
                    </form>
                </div>
                </div>
            </div>
        </div>

    )
        
}
export default PlayerCard