import React from 'react'
import TeamCard from '../components/TeamCard'
import { BASE_URL } from '../globals'
import axios from 'axios'
import { useEffect, useState } from 'react'

const TeamList = ({ team }) => {
  const [teams, setTeams] = useState([])
  console.log('teams')
  useEffect(() => {
    const getTeams = async () => {
      const res = await axios.get(`${BASE_URL}/teams`)
      console.log(res.data)
      setTeams(res.data)
    }
    getTeams()
  }, [])
  return (
    <section className="page" id="restaurant-list">
      <h3>Teams</h3>
      <div className="flex">
        {team ? team.map((teams) => <TeamCard team={team} />) : ''}
      </div>
    </section>
  )
}
export default TeamList
