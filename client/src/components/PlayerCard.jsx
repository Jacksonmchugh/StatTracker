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
            setTeam(res.data)
          } catch (eer) {
            console.log(eer)
          }
        }
        setPlayer(selectedPlayer)
      }, [])

    //   const handleChange = (event)=>{
    //     setFormState({...formState, [event.target.id]: event.target.value })
    //   }
    //   const handleSubmit = async (event)=>{
    //     console.log('updating teams here')
    //     event.preventDefault()
    //     console.log('updating teams')
    //     let res = await axios.post(`${BASE_URL}/teams/${id}`, formState)
    //     setFormState(initialState)
    //     console.log(res)
    //     alert('You updated your team.')
    //     navigate('/teams')
    //   }

      

    return(
        <div className='details_page'>
            <div className='details_grid'>
                <h1 className='team_name'>{players.name}</h1>
                <div className="details_container">
                    <h1 className="details">{players.age}</h1>
                </div>
                {/* <div className='form_section'>
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
                        />
                        </div>
                        <div className='form_container'>
                        <div className='input1'>
                        <label htmlFor="title"><Age></Age>:</label>
                        <input
                        type="text"
                        id="age"
                        onChange={handleChange}
                        value={formState.age}
                        placeholder={team.age}
                        />
                        </div>
                        </div>
                        </div>
                    </form>
                </div> */}
            </div>
        </div>

    )
        
}
export default PlayerCard