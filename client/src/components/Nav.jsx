import { NavLink } from 'react-router-dom'

const Nav =()=>{
    return(
        <nav>
            <h1>Stat Tracker</h1>
            <div>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/teams'>Teams</NavLink>
            </div>
        </nav>
    )
}
export default Nav