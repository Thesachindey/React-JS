import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    return (
        <div id='navbar'>
            <nav>
               
                    <NavLink to="/" className={( {isActive} ) => isActive ? "active-link" : "link"} >
                        <li> Home</li>
                    </NavLink>
                
               
                    <NavLink to="/about" className={({ isActive }) => isActive ? "active-link" : "link"} >
                        <li> About</li>
                    </NavLink>
                
               
                    <NavLink to="/dashboard" className={({ isActive }) => isActive ? "active-link" : "link"} >
                        <li> Dashboard</li>
                    </NavLink>
                
            </nav>
        </div>
    )
}

export default Navbar
//React-y <a></a> tag use kora hoy na.
//<Link></Link>/<NavLink></NavLink> tag use kora hoy routing-yr jonno hraf=""-y bodoly to=""