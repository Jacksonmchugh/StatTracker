import { BASE_URL } from '../globals'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const TeamList = (props) => {
  let navigate = useNavigate()
  const [team, setTeams] = useState('')

  const showTeam = (team) => {
    navigate(`/teams/${team._id}`)
  }

  useEffect(() => {
    const getTeams = async () => {
      const res = await axios.get(`${BASE_URL}/teams`)
      console.log(res.data)
      setTeams(res.data)
    }
    getTeams()
  }, [props.team])
  return (
    <div className="team_list">
      <section className="teams">
        <h3>Teams</h3>
        <div className="flex">
          {team
            ? team.map((team) => (
                <div
                  className="team-card"
                  onClick={() => showTeam(team)}
                  key={team._id}
                >
                  <img src={team.picture} alt={team.name} />
                  <h2>{team.name}</h2>
                </div>
              ))
            : ''}
        </div>
      </section>
    </div>
  )
}
export default TeamList
