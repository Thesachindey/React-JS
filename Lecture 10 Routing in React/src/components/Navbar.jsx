import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    return (
        <div id='navbar'>
            <ul>
                <li>
                    <NavLink to="/" className={( {isActive} ) => isActive ? "active-link" : "link"} >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about" className={({ isActive }) => isActive ? "active-link" : "link"} >
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/dashboard" className={({ isActive }) => isActive ? "active-link" : "link"} >
                        Dashboard
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Navbar
//React-y <a></a> tag use kora hoy na.
//<Link></Link>/<NavLink></NavLink> tag use kora hoy routing-yr jonno hraf=""-y bodoly to=""