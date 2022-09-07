import { BASE_URL } from '../globals'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'




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
            </div>
        </div>

    )
        
}
export default TeamCard