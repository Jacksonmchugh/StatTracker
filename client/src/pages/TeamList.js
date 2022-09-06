import React from 'react'
import TeamCard from '../components/TeamCard'

const TeamList = ({ team }) => {
  return (
    <section className="page" id="restaurant-list">
      <h3>Teams</h3>
      <div className="flex">
        {team.map((team) => (
          <TeamCard team={team} />
        ))}
      </div>
    </section>
  )
}
export default TeamList
