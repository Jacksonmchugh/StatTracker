import React from 'react'
import { BASE_URL } from '../globals'
import axios from 'axios'
import { useEffect, useState } from 'react'

const TeamList = (props) => {
  const [teams, setTeams] = useState('')

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
        {teams
          ? teams.map((teams) => (
              <div>
                <img
                  style={{ display: 'block' }}
                  src={teams.picture}
                  alt={teams.name}
                />
                <h2>{teams.name}</h2>
              </div>
            ))
          : ''}
      </div>
    </section>
  )
}
export default TeamList
