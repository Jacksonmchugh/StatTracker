import axios from 'axios'
import { useEffect, useState } from 'react'
import { BASE_URL } from '../globals'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

const TeamDetails = (props) => {
  const [team, setTeam] = useState('')
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

  const updateTeam = async () => {
    let res = await axios.post(`${BASE_URL}/teams/${id}`)
  }

  return team ? (
    <div className="team-detail">
      <div className="detail-header">
        <img src={team.image} alt={team.image} />
        <div
          style={{
            minWidth: '10em',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <h1>{team.name}</h1>
        </div>
      </div>
      <div className="details">
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <h3>{team.location}</h3>
          <h3>{team.players}</h3>
        </div>
        <Link to="/updateteam">Edit Team</Link>
      </div>
    </div>
  ) : null
}

export default TeamDetails
