import { NavLink } from 'react-router-dom'

const Nav =()=>{
    return(
        <nav>
            <h1 className='navheader'>Ultimate Stat Tracker</h1>
            <div className='nav_bar'>
                <NavLink to=''>Home</NavLink>
                <NavLink to='/teams'>Teams</NavLink>
                <NavLink to='/players'>Players</NavLink>
                <NavLink to='/newteam'>Add a Team</NavLink>
                <NavLink to='/about'>About</NavLink>
            </div>
        </nav>
    )
}
export default Nav