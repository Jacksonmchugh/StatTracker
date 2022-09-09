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
        navigate('/players')
      }

      const deletePlayer = async ()=>{
        let res = await axios.delete(`${BASE_URL}/players/${id}`, formState)
        alert('You deleted this player')
        navigate('/players')
      }

    const [totalScores, setTotalScores] = useState(0);
    function incrementScores() {
          setTotalScores(totalScores + 1);
        }
        function decrementScores() {
          if (totalScores) setTotalScores(totalScores - 1);
        }

        const [totalDrops, setTotalDrops] = useState(0);
        function incrementDrops() {
              setTotalDrops(totalDrops + 1);
            }
            function decrementDrops() {
              if (totalDrops) setTotalDrops(totalDrops - 1);
            }

            const [totalBlocks, setTotalBlocks] = useState(0);
            function incrementBlocks() {
                  setTotalBlocks(totalBlocks + 1);
                }
                function decrementBlocks() {
                  if (totalBlocks) setTotalBlocks(totalBlocks - 1);
                }
    

      


      

    return(
        <div className='details_page'>
            <div className='details_grid'>
                <h1 className='team_name'>{player.name}</h1>
                <div className="details_container">
                    <h1 className="details">{player.age}</h1>
                    <h1 className='details'>{player.team}</h1>
                    <h1 className='stats'>Stats</h1>
                    <h2>Scores:
                        <p>{totalScores}</p>
                        <button className='increment' onClick={incrementScores}>+</button>
                        <button className='decrement' onClick={decrementScores}>-</button>
                    </h2>
                    <h2>Drops:
                        <p>{totalDrops}</p>
                        <button className='increment' onClick={incrementDrops}>+</button>
                        <button className='decrement' onClick={decrementDrops}>-</button>
                    </h2>
                    <h2>Blocks:
                        <p>{totalBlocks}</p>
                        <button className='increment' onClick={incrementBlocks}>+</button>
                        <button className='decrement' onClick={decrementBlocks}>-</button>
                    </h2>
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
                        <div className='button'>
                            <button type='submit' >
                                Update Player
                            </button>
                        </div>
                        <div className='button'>
                            <button onClick={deletePlayer}>
                                Delete Player
                            </button>
                        </div>
                        </div>
                    </form>
                </div>
                </div>
            </div>
        </div>

    )
        
}
export default PlayerCard