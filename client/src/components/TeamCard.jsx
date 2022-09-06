const TeamCard = ({ team })=>{
    return(
        <span className='team-card'>
            <h3>{team.name}</h3>
            <h4>{team.location}</h4>
        </span>
    )
}
export default TeamCard