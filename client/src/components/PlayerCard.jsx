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

    

      

    return(
        <div className='details_page'>
            <div className='details_grid'>
                <h1 className='team_name'>{player.name}</h1>
                <div className="details_container">
                    <h1 className="details">{player.age}</h1>
                    <h1 className='details'>{player.team}</h1>
                </div>
            </div>
        </div>

    )
        
}
export default PlayerCard